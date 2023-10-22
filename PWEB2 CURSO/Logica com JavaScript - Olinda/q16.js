// Questão 16  ( Programa para adivinhar um numero entre 1 - 100)

// Passo 1: Gerar um numero aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Passo 2: Inicializar variáveis para rastrer tentativas e dicas.
let tentativas = 0;
let acertou = false;

// Passo 3: tenho que criar um loop para permirir que o usuário adivinhe até acertar.
while (!acertou) {
    // Passo 4: Pedir ao usuario para adivinhar o número e armazenar a entrada.
    const palpite = prompt("Advinhe o número entre 1 e 100: ");

    // Passo 5: converter a entrada do usuário em um número inteiro.
    const palpiteInt = parseInt(palpite);

    // Passo 6: Verificar se o palpipte é válido (um numero entre 1 e 100)
    if (Number.isNaN(palpiteInt) || palpiteInt < 1 || palpiteInt > 100) {
        alert("Por favor, insira um numero valido entre 1 e 100. ");
    } else {
        // Passo 7: Incrementar o contador de tentativas. 
        tentativas++;

        // Passo 8: Verificar se o palpite é igual aonumero aleatório.
        if (palpiteInt === numeroAleatorio) {
            acertou = true;
        } else if (palpiteInt < numeroAleatorio) {
            alert("Tente um número maior. ");
        } else {
            alert("Tente um número menor. ");
        }
    }
}

// Passo 10: exibir a mensagem de parabéns e o numero de tentativas:
alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas. `);