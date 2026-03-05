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

function adicionarFoto() {
    const input = document.getElementById("inputFoto");
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        let fotos = JSON.parse(localStorage.getItem("fotos")) || [];
        fotos.push(e.target.result);
        localStorage.setItem("fotos", JSON.stringify(fotos));
        carregarFotos();
    };

    reader.readAsDataURL(file);
}

function carregarFotos() {
    const galeria = document.getElementById("galeria");
    if (!galeria) return;

    galeria.innerHTML = "";
    let fotos = JSON.parse(localStorage.getItem("fotos")) || [];

    fotos.forEach((foto, index) => {
        galeria.innerHTML += `
            <div class="quadro-foto">
                <img src="${foto}">
                <button onclick="excluirFoto(${index})">X</button>
            </div>
        `;
    });
}

function excluirFoto(index) {
    let fotos = JSON.parse(localStorage.getItem("fotos")) || [];
    fotos.splice(index, 1);
    localStorage.setItem("fotos", JSON.stringify(fotos));
    carregarFotos();
}

window.onload = function () {
    if (localStorage.getItem("logado") !== "true" && !window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
    carregarMensagens();
    carregarFotos();
}
