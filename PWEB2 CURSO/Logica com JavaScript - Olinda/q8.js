// Questão 8 (Aplicando do While junto com if else)

const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let palpite;


do {
    palpite = Number(window.prompt('Adivinhe um numero entre 1 e 10: '));
    tentativas++;

    if (palpite === numeroCorreto) {
        window.alert(`Parabéns você acertou o numero em ${tentativas} tentativa(s). `);
        window.alert(`Número de tentativas: ${tentativas}`);
    } else {
        window.alert('Tente novamente. ');
    }

} while (palpite !== numeroCorreto);