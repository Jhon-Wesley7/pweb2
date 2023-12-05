const divImagemPrincipal = document.querySelector("#imagem-principal")
const imagemPrincipal = divImagemPrincipal.querySelector("img")
const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo")
const btnProximo = divImagemPrincipal.querySelector(".proximo")
const btnAnterior = divImagemPrincipal.querySelector(".anterior")
const todasImagens = document.querySelectorAll ("#imagens img")

let idImagemAtiva = 0