import Calculadora from "./calculadora";

const SOMA = '+';
const SUBTRACAO = '-';
const DIVISAO = '/';
const MULTIPLICACAO = '*';


function CalculadoraService() {

    function calcular(numero1, numero2, operacao) {
        let resultado;

        switch (operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {
        // Caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null){
            numAtual = '';
        }    
        // Quando o primeiro digito for um '.', concatena '0' antes do '.'
        if (numConcat === '.' && numAtual === ''){
            return '0.';
        }  
        // Caso ponto digitado já contenha um '.' apenas retorna
        if (numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
        }  

        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];
}

export default CalculadoraService;