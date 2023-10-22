// Questão 18
const palavra = String(prompt("Insira uma palavra: "));

const palavraSemEspacos = palavra.replace(/\s/g, '').toLowerCase();

const palavraInvertida = palavraSemEspacos.split('').reverse().join('');

if (palavraSemEspacos === palavraInvertida) {
    window.alert(`"${palavra}" é um políndromo. `);

} else {
    window.alert(`"${palavra}" não é um políndromo. `);

}