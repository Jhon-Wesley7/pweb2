// Questão 17

// Solicita ao usuário que insira um número inteiro
const numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é negativo
if (numero < 0) {
    console.log("Fatorial não definido para números negativos.");
} else if (numero === 0) {
    console.log("O fatorial de 0 é 1.");
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    window.alert(`O fatorial de ${numero} é ${fatorial}`);
}