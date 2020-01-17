/*EXIBE A DIV DE UMA LETRA*/
function exibeLetra(letra) {
	removeTodasAsLetras();
	document.getElementById(letra).style.display = "block";
}

/*OCULTA TODAS AS LETRAS ANTES DE EXIBIR ALGUMA*/
function removeTodasAsLetras() {
	var elementos = document.getElementsByClassName('oculta-letra');
	
	for(i = 0; i < elementos.length; i++) {
		elementos[i].style.display = "none";
	}
}

/**/
