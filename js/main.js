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

/* ============================= */
/* BOTÃO VOLTAR AO TOPO */
/* ============================= */
const btnTop = document.querySelector('.floating-top');
window.addEventListener('scroll', () => {
    if (btnTop) {
        if (window.scrollY > 300) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    }
});

/* ============================================================
   ARTIGOS — DADOS DIRETO NO CÓDIGO
============================================================ */
const ARTIGOS = [
    {
        slug: "cannabis-medicinal-mito-verdade-tratamento-dor-insonia",
        titulo: "Cannabis Medicinal: O que é mito, o que é verdade e como ela pode transformar o tratamento da dor e da insônia",
        resumo: "Quando você ouve falar em &ldquo;Cannabis Medicinal&rdquo;, qual é a primeira coisa que vem à sua mente? É absolutamente normal que surjam dúvidas, receios e até um pouco de preconceito.",
        data: "2026-04-13",
        autor: "Dr. Renato Ishizava",
        conteudo: `
<p>Quando você ouve falar em &ldquo;Cannabis Medicinal&rdquo;, qual é a primeira coisa que vem à sua mente? É absolutamente normal que surjam dúvidas, receios e até um pouco de preconceito. Afinal, por muito tempo, fomos ensinados a olhar para essa planta com desconfiança.</p>

<p>Mas e se eu te disser que ela abriga compostos capazes de devolver a qualidade de vida para quem já tentou de tudo contra a dor crônica e a insônia? Esqueça o que você ouviu falar por aí; hoje, quero ter uma conversa franca com você sobre o que a ciência e a medicina moderna têm a dizer.</p>

<p>Como médico especialista no tratamento da dor e da insônia, vejo diariamente no meu consultório pacientes exaustos. Pessoas que não aguentam mais depender de remédios que agridem o estômago ou de calmantes tarja preta que deixam uma sensação de &ldquo;ressaca&rdquo; no dia seguinte. A boa notícia é que a medicina evoluiu, e a Cannabis Medicinal se consolidou como uma alternativa terapêutica séria, legalizada e com resultados transformadores.</p>

<h3>O &ldquo;Maestro&rdquo; do nosso corpo</h3>

<p>Para entender como a Cannabis funciona, você não precisa de um dicionário médico. Basta saber que o nosso corpo possui um sistema fascinante chamado <strong>Sistema Endocanabinoide</strong>.</p>

<p>Pense nele como o grande &ldquo;maestro&rdquo; do seu organismo. A função desse maestro é manter tudo em perfeito equilíbrio: regulando o seu sono, o seu humor, a sua imunidade e a forma como você sente a dor. O detalhe incrível é que o nosso próprio corpo já produz substâncias (os endocanabinoides) para ajudar esse maestro a trabalhar.</p>

<p>Quando sofremos com dores crônicas, fibromialgia ou insônia severa, é como se a orquestra estivesse desafinada. O maestro perde o controle. É exatamente aí que a Cannabis Medicinal entra: os compostos da planta (como o CBD e o THC) são tão parecidos com os que nós mesmos produzimos que eles conseguem &ldquo;ajudar o maestro&rdquo; a colocar a orquestra no ritmo novamente, devolvendo o equilíbrio ao corpo.</p>

<h3>Cannabis Medicinal vicia? (Quebrando o maior mito)</h3>

<p>Essa é a dúvida número um no consultório. E a resposta direta é: <strong>não, o tratamento médico não vicia.</strong></p>

<p>Precisamos separar o uso recreativo do uso medicinal. No tratamento médico, utilizamos produtos purificados, em doses rigorosamente controladas (calculadas gota a gota para você) e com acompanhamento constante.</p>

<p>Muitas pessoas têm medo do THC, mas, em doses médicas, ele é um excelente analgésico e relaxante muscular, sem causar dependência ou o &ldquo;barato&rdquo; associado ao uso recreativo. Na verdade, o que vemos na prática clínica é o oposto: a Cannabis Medicinal tem ajudado milhares de pacientes a <strong>reduzirem e até fazerem o desmame</strong> de remédios que realmente causam dependência, como os opioides (morfina, codeína) e os indutores de sono (como o Zolpidem).</p>

<h3>Para quem é indicado?</h3>

<p>No meu dia a dia, utilizo a Cannabis Medicinal principalmente para duas grandes frentes:</p>

<ol>
    <li><strong>Dor Crônica e Fibromialgia:</strong> Em vez de apenas &ldquo;anestesiar&rdquo; a dor à força, os fitocanabinoides agem reduzindo a inflamação e acalmando a hipersensibilidade do sistema nervoso. O corpo para de emitir sinais de dor o tempo todo.</li>
    <li><strong>Insônia:</strong> Para quem tem dificuldade de desligar a mente à noite, a Cannabis atua diminuindo a ansiedade noturna. Ela promove um sono profundo e reparador, permitindo que você acorde com energia, sem aquela sensação de estar dopado.</li>
</ol>

<h3>Como funciona o tratamento no Brasil?</h3>

<p>O tratamento é <strong>100% legalizado e regulamentado pela Anvisa</strong>. E não, o tratamento não envolve &ldquo;fumar&rdquo;. A via de administração mais comum e segura é o óleo (em gotas sublinguais), mas também existem cápsulas e gomas.</p>

<p>O processo é seguro e estruturado:</p>

<ol>
    <li>Passamos por uma consulta médica detalhada para entender o seu caso.</li>
    <li>Se houver indicação, eu emito uma receita médica especial.</li>
    <li>Com essa receita, solicitamos uma autorização simples e rápida na Anvisa.</li>
    <li>Você adquire o medicamento legalmente (em farmácias ou via importação autorizada).</li>
</ol>

<h3>O objetivo é retomar o controle da sua vida</h3>

<p>A Cannabis Medicinal não é mágica, mas é uma ferramenta poderosa, especialmente quando unida à Medicina do Estilo de Vida (ajustes na alimentação, movimento e rotina). O meu objetivo não é apenas prescrever um óleo; é ver você voltar a ter energia para brincar com seus filhos, render bem no trabalho e curtir a sua família sem que a dor ou o cansaço ditem as regras.</p>

<p>Se você sofre com dores constantes ou noites mal dormidas e quer entender se o tratamento com Cannabis Medicinal é indicado para o seu caso, eu estou aqui para te orientar com toda a segurança e ética.</p>

<p>Atendo presencialmente em <strong>Tatuí-SP</strong> e via <strong>Telemedicina</strong> para todo o Brasil.</p>

<a href='https://wa.me/5515991236775' target='_blank' class='btn-whatsapp-artigo'><i class='fa-brands fa-whatsapp'></i><span>Clique aqui para agendarmos a sua avaliação</span></a>

<p class='assinatura'><strong>Dr. Renato Ishizava</strong><br>CRM/SP 217868 | RQE 135.751</p>`
    },
    {
        slug: "dor-cronica-remedios-tradicionais-param-efeito",
        titulo: "Dor crônica: por que os remédios tradicionais param de fazer efeito (e o que fazer a respeito)",
        resumo: "Você acorda e, antes mesmo de levantar da cama, a dor já está lá. Você toma um anti-inflamatório ou um analgésico forte, sente um alívio passageiro, mas no fim do dia o ciclo recomeça.",
        data: "2026-04-13",
        autor: "Dr. Renato Ishizava",
        conteudo: `
<p>Você acorda e, antes mesmo de levantar da cama, a dor já está lá. Você toma um anti-inflamatório ou um analgésico forte, sente um alívio passageiro, mas no fim do dia o ciclo recomeça. Com o tempo, você percebe que já deixou de brincar com sua filha, cancelou um jantar com amigos ou perdeu o foco no trabalho porque o corpo simplesmente não aguentava.</p>

<p>Se essa é a sua realidade, saiba de duas coisas muito importantes: você não está sozinho (cerca de 37% dos brasileiros acima de 50 anos sofrem com dores crônicas) e, principalmente, a culpa não é sua.</p>

<p>Como médico especialista no tratamento da dor, ouço relatos como esse todos os dias no consultório. A frustração de tentar diversos tratamentos e continuar sentindo dor é desgastante. Mas hoje, quero explicar a você por que isso acontece e mostrar que existe uma luz no fim do túnel.</p>

<h3>A armadilha dos remédios tradicionais</h3>

<p>Para entender o problema, precisamos diferenciar a dor aguda da dor crônica. A dor aguda é um alarme: você torce o pé, dói, você trata e passa. Já a dor crônica (aquela que dura mais de três meses, como na fibromialgia ou dores lombares persistentes) é como um alarme de incêndio que quebrou e continua tocando mesmo quando não há mais fogo. O seu sistema nervoso se tornou hipersensível.</p>

<p>O grande problema do tratamento convencional é que ele foca apenas em &ldquo;desligar o alarme&rdquo; temporariamente. O uso contínuo de anti-inflamatórios e analgésicos fortes (como os opioides) cria um ciclo perigoso. Eles mascaram o sintoma por algumas horas, mas não tratam a raiz do problema. Pior ainda: a longo prazo, podem agredir seu estômago, fígado e rins.</p>

<h3>O corpo acostuma com o remédio?</h3>

<p>Uma queixa muito comum é: &ldquo;Doutor, esse remédio não faz mais efeito para mim&rdquo;. Isso tem uma explicação científica chamada <strong>tolerância</strong>.</p>

<p>Quando você usa analgésicos fortes por muito tempo, o seu corpo se adapta àquela substância. Para conseguir o mesmo alívio de antes, você precisa de doses cada vez maiores. É um ciclo que gera muito medo nos pacientes — e com razão —, pois o aumento constante das doses eleva o risco de dependência química e de efeitos colaterais graves.</p>

<h3>Olhando para a raiz do problema: O seu Estilo de Vida</h3>

<p>A dor não é apenas física; ela é profundamente influenciada pela forma como vivemos. É aqui que entra a <strong>Medicina do Estilo de Vida</strong>, uma abordagem científica que olha para você como um todo, e não apenas para a sua dor.</p>

<p>Pequenas mudanças no seu dia a dia (que chamamos de micro-intervenções) têm um impacto gigantesco na redução da dor. Veja três exemplos práticos:</p>

<ol>
    <li><strong>O Sono e a Dor:</strong> Existe uma via de mão dupla aqui. A dor atrapalha o sono, e a privação de sono aumenta drasticamente a sua percepção de dor no dia seguinte. Quando você não tem um sono reparador, seu corpo não consegue reduzir a inflamação.</li>
    <li><strong>A Alimentação:</strong> O que você coloca no prato pode ser um remédio ou um veneno. Alimentos ultraprocessados e ricos em açúcar aumentam a inflamação sistêmica do corpo, piorando quadros como a fibromialgia.</li>
    <li><strong>O Movimento:</strong> Quando sentimos dor, a tendência natural é ficar em repouso absoluto. Porém, a falta de movimento atrofia os músculos e enrijece as articulações, o que... gera mais dor! O movimento adequado e orientado é um dos melhores analgésicos naturais que existem.</li>
</ol>

<h3>Uma nova via de tratamento: A Cannabis Medicinal</h3>

<p>Muitos pacientes chegam até mim quando sentem que &ldquo;já tentaram de tudo&rdquo;. É nesse cenário que a Cannabis Medicinal tem se mostrado uma ferramenta transformadora.</p>

<p>Nosso corpo possui um sistema chamado <strong>Sistema Endocanabinoide</strong>. Imagine que ele é o &ldquo;maestro&rdquo; do seu corpo, responsável por manter tudo em equilíbrio — regulando o sono, o humor, a imunidade e, claro, a percepção da dor.</p>

<p>Diferente dos remédios tradicionais que apenas &ldquo;apagam&rdquo; a dor à força, os compostos da Cannabis Medicinal (como o CBD e o THC, em doses controladas) conversam naturalmente com esse maestro. Eles ajudam a modular o sistema nervoso, reduzindo a inflamação e a hipersensibilidade de forma muito mais suave e contínua.</p>

<p><strong>É seguro? Vicia?</strong> Essa é a dúvida número um. O tratamento médico com Cannabis é legalizado pela Anvisa, rigorosamente controlado e não gera o &ldquo;barato&rdquo; do uso recreativo. Além disso, estudos recentes mostram que a Cannabis atua como uma excelente terapia adjuvante, ajudando pacientes a reduzirem o uso de opioides e remédios tarja preta, com um risco de dependência baixíssimo quando acompanhado por um médico capacitado.</p>

<h3>Retomando o controle da sua vida</h3>

<p>A dor crônica tentou roubar a sua qualidade de vida, mas o tratamento ideal pode devolvê-la. Não existe uma &ldquo;pílula mágica&rdquo;, mas sim um cuidado integral: ajustar os pilares do seu estilo de vida e utilizar terapias inovadoras e seguras, como a Cannabis Medicinal, para reequilibrar o seu corpo.</p>

<p>Você merece voltar a ter noites de sono reparadoras, brincar com seus filhos sem medo e render bem no seu trabalho.</p>

<p>Se você está cansado de tentar os mesmos tratamentos sem sucesso e busca um acompanhamento médico próximo, humano e personalizado, eu posso te ajudar.</p>

<p>Atendo presencialmente em <strong>Tatuí-SP</strong> e também via <strong>Telemedicina</strong> para todo o Brasil.</p>

<a href='https://wa.me/5515991236775' target='_blank' class='btn-whatsapp-artigo'><i class='fa-brands fa-whatsapp'></i> Clique aqui para agendar uma avaliação</a>

<p class='assinatura'><strong>Dr. Renato Ishizava</strong><br>CRM/SP 217868 | RQE 135.245</p>`
    },
    {
        slug: "insonia-cansado-remedios-tratar-pela-raiz",
        titulo: "Cansado de depender de remédios para dormir? Descubra como tratar a insônia pela raiz",
        resumo: "São 3 da manhã. Você olha para o relógio, faz as contas de quantas horas ainda tem para tentar dormir e a ansiedade só aumenta.",
        data: "2026-04-13",
        autor: "Dr. Renato Ishizava",
        conteudo: `
<p>São 3 da manhã. Você olha para o relógio, faz as contas de quantas horas ainda tem para tentar dormir e a ansiedade só aumenta. No dia seguinte, o cansaço é tanto que o seu rendimento no trabalho despenca e a paciência simplesmente desaparece. Você chega em casa exausto e a única coisa que queria era ter energia para brincar com seus filhos ou curtir um momento tranquilo com a sua família, mas o corpo não responde.</p>

<p>Se você já chegou ao ponto de achar que só consegue &ldquo;apagar&rdquo; se tomar um remédio, eu preciso ter uma conversa muito franca com você.</p>

<p>Como médico especialista em Clínica Médica e Medicina do Estilo de Vida, acompanho diariamente pacientes que chegam ao meu consultório em Tatuí frustrados e com muito medo. O medo de nunca mais conseguirem dormir naturalmente e, principalmente, o medo do vício em remédios tarja preta.</p>

<h3>A ilusão do sono &ldquo;nocaute&rdquo;</h3>

<p>A insônia não é apenas a dificuldade de pegar no sono; ela também se manifesta quando você acorda várias vezes de madrugada ou desperta exausto, sentindo que a noite não serviu para nada.</p>

<p>Para tentar resolver isso rápido, vivemos hoje uma verdadeira &ldquo;epidemia&rdquo; do uso de indutores de sono (como o Zolpidem) e calmantes (os benzodiazepínicos). O grande problema é que essas medicações não induzem um sono verdadeiro; elas literalmente &ldquo;nocauteiam&rdquo; o seu cérebro. Você apaga, mas não atinge as fases profundas do sono, que são essenciais para a reparação do corpo e da memória.</p>

<h3>O preço alto das pílulas para dormir</h3>

<p>O uso prolongado desses medicamentos cobra um preço altíssimo. O primeiro deles é o famoso &ldquo;efeito ressaca&rdquo;: você acorda grogue, com dificuldade de concentração e falhas de memória.</p>

<p>O segundo, e mais perigoso, é a tolerância e a dependência. Com o tempo, um comprimido já não faz efeito. Você precisa de dois, depois de gotas mais fortes. E se tentar parar de uma vez por conta própria, sofre com o &ldquo;efeito rebote&rdquo;: a insônia volta ainda pior, acompanhada de crises de ansiedade. É por isso que o desmame de qualquer medicação deve ser feito com muita cautela e sempre com acompanhamento médico.</p>

<h3>O Padrão Ouro: Retreinando o seu cérebro</h3>

<p>A boa notícia é que a ciência já nos mostrou que os remédios não são a melhor solução a longo prazo. O tratamento considerado &ldquo;Padrão Ouro&rdquo; no mundo todo para a insônia crônica não é uma pílula, mas sim a <strong>TCC-I (Terapia Cognitivo-Comportamental para Insônia)</strong>.</p>

<p>Não estamos falando apenas de &ldquo;tomar um chazinho e apagar a luz&rdquo;. A TCC-I é um método científico para retreinar o seu cérebro. Com técnicas específicas, ajudamos você a quebrar o ciclo de ansiedade noturna e a voltar a associar a sua cama ao descanso, e não a um campo de batalha.</p>

<h3>A união da Medicina do Estilo de Vida e da Cannabis Medicinal</h3>

<p>Para que o tratamento seja um sucesso definitivo, eu utilizo no meu consultório a união de duas abordagens poderosas:</p>

<ol>
    <li><strong>Medicina do Estilo de Vida:</strong> O que você faz durante o dia dita como você dormirá à noite. Ajustes precisos na sua exposição à luz, nos horários de alimentação e no gerenciamento do estresse diário são fundamentais para regular o seu relógio biológico.</li>
    <li><strong>Cannabis Medicinal:</strong> Como uma ferramenta de transição fantástica. Os fitocanabinoides (como o CBD e o CBN) atuam diretamente no seu Sistema Endocanabinoide, ajudando a acalmar o sistema nervoso central e reduzindo a ansiedade noturna. A grande vantagem? Eles facilitam um sono profundo e reparador sem o risco de vício dos remédios tarja preta. Além disso, a Cannabis Medicinal é uma aliada incrível para dar suporte ao paciente durante o desmame seguro daquelas medicações antigas.</li>
</ol>

<h3>É possível voltar a dormir bem (e naturalmente)</h3>

<p>Você não precisa passar o resto da vida dependendo de uma pílula para dormir, nem sofrer sozinho tentando parar por conta própria. Voltar a ter noites reparadoras é o pilar fundamental para você ter energia no trabalho, bom humor e qualidade de vida ao lado de quem você ama.</p>

<p>O desmame seguro e a construção de um sono de qualidade exigem um acompanhamento médico próximo, humano e personalizado.</p>

<p>Atendo presencialmente em <strong>Tatuí-SP</strong> e também via <strong>Telemedicina</strong> para todo o Brasil.</p>

<a href='https://wa.me/5515991236775' target='_blank' class='btn-whatsapp-artigo'><i class='fa-brands fa-whatsapp'></i> Clique aqui para agendar uma avaliação</a>

<p class='assinatura'><strong>Dr. Renato Ishizava</strong><br>CRM/SP 217868 | RQE 135.245</p>`
    },
    {
        slug: "rotina-melhor-remedio-pior-veneno-dor-insonia",
        titulo: "Por que a sua rotina pode ser o melhor remédio (ou o pior veneno) para a sua dor e insônia",
        resumo: "Você vai ao médico, recebe uma receita, passa na farmácia, compra o remédio e toma no horário certinho. Mas você já parou para pensar que a consulta médica dura cerca de uma hora, e você passa as outras 23 horas do dia convivendo com os seus próprios hábitos?",
        data: "2026-04-13",
        autor: "Dr. Renato Ishizava",
        conteudo: `
<p>Você vai ao médico, recebe uma receita, passa na farmácia, compra o remédio e toma no horário certinho. Mas você já parou para pensar que a consulta médica dura cerca de uma hora, e você passa as outras 23 horas do dia convivendo com os seus próprios hábitos?</p>

<p>Se você sofre com dores crônicas, fibromialgia ou insônia e sente que os remédios já não estão mais dando conta do recado, eu preciso te contar um segredo: o problema pode não estar na dosagem da sua pílula, mas sim na forma como você vive.</p>

<p>Como médico, eu via diariamente pacientes frustrados porque a medicina tradicional parecia focar apenas em &ldquo;apagar incêndios&rdquo; com remédios cada vez mais fortes. Foi isso que me levou a me especializar em uma área transformadora chamada <strong>Medicina do Estilo de Vida</strong>.</p>

<p>Não se assuste com o nome. Ela não é sobre dietas malucas ou treinos de atleta olímpico. É a ciência que utiliza os nossos hábitos diários como a ferramenta de tratamento mais poderosa que existe.</p>

<p>Vamos olhar para três pilares da sua rotina que podem estar alimentando a sua dor — e como podemos virar esse jogo:</p>

<h3>1. O prato que inflama ou desinflama</h3>

<p>O que você coloca no prato todos os dias funciona como um combustível para o seu corpo. O problema é que alimentos ultraprocessados, excesso de açúcar, farinhas brancas e gorduras ruins funcionam como &ldquo;gasolina&rdquo; para a dor crônica. Eles mantêm o seu corpo em um estado de inflamação constante.</p>

<p><strong>A micro-intervenção:</strong> Você não precisa cortar tudo o que gosta da noite para o dia. O primeiro passo é focar em uma alimentação anti-inflamatória simples, baseada em &ldquo;comida de verdade&rdquo; (aquilo que vem da terra e da natureza). Descascar mais e desembalar menos já é um sinal verde para o seu corpo começar a desinflamar e a dor diminuir.</p>

<h3>2. O movimento como analgésico natural</h3>

<p>Quando sentimos dor, o nosso instinto natural é ficar parado. &ldquo;Vou fazer repouso para melhorar&rdquo;. Esse é um dos maiores mitos da dor crônica!</p>

<p>A falta de movimento enfraquece a sua musculatura. Com músculos fracos, as suas articulações ficam sobrecarregadas, o que gera... mais dor. É um ciclo vicioso. O corpo humano foi projetado para se mover.</p>

<p><strong>A micro-intervenção:</strong> Não estou falando de ir para a academia levantar pesos pesados se você está com dor. Estou falando de &ldquo;movimento possível&rdquo;. Uma caminhada leve, alongamentos matinais, atividades na água. O movimento adequado libera substâncias no cérebro que agem como verdadeiros analgésicos naturais.</p>

<h3>3. O sono e o peso do estresse</h3>

<p>Você deita na cama, mas a cabeça não desliga. Pensa nos problemas do trabalho, nas contas, na família. Esse estresse crônico mantém o seu corpo em constante estado de &ldquo;alerta&rdquo;. Sabe o que acontece quando o corpo não relaxa? Você não atinge o sono profundo. E sem sono profundo, o corpo não repara os tecidos machucados, fazendo com que você acorde no dia seguinte com a sensibilidade à dor lá nas alturas.</p>

<p><strong>A micro-intervenção:</strong> Precisamos criar uma &ldquo;higiene do sono&rdquo;. Desconectar das telas (celular, TV) pelo menos uma hora antes de dormir, diminuir as luzes da casa e criar um ritual de relaxamento. O seu quarto deve ser um santuário para o descanso, não uma extensão do escritório.</p>

<h3>Você não precisa fazer isso sozinho</h3>

<p>Mudar hábitos quando se está com dor e exausto parece uma montanha impossível de escalar. Eu sei disso. E é exatamente por isso que você não deve tentar fazer isso sozinho.</p>

<p>A união da Medicina do Estilo de Vida com terapias modernas e seguras, como a Cannabis Medicinal, cria o ambiente perfeito para o seu corpo se recuperar. Enquanto a Cannabis ajuda a modular o sistema nervoso, tirando você da crise de dor e ansiedade, a Medicina do Estilo de Vida constrói a base forte para que você não dependa de remédios para sempre.</p>

<p>Mudar o estilo de vida não significa virar a sua rotina de cabeça para baixo da noite para o dia. Significa ter um parceiro médico que vai te guiar, passo a passo, rumo a uma vida com mais energia e menos dor.</p>

<p>Atendo presencialmente em <strong>Tatuí-SP</strong> e via <strong>Telemedicina</strong> para todo o Brasil.</p>

<a href='https://wa.me/5515991236775' target='_blank' class='btn-whatsapp-artigo'><i class='fa-brands fa-whatsapp'></i> Clique aqui para agendarmos uma avaliação</a>

<p class='assinatura'><strong>Dr. Renato Ishizava</strong><br>CRM/SP 217868 | RQE 135.245</p>`
    }
];

/* ============================================================
   CARREGAR LISTA DE ARTIGOS (index.html)
============================================================ */
function carregarArtigos() {
    const container = document.getElementById("lista-artigos");
    if (!container) return;

    container.innerHTML = ARTIGOS.map(a => `
        <div class="artigo-card animar">
            <h3>${a.titulo}</h3>
            <p>${a.resumo}</p>
            <a href="artigo.html?slug=${a.slug}" class="leia-mais">
                Ler completo <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    `).join('');

    setTimeout(() => {
        document.querySelectorAll('#lista-artigos .animar').forEach(card => {
            card.classList.add('mostrar');
        });
    }, 100);
}

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

    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = '0.6';

    const formData = new FormData(this);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzT4PNmDwXEKazekvW46SV37mIzjnsLxfq5Von9QrYVlrXCgT6UQsybXQ6edvvfw0bkIw/exec';

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
      btnEnviar.textContent = textoOriginal;
      btnEnviar.disabled = false;
      btnEnviar.style.opacity = '1';
    });
  });
}