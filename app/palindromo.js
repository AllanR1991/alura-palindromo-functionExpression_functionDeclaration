const elementoFormulario = document.querySelector('form');
const elementoPalavra = document.querySelector('input');
const elementoBotao = document.querySelector('button');
const elementoParagrafo = document.querySelector('p');

elementoFormulario.addEventListener('submit',
    (e) => {
        e.preventDefault();
    }
)

elementoBotao.addEventListener('click',
    essaPalavraEUmPalindromo
)


/**
 * Function Expression não permiti chamar ela, de criar ela.
 */
const essaPalavraEUmPalindromo = function () {
    
    

    var palavra = elementoPalavra.value;

    var separandoAsLetrasDaPalavra = palavra.split("");

    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();

    palavraInvertida = palavraInvertida.join("");


    resultadoComparacao = palavra == palavraInvertida ?
        `A palavra ${palavra} é um palindromo.` :
        `A palavra ${palavra} não é um palindromo.` 

    elementoParagrafo.textContent = resultadoComparacao;
}





/**
 * Function Declaration permiti chamar ela mesmo ela nao tendo sido criada antes.
 */
/*
function essaPalavraEUmPalindromo() {
    
    

    var palavra = elementoPalavra.value;

    var separandoAsLetrasDaPalavra = palavra.split("");

    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();

    palavraInvertida = palavraInvertida.join("");


    resultadoComparacao = palavra == palavraInvertida ?
        `A palavra ${palavra} é um palindromo.` :
        `A palavra ${palavra} não é um palindromo.` 

    elementoParagrafo.textContent = resultadoComparacao;
}
*/

