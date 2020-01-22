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
function defineLetra(letra){
	//o texto do parametro 'letra' chega no formato 'letraX'
	//captura o ultimo caractere para contacenar no titulo
	var lastChar = letra[letra.length -1];
	document.getElementById('paragrafo-letra').innerHTML = "LETRA " + lastChar;
}

/*EXIBE A DIV DE UM HINÁRIO*/
function exibeHinario(hinario) {
	ocultaLetrasEHinarios();
	document.getElementById(hinario).style.display = "block";
	// visibilidadeElementoPorClasse('separador',true);
	// visibilidadeElementoPorClasse('paragrafo-hinario',true);
	// defineHinario(hinario);
}

/*DEFINE O HINARIO QUE SERÁ EXIBIDO*/
function defineHinario(hinario){
	var nomeHinario = dicionario(hinario);
	document.getElementById('paragrafo-hinario').innerHTML = nomeHinario;
}

/*DICIONARIO DE HINARIOS*/
function dicionario(hinario) {
	
	if (hinario == "azul") {
		return "";
	} else if (hinario == "amarelo") {
		return "";
	} else if (hinario == "rosa") {
		return "";
	} else if (hinario == "novos_pt1") {
		return "";
	} else if (hinario == "novos_pt2") {
		return "";
	} else if (hinario == "novos_avulsos") {
		return "";
	} else if (hinario == "bencaos_de_deus") {
		return "";
	} else if (hinario == "omj") {
		return "";
	} else if (hinario == "compositores") {
		return "";
	} else if (hinario == "deixai") {
		return "";
	} else if (hinario == "ddg") {
		return "";
	} else if (hinario == "outra_dimensao") {
		return "";
	} else if (hinario == "er_sp") {
		return "";
	} else if (hinario == "familia_bendita") {
		return "";
	} else if (hinario == "festejai") {
		return "";
	} else if (hinario == "ficara_registrado") {
		return "";
	} else if (hinario == "fieis_adoradores") {
		return "";
	} else if (hinario == "oferta") {
		return "";
	} else if (hinario == "remindo") {
		return "";
	} else if (hinario == "canticos_omj") {
		return "";
	} else if (hinario == "vou_caminhar") {
		return "";
	} else if (hinario == "gloria_permanente") {
		return "";
	}
	
	return "?";
}