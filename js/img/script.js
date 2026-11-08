
/* ========================================
   CONFIGURAÇÕES DO LOGIN
======================================== */

const USUARIO_CORRETO = "Heitor";
const SENHA_CORRETA = "0712";


/* ========================================
   DICAS PERSONALIZADAS
======================================== */

const dicaUsuarioTexto =
    "Nome do nosso foguinho no ttk que vc matou";

const dicaSenhaTexto =
    "Nosso primeiro date";


/* ========================================
   ELEMENTOS
======================================== */

const universo = document.querySelector(".universo");
const formulario = document.getElementById("form-login");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const mensagemLogin = document.getElementById("mensagem-login");
const botaoEntrar = document.querySelector(".botao-entrar");

let loginAprovado = false;


/* ========================================
   CAMPO DE ESTRELAS
======================================== */

const canvas = document.getElementById("campo-estrelas");
const ctx = canvas.getContext("2d");

let estrelas = [];


/* ========================================
   REDIMENSIONAMENTO
======================================== */

function redimensionar() {

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    criarEstrelas();
}


/* ========================================
   CRIAR ESTRELAS
======================================== */

function criarEstrelas() {

    estrelas = [];

    const quantidade = Math.floor(
        (window.innerWidth * window.innerHeight) / 3500
    );

    for (let i = 0; i < quantidade; i++) {

        estrelas.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            tamanho: Math.random() * 1.5 + 0.3,
            velocidade: Math.random() * 0.015 + 0.003,
            fase: Math.random() * Math.PI * 2
        });
    }
}


/* ========================================
   ANIMAR ESTRELAS
======================================== */

