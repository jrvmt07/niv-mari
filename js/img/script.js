
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
   Para adicionar suas fotos:
   coloque os arquivos na pasta "fotos"
   com os nomes foto-01.jpg até foto-12.jpg.
*/

const memorias = [
    {
        arquivo: "foto-01.jpg",
        legenda: "Um dos meus momentos favoritos ♡"
    },
    {
        arquivo: "foto-02.jpg",
        legenda: "Com você tudo fica mais bonito."
    },
    {
        arquivo: "foto-03.jpg",
        legenda: "Mais uma lembrança nossa ✨"
    },
    {
        arquivo: "foto-04.jpg",
        legenda: "Eu guardaria esse momento mil vezes."
    },
    {
        arquivo: "foto-05.jpg",
        legenda: "Meu lugar favorito é ao seu lado."
    },
    {
        arquivo: "foto-06.jpg",
        legenda: "Só nós dois. E isso já é tudo."
    },
    {
        arquivo: "foto-07.jpg",
        legenda: "Um dia que merece ser lembrado."
    },
    {
        arquivo: "foto-08.jpg",
        legenda: "Minha companhia preferida."
    },
    {
        arquivo: "foto-09.jpg",
        legenda: "Mais um pedacinho da nossa história."
    },
    {
        arquivo: "foto-10.jpg",
        legenda: "Eu amo viver momentos com você."
    },
    {
        arquivo: "foto-11.jpg",
        legenda: "Que venham muitos outros momentos."
    },
    {
        arquivo: "foto-12.jpg",
        legenda: "E ainda temos tantas memórias para criar ♡"
    }
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
            ✧ UM UNIVERSO DE LEMBRANÇAS ✧
        </span>

        <h1>Um pouquinho da nossa história...</h1>

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
