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