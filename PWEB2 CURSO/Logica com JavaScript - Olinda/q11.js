// Questão 11 aprendendo sobre function

function maiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;

    } else if (num2 >= num1 && num2 >= num3) {
        return num2;

    } else {
        return num3;
    }
}

// solicitar os numeros ao usuario 
let numero1 = Number(prompt('Insira um numero: '));
let numero2 = Number(prompt('Insira um numero: '));
let numero3 = Number(prompt('Insira um numero: '));

// preciso chamar a function 
let maior = maiorNumero(numero1, numero2, numero3);
window.alert(`Esse é o maior numero ${maior}`);