function animarEstrelas() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    estrelas.forEach(estrela => {

        estrela.fase += estrela.velocidade;

        const brilho =
            0.3 + Math.abs(Math.sin(estrela.fase)) * 0.7;

        ctx.beginPath();

        ctx.arc(
            estrela.x,
            estrela.y,
            estrela.tamanho,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 225, 255, ${brilho})`;
        ctx.fill();

        if (estrela.tamanho > 1.5) {

            ctx.shadowBlur = 5;
            ctx.shadowColor = "#d9a6ff";

            ctx.fill();

            ctx.shadowBlur = 0;
        }
    });

    requestAnimationFrame(animarEstrelas);
}


/* ========================================
   ELEMENTOS DAS DICAS
======================================== */

const botaoDicaUsuario =
    document.getElementById("botao-dica-usuario");

const botaoDicaSenha =
    document.getElementById("botao-dica-senha");

const dicaUsuario =
    document.getElementById("dica-usuario");

const dicaSenha =
    document.getElementById("dica-senha");


/* ========================================
   DICA DO USUÁRIO
======================================== */

botaoDicaUsuario.addEventListener("click", () => {

    dicaUsuario.textContent = dicaUsuarioTexto;

    dicaUsuario.classList.toggle("ativa");

    botaoDicaUsuario.textContent =
        dicaUsuario.classList.contains("ativa")
            ? "✧ Esconder dica"
            : "✧ Precisa de uma dica?";
});


/* ========================================
   DICA DA SENHA
======================================== */

botaoDicaSenha.addEventListener("click", () => {

    dicaSenha.textContent = dicaSenhaTexto;

    dicaSenha.classList.toggle("ativa");

    botaoDicaSenha.textContent =
        dicaSenha.classList.contains("ativa")
            ? "✧ Esconder dica"
            : "✧ Esqueceu a senha? Peça uma dica";
});


/* ========================================
   TRANSIÇÃO PARA A SEGUNDA TELA
======================================== */

function iniciarTransicao() {

    if (loginAprovado) {
        return;
    }

    loginAprovado = true;

    botaoEntrar.disabled = true;

    universo.classList.add("transicao-iniciada");
}


/* ========================================
   FORMULÁRIO DE LOGIN
======================================== */

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    if (loginAprovado) {
        return;
    }

    const usuario = campoUsuario.value
        .trim()
        .toLowerCase();

    const senha = campoSenha.value;

    mensagemLogin.textContent = "";

    if (
        usuario === USUARIO_CORRETO.toLowerCase() &&
        senha === SENHA_CORRETA
    ) {

        mensagemLogin.textContent =
            "Você encontrou o caminho para o nosso universo! ❤️✨";

        mensagemLogin.style.color = "#b8f5c5";

        setTimeout(() => {
            iniciarTransicao();
        }, 900);

    } else {

        mensagemLogin.textContent =
            "Hmm... acho que essa não é a combinação certa. Tente novamente! ❤️";

        mensagemLogin.style.color = "#ffb6c1";
    }
});


/* ========================================
   GALERIA — PLANETA FOTOS
======================================== */

/*
   As 25 imagens devem estar na pasta "fotos",
   com os nomes foto-01.jpg até foto-25.jpg.
*/


const memorias = [
    { arquivo: "foto-01.jpeg", legenda: "Nosso primeiro lual 🌛" },
    { arquivo: "foto-02.jpeg", legenda: "Com você tudo fica mais bonito" },
    { arquivo: "foto-03.jpeg", legenda: "Eu viveria esse momento mais mil vezes" },
    { arquivo: "foto-04.jpeg", legenda: "A coisinha mais preciosa da minha vida ❤️" },
    { arquivo: "foto-05.jpeg", legenda: "Meu lugar favorito é ao seu lado." },
    { arquivo: "foto-06.jpeg", legenda: "Só nós dois. E isso já é tudo" },
    { arquivo: "foto-07.jpeg", legenda: "Militantes 😝" },
    { arquivo: "foto-08.jpeg", legenda: "Minha companhia preferida é vc bb" },
    { arquivo: "foto-09.jpeg", legenda: "Passa no enem pfvvv." },
    { arquivo: "foto-10.jpeg", legenda: "👅👅👅" },
    { arquivo: "foto-11.jpeg", legenda: "Que venham muitos outros treinos juntos" },
    { arquivo: "foto-12.jpeg", legenda: "Você deixa tudo mais especial" },
    { arquivo: "foto-13.jpeg", legenda: "secrets 🤫🔞" },
    { arquivo: "foto-14.jpeg", legenda: "Minha princesa linda, te amo bb" },
    { arquivo: "foto-15.jpeg", legenda: "Dinossauros beijam?" },
    { arquivo: "foto-16.jpeg", legenda: "Que sorte a minha viver isso com você" },
    { arquivo: "foto-17.jpeg", legenda: "Praiouuuu" },
    { arquivo: "foto-18.jpeg", legenda: "secrets.pt2 🤫🔞" },
    { arquivo: "foto-19.jpeg", legenda: "Sou completamente apaixonado por essa gatinha" },
    { arquivo: "foto-20.jpeg", legenda: "🤟" },
    { arquivo: "foto-21.jpeg", legenda: "Que a gente nunca perca essa alegria" },
    { arquivo: "foto-22.jpeg", legenda: "Muito performaticos" },
    { arquivo: "foto-23.jpeg", legenda: "Fofaaa" },
    { arquivo: "foto-24.jpeg", legenda: "Date de 1 ano de namoro" },
    { arquivo: "foto-25.jpeg", legenda: "Minha surfista linda" }
];



/* ========================================
   CRIAR ESTRUTURA DA GALERIA
======================================== */

const galeria = document.createElement("section");

galeria.className = "galeria-fotos";
galeria.setAttribute("aria-label", "Nossa galeria de fotos");
galeria.setAttribute("aria-hidden", "true");

galeria.innerHTML = `
    <header class="galeria-header">

        <span class="galeria-detalhe">
            ✧ UM PLANETA DE LEMBRANÇAS ✧
        </span>

        <h1>Nossas fotinhas</h1>

        <p>
            Cada foto guarda um pedacinho de nós.
        </p>

        <div class="galeria-divisor">✦</div>

    </header>

    <button
        type="button"
        class="botao-voltar-galeria"
        aria-label="Voltar aos planetas"
    >
        ← Voltar ao universo
    </button>

    <div class="mural-fotos"></div>

    <footer class="galeria-footer">
        Existem tantas outras lembranças esperando para serem vividas. ♡
    </footer>

    <div class="visualizador-foto" aria-hidden="true">

        <button
            type="button"
            class="fechar-foto"
            aria-label="Fechar foto"
        >×</button>

        <button
            type="button"
            class="foto-anterior"
            aria-label="Foto anterior"
        >‹</button>

        <div class="foto-ampliada-container">

            <img class="foto-ampliada" src="" alt="Foto ampliada">

            <p class="legenda-ampliada"></p>

        </div>

        <button
            type="button"
            class="proxima-foto"
            aria-label="Próxima foto"
        >›</button>

    </div>
`;

document.querySelector("#cena-planetas").appendChild(galeria);


/* ========================================
   ELEMENTOS DA GALERIA
======================================== */

const muralFotos = galeria.querySelector(".mural-fotos");

const botaoVoltarGaleria =
    galeria.querySelector(".botao-voltar-galeria");

const visualizador =
    galeria.querySelector(".visualizador-foto");

const fotoAmpliada =
    galeria.querySelector(".foto-ampliada");

const legendaAmpliada =
    galeria.querySelector(".legenda-ampliada");

let indiceFotoAtual = 0;


/* ========================================
   CRIAR POLAROIDS
======================================== */

memorias.forEach((memoria, indice) => {

    const polaroid = document.createElement("button");

    polaroid.type = "button";
    polaroid.className = "polaroid";

    polaroid.style.setProperty(
        "--rotacao",
        `${(Math.random() * 12 - 6).toFixed(1)}deg`
    );

    polaroid.style.setProperty(
        "--atraso",
        `${indice * 0.07}s`
    );

    polaroid.setAttribute(
        "aria-label",
        `Abrir foto ${indice + 1}: ${memoria.legenda}`
    );

    polaroid.innerHTML = `
        <span class="polaroid-imagem">
            <img
                src="fotos/${memoria.arquivo}"
                alt="Lembrança ${indice + 1}"
                loading="lazy"
            >

            <span class="foto-indisponivel">
                ✧<br>
                Adicione sua foto aqui
            </span>
        </span>

        <span class="polaroid-legenda">
            ${memoria.legenda}
        </span>
    `;

    const imagem = polaroid.querySelector("img");
    const placeholder = polaroid.querySelector(".foto-indisponivel");

    imagem.addEventListener("error", () => {
        imagem.style.display = "none";
        placeholder.style.display = "flex";
    });

    imagem.addEventListener("load", () => {
        placeholder.style.display = "none";
    });

    polaroid.addEventListener("click", () => {
        abrirFoto(indice);
    });

    muralFotos.appendChild(polaroid);
});


/* ========================================
   ABRIR GALERIA
======================================== */

const planetaFotos = document.querySelector(".planeta-card-1");

planetaFotos.setAttribute("role", "button");
planetaFotos.setAttribute("tabindex", "0");
planetaFotos.setAttribute("aria-label", "Explorar Planeta Fotos");

function abrirGaleria() {

    galeria.classList.add("galeria-aberta");

    galeria.setAttribute("aria-hidden", "false");

    document.querySelector(".exploracao-conteudo")
        .classList.add("conteudo-escondido");

    botaoVoltarGaleria.focus();
}

planetaFotos.addEventListener("click", abrirGaleria);

planetaFotos.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();
        abrirGaleria();
    }
});


/* ========================================
   VOLTAR AOS PLANETAS
======================================== */

function fecharGaleria() {

    fecharFoto();

    galeria.classList.remove("galeria-aberta");

    galeria.setAttribute("aria-hidden", "true");

    document.querySelector(".exploracao-conteudo")
        .classList.remove("conteudo-escondido");

    planetaFotos.focus();
}

botaoVoltarGaleria.addEventListener("click", fecharGaleria);


/* ========================================
   ABRIR FOTO AMPLIADA
======================================== */

function abrirFoto(indice) {

    indiceFotoAtual = indice;

    const memoria = memorias[indice];

    fotoAmpliada.src = `fotos/${memoria.arquivo}`;

    fotoAmpliada.alt = memoria.legenda;

    legendaAmpliada.textContent = memoria.legenda;

    visualizador.classList.add("visualizador-aberto");

    visualizador.setAttribute("aria-hidden", "false");
}


/* ========================================
   FECHAR FOTO AMPLIADA
======================================== */

function fecharFoto() {

    visualizador.classList.remove("visualizador-aberto");

    visualizador.setAttribute("aria-hidden", "true");
}


/* ========================================
   NAVEGAR ENTRE AS FOTOS
======================================== */

function mudarFoto(direcao) {

    indiceFotoAtual += direcao;

    if (indiceFotoAtual < 0) {
        indiceFotoAtual = memorias.length - 1;
    }

    if (indiceFotoAtual >= memorias.length) {
        indiceFotoAtual = 0;
    }

    abrirFoto(indiceFotoAtual);
}

galeria.querySelector(".fechar-foto")
    .addEventListener("click", fecharFoto);

galeria.querySelector(".foto-anterior")
    .addEventListener("click", () => mudarFoto(-1));

galeria.querySelector(".proxima-foto")
    .addEventListener("click", () => mudarFoto(1));

visualizador.addEventListener("click", (event) => {

    if (event.target === visualizador) {
        fecharFoto();
    }
});


/* ========================================
   TECLADO
======================================== */

document.addEventListener("keydown", (event) => {

    if (!visualizador.classList.contains("visualizador-aberto")) {
        return;
    }

    if (event.key === "Escape") {
        fecharFoto();
    }

    if (event.key === "ArrowRight") {
        mudarFoto(1);
    }

    if (event.key === "ArrowLeft") {
        mudarFoto(-1);
    }
});


/* ========================================
   INICIALIZAÇÃO
======================================== */

window.addEventListener("resize", redimensionar);

redimensionar();

animarEstrelas();
/* =====================================================
   PLANETA VÍDEOS — FUNCIONALIDADES
   ===================================================== */

(() => {
    const planetaVideos = document.querySelector(".planeta-card-2");
    const cenaPlanetas = document.querySelector("#cena-planetas");
    const exploracaoConteudo = document.querySelector(".exploracao-conteudo");

    if (!planetaVideos || !cenaPlanetas || !exploracaoConteudo) {
        console.warn("Não foi possível encontrar os elementos do Planeta Vídeos.");
        return;
    }

    // ================================================
    // DADOS DOS VÍDEOS
    // Edite títulos e legendas como quiser.
    // ================================================

    const videos = [
        {
            arquivo: "video-01.mp4",
            titulo: "Dancinha do ttk",
            legenda: "Eu >>> Vc"
        },
        {
            arquivo: "video-02.mp4",
            titulo: "Spider-Man: me apaixonei por uma bb do santa rosa",
            legenda: "Minha MJ"
        },
        {
            arquivo: "video-03.mp4",
            titulo: "Fiquei com fome",
            legenda: "Gulosa KKKKKKKKKK"
        },
        {
            arquivo: "video-04.mp4",
            titulo: "Uma memória especial",
            legenda: "Mais um instante que mora com carinho no meu coração"
        },
        {
            arquivo: "video-05.mp4",
            titulo: "Menina mais mimizenta de caruaru. Entenda o caso:",
            legenda: "Aqui percebemos que voce precisa de tratamento"
        },
        {
            arquivo: "video-06.mp4",
            titulo: "Perna curta",
            legenda: "Que a vida continue trazendo momentos assim para nós"
        },
        {
            arquivo: "video-07.mp4",
            titulo: "Uma dose de saudade",
            legenda: "Já quero viver tudo isso de novo com você"
        },
        {
            arquivo: "video-08.mp4",
            titulo: "Meu lugar no mundo",
            legenda: "No fim, é sempre sobre estar ao seu lado"
        },
        {
            arquivo: "video-09.mp4",
            titulo: "Te amooo mo",
            legenda: "Com você, até os dias comuns viram lembranças especiais."
        },
        {
            arquivo: "video-10.mp4",
            titulo: "Dois bobinhos",
            legenda: "E eu não trocaria essa bobagem por nada."
        },
        {
            arquivo: "video-11.mp4",
            titulo: "Sem comentarios",
            legenda: "KKKKKKKKKKKKKKK"
        },
        {
            arquivo: "video-12.mp4",
            titulo: "Minha companhia",
            legenda: "Algumas lembranças ficam ainda mais bonitas com o tempo"
        },
        {
            arquivo: "video-13.mp4",
            titulo: "Como cuidar de uma gatinha",
            legenda: "Linda mo"
        },
        {
            arquivo: "video-14.mp4",
            titulo: "Aventuras em gravata",
            legenda: "A melhor parte de qualquer rolê é ter você comigo."
        }
    ];

    let indiceAtual = 0;

    // ================================================
    // CRIAÇÃO DA GALERIA
    // ================================================

    const galeria = document.createElement("section");
    galeria.className = "galeria-videos";

    galeria.innerHTML = `
        <header class="videos-header">
            <div class="videos-detalhe">NOSSO CINEMA PARTICULAR</div>

            <h2>Memórias em movimento</h2>

            <p>
                Alguns momentos são tão especiais que merecem
                ser revividos quantas vezes quisermos.
            </p>

            <div class="videos-linha"></div>
        </header>

        <button class="botao-voltar-videos" type="button">
            ← Voltar ao universo
        </button>

        <div class="mural-videos"></div>
    `;

    cenaPlanetas.appendChild(galeria);

    const mural = galeria.querySelector(".mural-videos");
    const botaoVoltar = galeria.querySelector(".botao-voltar-videos");

    // ================================================
    // CRIAÇÃO DOS CARTÕES
    // ================================================

    videos.forEach((video, indice) => {
        const cartao = document.createElement("article");

        const orientacao = indice % 3 === 1 ? "horizontal" : "vertical";

        cartao.className = `cartao-video ${orientacao}`;
        cartao.setAttribute("role", "button");
        cartao.setAttribute("tabindex", "0");
        cartao.setAttribute("aria-label", `Reproduzir ${video.titulo}`);

        cartao.innerHTML = `
            <video
                class="video-capa"
                muted
                playsinline
                preload="metadata"
                aria-hidden="true"
            ></video>

            <span class="video-numero">
                MEMÓRIA ${String(indice + 1).padStart(2, "0")}
            </span>

            <div class="video-play">▶</div>

            <div class="video-informacoes">
                <h3>${video.titulo}</h3>
                <p>${video.legenda}</p>
            </div>
        `;

        const capa = cartao.querySelector(".video-capa");

        capa.addEventListener("loadedmetadata", () => {
            if (capa.duration > 0.2) {
                capa.currentTime = 0.2;
            }
        });

        capa.src = `videos/${video.arquivo}`;

        cartao.addEventListener("click", () => {
            abrirPlayer(indice);
        });

        cartao.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                abrirPlayer(indice);
            }
        });

        mural.appendChild(cartao);
    });

    // ================================================
    // CRIAÇÃO DO PLAYER
    // ================================================

    const visualizador = document.createElement("div");
    visualizador.className = "visualizador-video";

    visualizador.innerHTML = `
        <div class="player-video-conteudo">

            <button
                class="fechar-video"
                type="button"
                aria-label="Fechar vídeo"
            >
                ×
            </button>

            <video
                class="player-video"
                controls
                playsinline
                preload="metadata"
            >
                Seu navegador não suporta vídeos.
            </video>

            <h3 class="player-video-titulo"></h3>

            <p class="player-video-legenda"></p>

            <div class="navegacao-videos">
                <button class="video-anterior" type="button">
                    ← Anterior
                </button>

                <span class="video-contador"></span>

                <button class="video-proximo" type="button">
                    Próximo →
                </button>
            </div>

            <p class="video-erro" hidden></p>

        </div>
    `;

    document.body.appendChild(visualizador);

    const player = visualizador.querySelector(".player-video");
    const tituloPlayer = visualizador.querySelector(".player-video-titulo");
    const legendaPlayer = visualizador.querySelector(".player-video-legenda");
    const contador = visualizador.querySelector(".video-contador");
    const mensagemErro = visualizador.querySelector(".video-erro");

    const botaoFechar = visualizador.querySelector(".fechar-video");
    const botaoAnterior = visualizador.querySelector(".video-anterior");
    const botaoProximo = visualizador.querySelector(".video-proximo");

    // ================================================
    // ABRIR E FECHAR A GALERIA
    // ================================================

    function abrirGaleria() {
        galeria.classList.add("galeria-videos-aberta");
        exploracaoConteudo.classList.add("conteudo-escondido");
    }

    function fecharGaleria() {
        fecharPlayer();

        galeria.classList.remove("galeria-videos-aberta");
        exploracaoConteudo.classList.remove("conteudo-escondido");

        planetaVideos.focus();
    }

    planetaVideos.addEventListener("click", abrirGaleria);

    planetaVideos.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirGaleria();
        }
    });

    botaoVoltar.addEventListener("click", fecharGaleria);

    // ================================================
    // ABRIR PLAYER
    // ================================================

    function abrirPlayer(indice) {
        indiceAtual = indice;

        const video = videos[indiceAtual];

        player.pause();
        player.removeAttribute("src");
        player.load();

        mensagemErro.hidden = true;
        mensagemErro.textContent = "";

        tituloPlayer.textContent = video.titulo;
        legendaPlayer.textContent = video.legenda;

        contador.textContent =
            `${String(indiceAtual + 1).padStart(2, "0")} / ${videos.length}`;

        player.src = `videos/${video.arquivo}`;
        player.load();

        visualizador.classList.add("visualizador-aberto");

        // A reprodução só é iniciada após o clique do usuário.
        const tentativaReproducao = player.play();

        if (tentativaReproducao !== undefined) {
            tentativaReproducao.catch(() => {
                mensagemErro.textContent =
                    "Não foi possível reproduzir automaticamente. Aperte o botão de play.";
                mensagemErro.hidden = false;
            });
        }
    }

    // ================================================
    // FECHAR PLAYER
    // ================================================

    function fecharPlayer() {
        player.pause();
        player.removeAttribute("src");
        player.load();

        visualizador.classList.remove("visualizador-aberto");
        mensagemErro.hidden = true;
    }

    botaoFechar.addEventListener("click", fecharPlayer);

    // Fecha ao clicar fora do player.
    visualizador.addEventListener("click", (evento) => {
        if (evento.target === visualizador) {
            fecharPlayer();
        }
    });

    // ================================================
    // NAVEGAÇÃO ENTRE VÍDEOS
    // ================================================

    function videoAnterior() {
        const novoIndice =
            (indiceAtual - 1 + videos.length) % videos.length;

        abrirPlayer(novoIndice);
    }

    function proximoVideo() {
        const novoIndice =
            (indiceAtual + 1) % videos.length;

        abrirPlayer(novoIndice);
    }

    botaoAnterior.addEventListener("click", videoAnterior);
    botaoProximo.addEventListener("click", proximoVideo);

    // ================================================
    // ATALHOS DO TECLADO
    // ================================================

    document.addEventListener("keydown", (evento) => {
        const playerAberto =
            visualizador.classList.contains("visualizador-aberto");

        if (!playerAberto) return;

        if (evento.key === "Escape") {
            fecharPlayer();
        }

        if (evento.key === "ArrowLeft") {
            videoAnterior();
        }

        if (evento.key === "ArrowRight") {
            proximoVideo();
        }
    });

})();

/* =====================================================
   PLANETA SONHOS — LÓGICA INDEPENDENTE
   15 estrelas, cartões individuais e mensagem final.
===================================================== */

(() => {
    const planetaSonhos = document.querySelector(".planeta-card-3");
    const cenaPlanetas = document.querySelector("#cena-planetas");
    const conteudoPlanetas = document.querySelector(".exploracao-conteudo");

    if (!planetaSonhos || !cenaPlanetas || !conteudoPlanetas) {
        console.warn("Planeta Sonhos: elementos necessários não encontrados.");
        return;
    }

    const sonhos = [
        {
            titulo: "Construir uma família com você",
            icone: "♡",
            mensagem: "Sonho em construir uma família ao seu lado, cheia de amor, carinho, risadas e histórias. Quero que a gente construa um lar onde nunca faltem motivos para sorrir.",
            assinatura: "Nosso maior projeto. ♡"
        },
        {
            titulo: "Conhecer a Europa juntos",
            icone: "✈",
            mensagem: "Quero conhecer lugares novos com você, andar por ruas desconhecidas, experimentar comidas diferentes e tirar milhares de fotos. E, em cada lugar, pensar como sou sortudo por estar vivendo aquilo ao seu lado.",
            assinatura: "O mundo ainda é pequeno para tantos planos nossos."
        },
        {
            titulo: "Nossa primeira casa",
            icone: "⌂",
            mensagem: "Sonho com o dia em que vamos escolher nosso cantinho, decorar cada espaço juntos e transformar uma casa no nosso lar. Quero que cada detalhe tenha um pouquinho de nós dois.",
            assinatura: "Um lugar para chamar de nosso."
        },
        {
            titulo: "Envelhecer juntos",
            icone: "∞",
            mensagem: "Quero viver tantas fases ao seu lado que, quando estivermos velhinhos, a gente tenha histórias suficientes para passar horas lembrando de tudo que já vivemos. E ainda inventando novos planos.",
            assinatura: "Que seja você em todas as minhas versões."
        },
        {
            titulo: "Ver você sendo a melhor cientista social do mundo",
            icone: "✧",
            mensagem: "Quero acompanhar cada conquista sua, ver você realizando seus sonhos e ocupando todos os espaços que merece. Estarei sempre na primeira fila, torcendo por você e sentindo orgulho da mulher incrível que você é.",
            assinatura: "Eu acredito em você, sempre."
        },
        {
            titulo: "Nossos dates na varanda",
            icone: "☾",
            mensagem: "Vinho, MPB tocando baixinho, luz amarela e você do meu lado. Quero muitas noites assim, sem pressa, conversando sobre qualquer coisa e aproveitando a nossa companhia.",
            assinatura: "Meu tipo favorito de noite."
        },
        {
            titulo: "Casar com você",
            icone: "♡",
            mensagem: "Sonho com o dia em que vou poder olhar para você e dizer que quero continuar escolhendo você todos os dias da minha vida. Quero celebrar nosso amor e prometer continuar cuidando dele.",
            assinatura: "Um sim para todos os nossos amanhãs."
        },
        {
            titulo: "Muitas viagens de carro",
            icone: "🚗",
            mensagem: "Só eu, você, nossa playlist e uma estrada pela frente. Quero cantar com você, errar o caminho, parar em lugares aleatórios e transformar cada viagem em uma memória especial.",
            assinatura: "Nossa playlist nunca vai ter fim."
        },
        {
            titulo: "Nosso videogame",
            icone: "♡",
            mensagem: "Quero passar muitas noites jogando com você, comemorando nossas vitórias, rindo das derrotas e provavelmente discutindo sobre quem joga melhor. Que nunca faltem nossos momentos de diversão.",
            assinatura: "Minha dupla favorita."
        },
        {
            titulo: "Comprar roupinhas para nosso bebê",
            icone: "♡",
            mensagem: "Imagino a gente escolhendo roupinhas minúsculas, imaginando como será nosso bebê e ficando encantados com cada detalhe. Um sonho que quero construir com muito amor e cuidado.",
            assinatura: "Um pedacinho de nós dois."
        },
        {
            titulo: "Ter nosso próprio pet",
            icone: "🐾",
            mensagem: "Quero escolher nosso bichinho, preparar tudo para a chegada dele e ver nossa casa ficar ainda mais cheia de vida. Já imagino nós dois mimando muito esse pequeno integrante da família.",
            assinatura: "Mais um coração para amar."
        },
        {
            titulo: "Comemorar uma grande conquista sua",
            icone: "✦",
            mensagem: "Quero te levar para uma viagem especial para comemorar uma conquista enorme sua. Ver seu sorriso, brindar tudo que você conseguiu e fazer você perceber o quanto merece cada coisa boa que acontece na sua vida.",
            assinatura: "Suas vitórias também são minhas alegrias."
        },
        {
            titulo: "Nossa coleção de discos de vinil",
            icone: "♫",
            mensagem: "Quero montar uma coleção de discos com você, escolher nossos favoritos, descobrir músicas novas e passar tardes ouvindo nossos álbuns enquanto aproveitamos a companhia um do outro.",
            assinatura: "A trilha sonora da nossa vida."
        },
        {
            titulo: "Fazer compras de supermercado juntos",
            icone: "♡",
            mensagem: "Pode parecer simples, mas sonho até com essas pequenas coisas. Escolher o que vamos comer durante a semana, decidir o que levar, voltar para casa e preparar alguma coisa juntos.",
            assinatura: "Até a rotina fica especial com você."
        },
        {
            titulo: "Conhecer praias paradisíacas pelo mundo",
            icone: "☼",
            mensagem: "Quero conhecer praias de águas cristalinas com você, sentir a areia nos pés, assistir ao pôr do sol e guardar cada paisagem na memória. E, claro, tirar muitas fotos nossas pelo caminho.",
            assinatura: "Que a gente nunca pare de explorar o mundo."
        }
    ];

    const galeriaSonhos = document.createElement("section");
    galeriaSonhos.className = "galeria-sonhos";
    galeriaSonhos.setAttribute("aria-label", "Nosso mapa de sonhos");
    galeriaSonhos.setAttribute("aria-hidden", "true");

    galeriaSonhos.innerHTML = `
        <button type="button" class="botao-voltar-sonhos">
            ← Voltar ao universo
        </button>

        <header class="sonhos-header">
            <span class="sonhos-detalhe">
                ✧ UM UNIVERSO INTEIRO PARA NÓS ✧
            </span>

            <h1>Nosso futuro está escrito nas estrelas</h1>

            <p>
                Existem milhares de estrelas no universo,
                mas eu só consigo imaginar meu futuro em uma direção:
                ao seu lado.
            </p>

            <div class="sonhos-frase">
                Cada estrela guarda um pedacinho de tudo
                que ainda quero viver com você.
            </div>
        </header>

        <div class="sonhos-progresso">
            <span class="sonhos-contador">0 de 15 sonhos descobertos</span>

            <div class="sonhos-barra">
                <div class="sonhos-barra-preenchimento"></div>
            </div>
        </div>

        <p class="sonhos-instrucao">
            ✧ Toque nas estrelas para descobrir nossos sonhos ✧
        </p>

        <div class="sonhos-mapa" aria-label="Mapa com quinze estrelas"></div>

        <div class="sonhos-final">
            <button type="button" class="botao-final-sonhos" disabled>
                ✨ Descobrir meu maior sonho
            </button>
        </div>

        <div class="sonho-detalhe-overlay" aria-hidden="true">
            <article class="sonho-cartao" role="dialog" aria-modal="true">
                <span class="sonho-cartao-icone"></span>
                <span class="sonho-cartao-numero"></span>
                <h2></h2>
                <p></p>
                <span class="sonho-cartao-assinatura"></span>

                <button type="button" class="fechar-sonho">
                    Guardar esse sonho ♡
                </button>
            </article>
        </div>

        <div class="sonhos-mensagem-final sonho-detalhe-overlay" aria-hidden="true">
            <article class="sonho-cartao" role="dialog" aria-modal="true">
                <span class="sonho-cartao-icone">✦</span>
                <span class="sonho-cartao-numero">NOSSO MAIOR SONHO</span>

                <h2>Viver todos eles com você.</h2>

                <p>
                    E sabe qual é o meu maior sonho?

                    É viver cada um desses planos ao seu lado,
                    criar outros que ainda nem imaginamos e continuar
                    escolhendo você em todos os dias que vierem.

                    Porque, no fim, não importa quantos lugares
                    a gente conheça ou quantas coisas conquiste.

                    O que eu mais quero é que seja você
                    quem esteja comigo em cada uma delas.
                </p>

                <span class="sonho-cartao-assinatura">
                    Com amor, para todos os nossos amanhãs. ♡
                </span>

                <button type="button" class="fechar-sonho">
                    Voltar às nossas estrelas
                </button>
            </article>
        </div>
    `;

    cenaPlanetas.appendChild(galeriaSonhos);

    const mapa = galeriaSonhos.querySelector(".sonhos-mapa");
    const botaoVoltar = galeriaSonhos.querySelector(".botao-voltar-sonhos");
    const contador = galeriaSonhos.querySelector(".sonhos-contador");
    const barra = galeriaSonhos.querySelector(".sonhos-barra-preenchimento");
    const botaoFinal = galeriaSonhos.querySelector(".botao-final-sonhos");

    const detalhe = galeriaSonhos.querySelector(".sonho-detalhe-overlay");
    const mensagemFinal = galeriaSonhos.querySelector(".sonhos-mensagem-final");

    const iconeDetalhe = detalhe.querySelector(".sonho-cartao-icone");
    const numeroDetalhe = detalhe.querySelector(".sonho-cartao-numero");
    const tituloDetalhe = detalhe.querySelector("h2");
    const textoDetalhe = detalhe.querySelector("p");
    const assinaturaDetalhe = detalhe.querySelector(".sonho-cartao-assinatura");

    const sonhosVisitados = new Set();

    // Cria as 15 estrelas.

    sonhos.forEach((sonho, indice) => {
        const estrela = document.createElement("button");

        estrela.type = "button";
        estrela.className = "sonho-estrela";
        estrela.textContent = "✦";

        estrela.setAttribute(
            "aria-label",
            `Descobrir sonho ${indice + 1}: ${sonho.titulo}`
        );

        estrela.title = sonho.titulo;

        estrela.addEventListener("click", () => {
            abrirSonho(indice, estrela);
        });

        mapa.appendChild(estrela);
    });

    const estrelas = mapa.querySelectorAll(".sonho-estrela");

    function abrirGaleriaSonhos() {
        galeriaSonhos.classList.add("sonhos-aberta");
        galeriaSonhos.setAttribute("aria-hidden", "false");

        conteudoPlanetas.classList.add("conteudo-escondido");

        botaoVoltar.focus();
    }

    function fecharGaleriaSonhos() {
        fecharDetalhe();

        galeriaSonhos.classList.remove("sonhos-aberta");
        galeriaSonhos.setAttribute("aria-hidden", "true");

        conteudoPlanetas.classList.remove("conteudo-escondido");

        planetaSonhos.focus();
    }

    function abrirSonho(indice, estrela) {
        const sonho = sonhos[indice];

        sonhosVisitados.add(indice);
        estrela.classList.add("sonho-visitado");

        iconeDetalhe.textContent = sonho.icone;
        numeroDetalhe.textContent =
            `SONHO ${String(indice + 1).padStart(2, "0")} DE 15`;

        tituloDetalhe.textContent = sonho.titulo;
        textoDetalhe.textContent = sonho.mensagem;
        assinaturaDetalhe.textContent = sonho.assinatura;

        detalhe.classList.add("sonho-detalhe-aberto");
        detalhe.setAttribute("aria-hidden", "false");

        atualizarProgresso();

        detalhe.querySelector(".fechar-sonho").focus();
    }

    function fecharDetalhe() {
        detalhe.classList.remove("sonho-detalhe-aberto");
        detalhe.setAttribute("aria-hidden", "true");
    }

    function atualizarProgresso() {
        const quantidade = sonhosVisitados.size;
        const porcentagem = (quantidade / sonhos.length) * 100;

        contador.textContent =
            `${quantidade} de ${sonhos.length} sonhos descobertos`;

        barra.style.width = `${porcentagem}%`;

        if (quantidade === sonhos.length) {
            botaoFinal.disabled = false;
            botaoFinal.textContent = "✧ Você descobriu todos! Ver meu maior sonho ✧";
        }
    }

    function abrirMensagemFinal() {
        if (sonhosVisitados.size !== sonhos.length) return;

        mensagemFinal.classList.add("sonho-detalhe-aberto");
        mensagemFinal.setAttribute("aria-hidden", "false");

        mensagemFinal.querySelector(".fechar-sonho").focus();
    }

    function fecharMensagemFinal() {
        mensagemFinal.classList.remove("sonho-detalhe-aberto");
        mensagemFinal.setAttribute("aria-hidden", "true");

        botaoFinal.focus();
    }

    // Clique no planeta dourado.

    planetaSonhos.setAttribute("role", "button");
    planetaSonhos.setAttribute("tabindex", "0");
    planetaSonhos.setAttribute("aria-label", "Explorar Planeta Sonhos");

    planetaSonhos.addEventListener("click", abrirGaleriaSonhos);

    planetaSonhos.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirGaleriaSonhos();
        }
    });

    // Botões e cartões.

    botaoVoltar.addEventListener("click", fecharGaleriaSonhos);

    detalhe.querySelector(".fechar-sonho").addEventListener("click", fecharDetalhe);

    mensagemFinal.querySelector(".fechar-sonho").addEventListener(
        "click",
        fecharMensagemFinal
    );

    botaoFinal.addEventListener("click", abrirMensagemFinal);

    detalhe.addEventListener("click", (evento) => {
        if (evento.target === detalhe) fecharDetalhe();
    });

    mensagemFinal.addEventListener("click", (evento) => {
        if (evento.target === mensagemFinal) fecharMensagemFinal();
    });

    // Atalhos de teclado.

    document.addEventListener("keydown", (evento) => {
        if (mensagemFinal.classList.contains("sonho-detalhe-aberto")) {
            if (evento.key === "Escape") fecharMensagemFinal();
            return;
        }

        if (detalhe.classList.contains("sonho-detalhe-aberto")) {
            if (evento.key === "Escape") fecharDetalhe();
            return;
        }

        if (
            galeriaSonhos.classList.contains("sonhos-aberta") &&
            evento.key === "Escape"
        ) {
            fecharGaleriaSonhos();
        }
    });

})();
/* =====================================================
   PLANETA CUTE CUTE — LÓGICA INDEPENDENTE
===================================================== */

(() => {
    const planetaCute = document.querySelector(".planeta-card-4");
    const cenaPlanetas = document.querySelector("#cena-planetas");
    const conteudoPlanetas = document.querySelector(".exploracao-conteudo");

    if (!planetaCute || !cenaPlanetas || !conteudoPlanetas) {
        console.warn("Planeta Cute Cute: elementos não encontrados.");
        return;
    }

    // ================================================
    // DECLARAÇÃO PRINCIPAL
    // ================================================

    const cartinha = {
        titulo: "Escrito para a menina mais especial da minha vida ❤️",

        paragrafos: [
            "Em palavras, eu não consigo explicar o quanto você é especial para mim, mas posso fazer algumas comparações para tentar te fazer compreender: você é tão especial para mim quanto a Lua é para a noite; você é tão importante para mim quanto o coração é para o corpo; você é tão necessária quanto a esperança é para quem sonha; você é como a peça que faltava em um quebra-cabeça que eu nem sabia estar incompleto.",

            "O amor que eu sinto por você não tem medidas, é imensurável. Não existe comparação capaz de expressar o quão grande ele é, pois, mesmo que eu tentasse compará-lo com a imensidão do mar, do céu ou do universo, ainda assim não seria suficiente, porque até mesmo essas coisas possuem limites, enquanto o que eu sinto por você parece não ter fim.",

            "Obrigado por colorir essa minha vida preta e branca e sem graça, e por dar movimento à minha vida monótona. Amo e fico ansioso pelas sextas-feiras para poder voltar e te encontrar novamente. Com certeza, você é o motivo dos meus sorrisos e das minhas risadas mais sinceras.",

            "Eu te amo demais, meu amorzinho! ❤️"
        ]
    };

    // ================================================
    // 20 COISINHAS QUE AMO EM VOCÊ
    // ================================================

    const coisinhas = [
        "Amo sua risada.",
        "Amo tagarelar com você.",
        "Amo gastar meu dinheirinho com você.",
        "Amo fazer raiva a você KKKKKKK.",
        "Amo seu sorriso.",
        "Amo seus olhos lindos.",
        "Amo fazer massagem em você, rs.",
        "Amo estalar seus dedos.",
        "Amo seus beijinhos.",
        "Amo ficar de denguinho com você.",
        "Amo suas raras receitinhas.",
        "Amo seus presentinhos que você me dá.",
        "Amo quando você não atrasa (muito raro).",
        "Amo nossas bobagens.",
        "Amo nossos dates.",
        "Amo seu estilo loba meiga.",
        "Amo sua pipoca.",
        "Amo o quanto você é uma menina inteligente.",
        "Amo seu abraço.",
        "E, por último: amo te amar."
    ];

    // ================================================
    // CRIAR A GALERIA
    // ================================================

    const galeria = document.createElement("section");
    galeria.className = "galeria-cute";
    galeria.setAttribute("aria-label", "Planeta Cute Cute");
    galeria.setAttribute("aria-hidden", "true");

    galeria.innerHTML = `
        <div class="cute-conteudo">

            <button class="botao-voltar-cute" type="button">
                ← Voltar ao universo
            </button>

            <header class="cute-header">
                <span class="cute-detalhe">
                    ✧ UM CANTINHO FEITO COM AMOR ✧
                </span>

                <h1>Planeta Cute Cute ♡</h1>

                <p>
                    Um pequeno lugar para tentar mostrar
                    um pouquinho do tamanho do meu amor por você.
                </p>

                <div class="cute-divisor">♡ ✦ ♡</div>
            </header>

            <!-- CARTINHA -->

            <section class="cute-secao">
                <h2 class="cute-titulo-secao">
                    Uma cartinha para você
                </h2>

                <p class="cute-descricao">
                    Escrevi algumas palavras que espero que façam
                    você sentir um pouquinho do que sinto por você.
                </p>

                <button class="cute-envelope" type="button">
                    <span class="cute-envelope-icone">💌</span>
                    <strong>Uma cartinha especial</strong>
                    <span>Clique para abrir seu presente</span>
                </button>

                <article class="cute-cartinha">
                    <h3 class="cartinha-titulo"></h3>
                    <div class="cartinha-texto"></div>
                    <span class="cute-cartinha-assinatura">
                        Com todo o meu amor. ❤️
                    </span>
                </article>
            </section>

            <div class="cute-divisor">♡ ✦ ♡</div>

            <!-- 20 COISINHAS -->

            <section class="cute-secao">
                <h2 class="cute-titulo-secao">
                    20 coisinhas que amo em você
                </h2>

                <p class="cute-descricao">
                    Existem infinitos motivos, mas separei
                    alguns para você descobrir. ♡
                </p>

                <div class="cute-progresso">
                    <span class="cute-progresso-texto">
                        0 de 20 coisinhas descobertas
                    </span>

                    <div class="cute-progresso-fundo">
                        <div class="cute-progresso-barra"></div>
                    </div>
                </div>

                <div class="cute-coracoes"></div>
            </section>

            <div class="cute-divisor">♡ ✦ ♡</div>

            <!-- ESCOLHER NOVAMENTE -->

            <section class="cute-escolha">
                <span class="cute-escolha-icone">♡</span>

                <h2 class="cute-titulo-secao">
                    Se eu pudesse escolher de novo...
                </h2>

                <p class="cute-descricao">
                    Será que minha escolha seria diferente?
                </p>

                <button class="cute-botao botao-escolha" type="button">
                    Descobrir a resposta ♡
                </button>
            </section>

            <!-- PRESENTE FINAL -->

            <section class="cute-presente">
                <span class="cute-presente-icone">🎁</span>

                <h2 class="cute-titulo-secao">
                    Tem mais uma coisinha para você...
                </h2>

                <p class="cute-descricao">
                    Preparei um último presentinho.
                </p>

                <button class="cute-botao botao-presente" type="button">
                    Abrir meu presente ♡
                </button>
            </section>

            <footer class="cute-rodape">
                Feito com muito amor, para a menina que eu amo. ♡
            </footer>

        </div>
    `;

    cenaPlanetas.appendChild(galeria);

    // ================================================
    // ELEMENTOS
    // ================================================

    const botaoVoltar = galeria.querySelector(".botao-voltar-cute");

    const botaoEnvelope = galeria.querySelector(".cute-envelope");
    const cartinhaVisual = galeria.querySelector(".cute-cartinha");
    const tituloCartinha = galeria.querySelector(".cartinha-titulo");
    const textoCartinha = galeria.querySelector(".cartinha-texto");

    const muralCoracoes = galeria.querySelector(".cute-coracoes");
    const textoProgresso = galeria.querySelector(".cute-progresso-texto");
    const barraProgresso = galeria.querySelector(".cute-progresso-barra");

    const botaoEscolha = galeria.querySelector(".botao-escolha");
    const botaoPresente = galeria.querySelector(".botao-presente");

    // ================================================
    // PREENCHER CARTINHA
    // ================================================

    tituloCartinha.textContent = cartinha.titulo;

    cartinha.paragrafos.forEach((paragrafo) => {
        const p = document.createElement("p");
        p.textContent = paragrafo;
        textoCartinha.appendChild(p);
    });

    botaoEnvelope.addEventListener("click", () => {
        const aberta = cartinhaVisual.classList.toggle("cartinha-aberta");

        botaoEnvelope.querySelector("strong").textContent =
            aberta ? "Minha declaração para você ❤️" : "Uma cartinha especial";

        botaoEnvelope.querySelector("span:last-child").textContent =
            aberta ? "Clique novamente para fechar" : "Clique para abrir seu presente";

        if (aberta) {
            cartinhaVisual.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });

    // ================================================
    // MODAL DAS COISINHAS
    // ================================================

    const modal = document.createElement("div");
    modal.className = "cute-overlay";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <article class="cute-modal">
            <span class="cute-modal-icone">♡</span>
            <span class="cute-modal-numero"></span>
            <h3 class="cute-modal-titulo"></h3>
            <p class="cute-modal-texto"></p>

            <button class="cute-fechar-modal" type="button">
                Guardar esse carinho ♡
            </button>
        </article>
    `;

    document.body.appendChild(modal);

    const numeroModal = modal.querySelector(".cute-modal-numero");
    const tituloModal = modal.querySelector(".cute-modal-titulo");
    const textoModal = modal.querySelector(".cute-modal-texto");
    const botaoFecharModal = modal.querySelector(".cute-fechar-modal");

    let coracaoAtual = null;
    const coisinhasVisitadas = new Set();

    function abrirModal(indice, botao) {
        coracaoAtual = botao;

        numeroModal.textContent =
            `COISINHA ${String(indice + 1).padStart(2, "0")} DE 20`;

        tituloModal.textContent = "Uma das minhas coisas favoritas...";
        textoModal.textContent = coisinhas[indice];

        modal.classList.add("cute-overlay-aberto");
        modal.setAttribute("aria-hidden", "false");

        botaoFecharModal.focus();

        coisinhasVisitadas.add(indice);
        botao.classList.add("cute-descoberto");

        atualizarProgresso();
    }

    function fecharModal() {
        modal.classList.remove("cute-overlay-aberto");
        modal.setAttribute("aria-hidden", "true");

        if (coracaoAtual) {
            coracaoAtual.focus();
        }
    }

    function atualizarProgresso() {
        const quantidade = coisinhasVisitadas.size;
        const porcentagem = (quantidade / coisinhas.length) * 100;

        textoProgresso.textContent =
            `${quantidade} de ${coisinhas.length} coisinhas descobertas`;

        barraProgresso.style.width = `${porcentagem}%`;

        if (quantidade === coisinhas.length) {
            textoProgresso.textContent =
                "Você descobriu todas as 20 coisinhas! Mas ainda existem infinitos motivos. ❤️";
        }
    }

    coisinhas.forEach((coisinha, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "cute-coracao";

        botao.innerHTML = `
            <span>♡</span>
            <span>${String(indice + 1).padStart(2, "0")}</span>
        `;

        botao.setAttribute(
            "aria-label",
            `Descobrir coisinha número ${indice + 1}`
        );

        botao.addEventListener("click", () => {
            abrirModal(indice, botao);
        });

        muralCoracoes.appendChild(botao);
    });

    botaoFecharModal.addEventListener("click", fecharModal);

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            fecharModal();
        }
    });

    // ================================================
    // SE EU PUDESSE ESCOLHER DE NOVO
    // ================================================

    const modalEscolha = document.createElement("div");
    modalEscolha.className = "cute-overlay";
    modalEscolha.setAttribute("aria-hidden", "true");

    modalEscolha.innerHTML = `
        <article class="cute-modal">
            <span class="cute-modal-icone">💗</span>

            <span class="cute-modal-numero">
                MINHA ESCOLHA
            </span>

            <h3>Eu escolheria você. Sempre você.</h3>

            <p>
                Se eu pudesse voltar no tempo e viver tudo novamente,
                sabendo de cada sorriso, cada abraço, cada conversa,
                cada momento e até mesmo de cada dificuldade,
                ainda assim escolheria encontrar você.

                <br><br>

                Entre todas as pessoas, todos os caminhos e todas
                as possibilidades desse universo, minha escolha
                continuaria sendo você. ❤️
            </p>

            <button class="cute-fechar-modal" type="button">
                Que bom que tenho você ♡
            </button>
        </article>
    `;

    document.body.appendChild(modalEscolha);

    const botaoFecharEscolha =
        modalEscolha.querySelector(".cute-fechar-modal");

    function abrirEscolha() {
        modalEscolha.classList.add("cute-overlay-aberto");
        modalEscolha.setAttribute("aria-hidden", "false");
        botaoFecharEscolha.focus();
    }

    function fecharEscolha() {
        modalEscolha.classList.remove("cute-overlay-aberto");
        modalEscolha.setAttribute("aria-hidden", "true");
        botaoEscolha.focus();
    }

    botaoEscolha.addEventListener("click", abrirEscolha);
    botaoFecharEscolha.addEventListener("click", fecharEscolha);

    modalEscolha.addEventListener("click", (evento) => {
        if (evento.target === modalEscolha) {
            fecharEscolha();
        }
    });

    // ================================================
    // PRESENTE SURPRESA
    // ================================================

    const modalPresente = document.createElement("div");
    modalPresente.className = "cute-overlay";
    modalPresente.setAttribute("aria-hidden", "true");

    modalPresente.innerHTML = `
        <article class="cute-modal">
            <span class="cute-modal-icone">🎁</span>

            <span class="cute-modal-numero">
                UM PRESENTINHO PARA VOCÊ
            </span>

            <h3>Se eu pudesse te dar uma coisa...</h3>

            <p>
                Seria a oportunidade de se enxergar pelos meus olhos
                por alguns minutos.

                <br><br>

                Assim você entenderia o quanto é especial,
                o quanto é linda e o quanto é amada.

                <br><br>

                Talvez assim você conseguisse enxergar um pouquinho
                do que eu vejo todos os dias quando olho para você.

                <br><br>

                Eu te amo, meu amorzinho! ❤️
            </p>

            <button class="cute-fechar-modal" type="button">
                Eu te amo! ❤️
            </button>
        </article>
    `;

    document.body.appendChild(modalPresente);

    const botaoFecharPresente =
        modalPresente.querySelector(".cute-fechar-modal");

    function abrirPresente() {
        modalPresente.classList.add("cute-overlay-aberto");
        modalPresente.setAttribute("aria-hidden", "false");
        botaoFecharPresente.focus();
    }

    function fecharPresente() {
        modalPresente.classList.remove("cute-overlay-aberto");
        modalPresente.setAttribute("aria-hidden", "true");
        botaoPresente.focus();
    }

    botaoPresente.addEventListener("click", abrirPresente);
    botaoFecharPresente.addEventListener("click", fecharPresente);

    modalPresente.addEventListener("click", (evento) => {
        if (evento.target === modalPresente) {
            fecharPresente();
        }
    });

    // ================================================
    // ABRIR E FECHAR PLANETA
    // ================================================

    function abrirGaleriaCute() {
        galeria.classList.add("cute-aberta");
        galeria.setAttribute("aria-hidden", "false");

        conteudoPlanetas.classList.add("conteudo-escondido");

        botaoVoltar.focus();
    }

    function fecharGaleriaCute() {
        fecharModal();
        fecharEscolha();
        fecharPresente();

        galeria.classList.remove("cute-aberta");
        galeria.setAttribute("aria-hidden", "true");

        conteudoPlanetas.classList.remove("conteudo-escondido");

        planetaCute.focus();
    }

    planetaCute.setAttribute("role", "button");
    planetaCute.setAttribute("tabindex", "0");
    planetaCute.setAttribute("aria-label", "Explorar Planeta Cute Cute");

    planetaCute.addEventListener("click", abrirGaleriaCute);

    planetaCute.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirGaleriaCute();
        }
    });

    botaoVoltar.addEventListener("click", fecharGaleriaCute);

    // ================================================
    // TECLADO
    // ================================================

    document.addEventListener("keydown", (evento) => {
        if (evento.key !== "Escape") return;

        if (modalPresente.classList.contains("cute-overlay-aberto")) {
            fecharPresente();
            return;
        }

        if (modalEscolha.classList.contains("cute-overlay-aberto")) {
            fecharEscolha();
            return;
        }

        if (modal.classList.contains("cute-overlay-aberto")) {
            fecharModal();
            return;
        }

        if (galeria.classList.contains("cute-aberta")) {
            fecharGaleriaCute();
        }
    });

})();