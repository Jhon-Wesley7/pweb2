// Questão 12 (erro no numero 5)

// Solicitar ao usuário para inserir um número
var numero = parseInt(prompt("Digite um número:"));

// Verificar se o número é primo
function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    var i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Verificar se o número é primo usando a função isPrimo
if (isPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}