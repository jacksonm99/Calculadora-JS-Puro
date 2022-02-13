
function calculadora(){
var opcao = (prompt('Calculadora JS: \n1 - Somar \n2 - Subtração \n3 - Multiplicação \n4 - Divisão'));

let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira mais um valor:'));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    OutraOperacao();
    
}

function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    OutraOperacao();
}

function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    OutraOperacao();
}

function divisao(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    OutraOperacao();
}
function OutraOperacao(){
    let opcao = Number(prompt('Deseja fazer outra operação? \n1-Sim \n2-Não'));
    if(opcao == 1 ){
        calculadora();
    }else {
        alert('Ok, até mais');
    }

}
if (opcao == 1) {
    soma();  
} else if (opcao == 2){
    subtracao();
} else if (opcao ==3){
    multiplicacao();
} else if (opcao == 4){
    divisao();
} else{
    alert('Valor inválido!');
    OutraOperacao();
    
}

}



calculadora();