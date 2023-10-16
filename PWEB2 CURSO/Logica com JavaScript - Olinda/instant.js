    //Exercicios - PWEB2

// Questão 1    
let nome = "Jhon"
window.alert("Boas vindas Jhon, " + nome + "!")

// Questão 2  
let idade = window.prompt("insira sua idade: ");
window.alert("Essa é a sua idade:" + idade + "!")

// Questão 3  
let temperatura = window.prompt("Digite a temperatura: ")
if (temperatura > 30) window.alert(temperatura + " graus celsius " + ", Nossa está quente");
else window.alert("Está frio");

// Questão 4  

let contador = 1;

while (contador <= 5) {
    window.alert(contador);
    contador++;
}

// Questão 4 extra

let contador2 = 1;

while (contador2 <= 10) {
    window.alert(`Essa é a sequencia ${contador2}`);
    contador2++;
}

// Questão 5 (Utilização de uma função / operador )

let n1 = Number(window.prompt('Digite um número: '));
let n2 = Number(window.prompt('Digite um segundo número: '));
soma = (n1 + n2);
window.alert(soma);

// Questão 6 (Utilização do if e else)

let resposta = confirm ('Você deseja continuar? ')
if (resposta) {
    window.alert('Pode entrar, seja bem vindo ');
} else {
    window.alert('Tudo bem, deixa pra proxima ');
}

// Questão 7 (Utilização do for)

for (let i = 2; i <= 20; i += 2 ) {
    console>log(i);
}

// Questão 8 (Aplicando do While junto com if else)

const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let palpite;


do { 
   palpite = Number(window.prompt('Adivinhe um numero entre 1 e 10: '));
   tentativas ++;

    if (palpite === numeroCorreto ) {
        window.alert(`Parabéns você acertou o numero em ${tentativas} tentativa(s). `);
        window.alert(`Número de tentativas: ${tentativas}`);
    } else {
        window.alert('Tente novamente. ');
    } 

} while (palpite !== numeroCorreto);

// Questão 9 (Primeiro uso do else if, + de 1 condição)

let numero = Number(window.prompt('Insira um numero: '));
if (numero > 0) {
    window.alert(`O numero ${numero} é positivo` );
} else if (numero < 0) {
    window.alert(`O n[umero ${numero} é negativo `);
}
else {
    window.alert('Seu numero é zero. ')
}

// Questão 10 forma 1

let frutas = [];
frutas[0] = 'Maçã'; 
frutas[1] = 'Uva'; 
frutas[2] = 'Pêra'; 

for (let i = 0; i < frutas.length; i++) {
    window,alert(frutas[i]);
}

// Questão 10 forma 2 

let frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja'];
for (let i = 0; i < frutas.length; i++){
    window.alert(frutas[i]);
}

// Questão 11 aprendendo sobre function

function maiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3){
        return num1;

    } else if (num2 >= num1 && num2 >= num3){
        return num2;

    } else{''
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

// Questão 12 (erro no numero 5)

let numeros = parseInt(prompt('Digite um numero: '));

let primo = true;
let i = 2;

while ( i < numeros) {
    if(numeros % 1 === 0) {
        primo = false;
        break;
    }
    i++
}

if (primo) {
    console.log(`${numeros}, é um numero primo`);

} else {
    console.log(`${numeros}, não é um numero primo `);
    
}

// Questão 13 (Uso do for )
let notas = [];

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Insira a nota ${i}: `));
    notas.push(nota);
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

window.alert(`A media das notas equivale: ${media}`);

// Questão 14 (O que eu aprendi na 13 me ajudou nessa)

let senhaCerta = [];
let senha = window.prompt("Digite a senha: ");
senhaCerta.push (senha);
if (senhaCerta == 'senha123') {
    window.alert('A senha está correta')
} else {
    window.alert('A senha está errada. ')
}

// Questão 15 

let numeroo = parseInt(window.prompt('Digite um numero: '));
for (let i = 1; i <= 10; i++) {
    let tabuada = numeroo * i;
    window.alert(`${numeroo} x ${i} = ${tabuada}`);
}