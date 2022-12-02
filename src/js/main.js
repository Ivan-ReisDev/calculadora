
let $visor = document.getElementById('resposta').innerHTML;

function insert(num){
    document.getElementById('resposta').innerHTML += num 
}

function limpaMemoria(){
    document.getElementById('resposta').innerHTML = '';
}

function limpaDigito(){
    let $resultado = document.getElementById('resposta').innerHTML;
    document.getElementById('resposta').innerHTML = $resultado.substring(0, $resultado.length -1)
}

function calcular(){
    let $resultado = document.getElementById('resposta').innerHTML;
    if($resultado){
        document.getElementById('resposta').innerHTML = eval($resultado);
        
    }

}
