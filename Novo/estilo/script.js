/*EXIBE A DIV DE UMA LETRA*/
function exibeLetra(letra) {
	ocultaLetrasEHinarios();
	document.getElementById(letra).style.display = "block";
	visibilidadeElementoPorClasse('separador',true);
	visibilidadeElementoPorClasse('paragrafo-letra',true);
	defineLetra(letra);
}

/*OCULTA TODAS AS LETRAS */
function ocultaLetrasEHinarios() {
	
	var hinarios = document.getElementsByClassName('oculta-hinario');
		
	for(i = 0; i < hinarios.length; i++) {
		hinarios[i].style.display = "none";
	}
	
	var letras = document.getElementsByClassName('oculta-letra');
		
	for(i = 0; i < letras.length; i++) {
		letras[i].style.display = "none";
	}
	
	visibilidadeElementoPorClasse('separador',false);
	visibilidadeElementoPorClasse('paragrafo-letra',false);
}

/*OCULTA/EXIBE UM ELEMENTO PELO NOME DA CLASSE*/
function visibilidadeElementoPorClasse(classe,visible) {
	var elementos = document.getElementsByClassName(classe);
	
	for(i = 0; i < elementos.length; i++) {
		if (visible) {
			elementos[i].style.display = "block";
		} else {
			elementos[i].style.display = "none";
		}
	}
}

/*DEFINE A LETRA QUE SERÁ EXIBIDA*/
function defineLetra (letra){
	//o texto do parametro 'letra' chega no formato 'letraX'
	//captura o ultimo caractere para contacenar no titulo
	var lastChar = letra[letra.length -1];
	document.getElementById('paragrafo-letra').innerHTML = "LETRA " + lastChar;
}

/*EXIBE A DIV DE UM HINÁRIO*/
function exibeHinario(hinario) {
	ocultaLetrasEHinarios();
	document.getElementById(hinario).style.display = "block";
	// document.getElementById('separador').style.display = "block";
}