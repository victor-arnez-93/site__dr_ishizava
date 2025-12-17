/* ============================================================
   SCROLL SUAVE NO MENU
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        if (alvo) {
            window.scrollTo({
                top: alvo.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

/* ============================================================
   ANIMAÇÃO DE ENTRADA DAS SEÇÕES (FADE-UP)
============================================================ */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".animar").forEach(sec => observer.observe(sec));

/* ============================================================
   ANIMAÇÃO DO HEADER (MINI SOMBRA AO ROLAR)
============================================================ */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 10) {
        header.classList.add("header-shadow");
    } else {
        header.classList.remove("header-shadow");
    }
});

/* ============================================================
   HOVER SUAVE EM BOTÕES (EFEITO CARDÍACO)
============================================================ */
document.querySelectorAll(".btn-whats, .btn-enviar, .botao-whats-2").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.03)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

/* ============================================================
   PLACEHOLDERS INTELIGENTES (efeito médico clean)
============================================================ */
document.querySelectorAll("input, textarea").forEach(campo => {
    campo.addEventListener("focus", () => {
        campo.style.borderColor = "#386FA4";
        campo.style.background = "#ffffff";
    });
    campo.addEventListener("blur", () => {
        campo.style.borderColor = "#d0d0d0";
        campo.style.background = "#f8f9fa";
    });
});

/* ============================================================
   URL DO CSV DA PLANILHA GOOGLE SHEETS
============================================================ */
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT2QtZrlZdSIo5Bb5Jc24boSav8yo1WCq786jXIc1SppJjtOPeV-vb6_vk4V_ts1uOVPJCUJKmjqqpQ/pub?output=csv';

/* ============================================================
   PARSE DE CSV (SUPORTA TEXTOS COM VÍRGULAS E ASPAS)
============================================================ */
function parseCSV(csv) {
    const linhas = csv.trim().split(/\r?\n/);

    // detectar separador automático (vírgula ou ponto e vírgula)
    const separador = linhas[0].includes(";") ? ";" : ",";

    // cabeçalho limpo
    const cabecalho = linhas[0]
        .split(separador)
        .map(h => h.trim().replace(/(^"|"$)/g, ""));

    return linhas.slice(1).map(linha => {
        const partes = [];
        let atual = "";
        let dentroDeAspas = false;

        for (let char of linha) {
            if (char === '"' && dentroDeAspas) {
                dentroDeAspas = false;
            } else if (char === '"' && !dentroDeAspas) {
                dentroDeAspas = true;
            } else if (char === separador && !dentroDeAspas) {
                partes.push(atual.trim());
                atual = "";
            } else {
                atual += char;
            }
        }
        partes.push(atual.trim());

        const obj = {};
        cabecalho.forEach((col, i) => {
            obj[col] = partes[i]?.replace(/(^"|"$)/g, "") ?? "";
        });
        return obj;
    });
}

/* ============================================================
   CARREGAR ARTIGOS DO GOOGLE SHEETS
============================================================ */
function carregarArtigos() {
    fetch(csvUrl)
        .then(r => r.text())
        .then(t => {
            const artigos = parseCSV(t);
            const container = document.getElementById("lista-artigos");

            if (!container) return;

            container.innerHTML = artigos.map(a => `
                <div class="artigo-card animar">
                    <h3>${a.titulo}</h3>
                    <p>${a.resumo}</p>
                    <a href="artigo.html?slug=${a.slug}" class="leia-mais">
                        Ler completo <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            `).join('');

            // 🔥 FORÇAR ANIMAÇÃO DOS NOVOS ELEMENTOS
            setTimeout(() => {
                document.querySelectorAll('#lista-artigos .animar').forEach(card => {
                    card.classList.add('mostrar');
                });
            }, 100);
        })
        .catch(err => {
            console.error('Erro ao carregar artigos:', err);
            const container = document.getElementById("lista-artigos");
            if (container) {
                container.innerHTML = '<p style="text-align:center; color:#999;">Erro ao carregar artigos. Tente novamente mais tarde.</p>';
            }
        });
}

/* ============================================================
   INICIALIZAR CARREGAMENTO DOS ARTIGOS
============================================================ */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarArtigos);
} else {
    carregarArtigos();
}

/* ============================================================
   ENVIO DO FORMULÁRIO PARA GOOGLE SHEETS
============================================================ */
const formContato = document.querySelector('#contato form');

if (formContato) {
  formContato.addEventListener('submit', function(e) {
    e.preventDefault();

    const btnEnviar = this.querySelector('.btn-enviar');
    const textoOriginal = btnEnviar.textContent;

    // Mostra mensagem de carregamento
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = '0.6';

    // Captura os dados do formulário
    const formData = new FormData(this);

    // URL do Google Apps Script (COLE SUA URL AQUI)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAjnp8gCBfqtXLtGL-8seatVXEAkn0b3wZ5GgxKF3QNHECnI3v8NjKNRUrZo4_yhpu/exec';

    // Envia para o Google Sheets
    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success') {
        alert('✅ Mensagem enviada com sucesso!\n\nEm breve entraremos em contato. Obrigado!');
        formContato.reset();
      } else {
        alert('❌ Erro ao enviar: ' + data.message);
      }
    })
    .catch(error => {
      alert('❌ Erro ao enviar mensagem.\n\nPor favor, tente novamente ou entre em contato pelo WhatsApp.');
      console.error('Erro:', error);
    })
    .finally(() => {
      // Restaura o botão
      btnEnviar.textContent = textoOriginal;
      btnEnviar.disabled = false;
      btnEnviar.style.opacity = '1';
    });
  });
}
