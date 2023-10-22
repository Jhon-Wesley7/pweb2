// Questão 9 (Primeiro uso do else if, + de 1 condição)

let numero = Number(window.prompt('Insira um numero: '));
if (numero > 0) {
    window.alert(`O numero ${numero} é positivo`);
} else if (numero < 0) {
    window.alert(`O n[umero ${numero} é negativo `);
} else {
    window.alert('Seu numero é zero. ')
}