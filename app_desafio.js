//ex1 Criar uma função que exibe "Olá, mundo!" no console.

function exibirOla(){
    console.log('Olá, mundo!');
}

//ex2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirOlaNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibirOlaNome('leilane');

//ex3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero){
    return numero * 2;
}

let resultado = calcularDobro(5);
console.log(resultado);

//ex4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a , b , c ){
    return (a + b + c) / 3;
}
let media = calcularMedia ( 40, 68, 34 );
console.log(media);

//ex5   Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior( a , b){
    return a > b ? a : b;
}
let numeroMaior = maiorDeles(43 , 68);
console.log(numeroMaior);

//ex6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(numero){
    return (numero * numero);
}
let resultadofinal = quadrado(4);
console.log(resultado);

function soma(a , b){
    return a + b;
}

function elevado(d , e){
    return (d ** e)
}