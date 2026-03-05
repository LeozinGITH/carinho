function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "Mari" && senha === "26.09.2002") {
        localStorage.setItem("logado", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("erro").innerText = "Usuário ou senha incorretos 💔";
    }
}

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}

function abrirDesafio() {
    document.getElementById("desafio").style.display = "block";
}

function verificarResposta() {
    const resposta = document.getElementById("resposta").value;

    // 🔐 ALTERE AQUI PARA A DATA QUE VOCÊ QUISER
    if (resposta === "leleo") {
        document.getElementById("mensagemSecreta").style.display = "block";
        document.getElementById("desafio").style.display = "none";
    } else {
        document.getElementById("erroDesafio").innerText = "Hmm… tenta de novo 💜";
    }
}

window.onload = function () {
    if (localStorage.getItem("logado") !== "true" && !window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
    carregarMensagens();
}