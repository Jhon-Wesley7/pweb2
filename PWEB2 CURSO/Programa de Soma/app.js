let numeros = [];

for (let i = 0; i <= 3; i++) {
	let numero = parseFloat(window.prompt("Digite um numero" + i + ":" ));
	numeros.push(numero);
}

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
	
	soma += numero[i];
	
}	

window.alert("A soma dos numeros equivale a:" + soma "");

