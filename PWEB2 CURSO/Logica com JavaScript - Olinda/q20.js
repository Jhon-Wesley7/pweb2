// Questão 20

// Solicita ao usuário que insira sua altura em metros
var altura = prompt("Digite sua altura em metros:");

// Solicita ao usuário que insira seu peso em quilogramas
var peso = prompt("Digite seu peso em quilogramas:");

// Convertendo as entradas do usuário para números em ponto flutuante
altura = parseFloat(altura);
peso = parseFloat(peso);

// Calculo do IMC
var imc = peso / (altura * altura);

// Exibe o resultado
if (!isNaN(imc)) {
  // iniciando a verificação se o IMC calculado é um número
  alert("Seu IMC é: " + imc.toFixed(2));
} else {
  alert("Por favor, insira valores válidos para altura e peso.");
}
