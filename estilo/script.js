/*EXIBE A DIV DE UMA LETRA*/
function exibeLetra(letra) {
	ocultaLetrasEHinarios();
	document.getElementById(letra).style.display = "block";
	visibilidadeElementoPorClasse('separador',true);
	visibilidadeElementoPorClasse('paragrafo-letra',true);
	visibilidadeElementoPorClasse('resultado_busca',false);
	defineLetra(letra);
}

/*OCULTA TODAS AS LETRAS */
function ocultaLetrasEHinarios() {
	
	//recupera lista de elementos com a classe 'oculta-hinario'
	var hinarios = document.getElementsByClassName('oculta-hinario');
	
	//oculta os elementos da lista acima
	for(var i = 0; i < hinarios.length; i++) {
		hinarios[i].style.display = "none";
	}
	
	//recupera lista de elementos com a classe 'oculta-letra'
	var letras = document.getElementsByClassName('oculta-letra');
	
	//oculta os elementos da lista acima	
	for(var i = 0; i < letras.length; i++) {
		letras[i].style.display = "none";
	}
	
	//seta a visibilidade dos elementos pelo nome da classe
	visibilidadeElementoPorClasse('separador',false);
	visibilidadeElementoPorClasse('paragrafo-letra',false);
}

/*OCULTA/EXIBE UM ELEMENTO PELO NOME DA CLASSE*/
function visibilidadeElementoPorClasse(classe,visivel) {
	
	//recupera os elementos da classe passada via parâmetro
	var elementos = document.getElementsByClassName(classe);
	
	//seta a visibilidade dos elementos da lista
	//de acordo com parâmetro passado
	for(var i = 0; i < elementos.length; i++) {
		if (visivel) {
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
	var lastChar = letra[letra.length - 1];
	document.getElementById('paragrafo-letra').innerHTML = "LETRA " + lastChar;
}

/*BUSCA MUSICA POR NOME*/
function buscaMusicaPorNome(){
	
	//texto do campo de pesquisa
	var textoBusca = document.getElementById('input_busca').value;
	
	//pega a div que terá o resultado da busca
	var elemResultadoBusca = document.getElementById("resultado_busca");
		
	//Realiza a busca a partir de 3 letras (sem espaços extras)
	if (textoBusca.trim().length >= 3) {
		
		//Oculta hinarios e letras para exibir o resultado da pesquisa
		ocultaLetrasEHinarios();
		
		//todos os elementos do tipo "a" da clase "fixo"
		var elementos = document.querySelectorAll("a.fixo");
		
		//string que receberá resultado da busca
		var textoFinal = "";
		
		//percorre os elementos da lista acima para montar o resultado
		//(sem duplicatas) caso o texto coincida com o nome do elemento
		for(var i = 0; i < elementos.length; i++) {
			if (contem(elementos[i].text, textoBusca) && 
					!contem(textoFinal, elementos[i].text)) {
				textoFinal = textoFinal + montaResultadoBusca(elementos[i]);
			}
		}
		
		//se a busca trouxe resultados, exibe o resultado
		if (textoFinal != "") {
			elemResultadoBusca.innerHTML = textoFinal;
		} else {
			elemResultadoBusca.innerHTML = "A busca n&atilde;o trouxe resultados!";
		}
	
		//exibe a div com o resultado da pesquisa
		visibilidadeElementoPorClasse('resultado_busca',true);
	} else {
		//oculta a div com o resultado da pesquisa se a 
		//quantidade de caracteres no campo de pesquisa for < 3
		visibilidadeElementoPorClasse('resultado_busca',false);
	}
}

/*MONTA O RESULTADO (HTML) DA BUSCA ADICIONANDO OS LINKS*/
function montaResultadoBusca(elemento) {
	return "<li> <a target='_blank' href='" + getValorAtributoHRef(elemento)
		+ "'> " + elemento.text + " </li>";	
}

/*VERIFICA SE STR1 CONTEM STR2 IGNORANDO O CASE*/
function contem(str1, str2) {
	
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	
	return (str1.includes(str2));
}

/*RETORNA O VALOR DO ATRIBUTO HREF DE UM ELEMENTO*/
function getValorAtributoHRef(elem) {
	var valorElemento = "";
	
	//percorre todos os attr e retorna o valor do href
	for (var i = 0; i < elem.attributes.length; i++) {
		if (elem.attributes[i].name == "href"){
			valorElemento = elem.attributes[i].value;
		}
	}
	return valorElemento;
}