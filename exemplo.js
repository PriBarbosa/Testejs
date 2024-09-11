// const numero1 = 5
// var numero2 = 2

let numero1 = prompt("Digite um numero:")
let numero2 = prompt("Digite outro numero:")
let operacao = prompt("Digite a operação: +, -, /, , *, %") 

let soma = parseInt(numero1) + parseInt(numero2);
let subtracao = numero1 - numero2;
let divisao = numero1 / numero2;
let multiplicacao = numero1 * numero2;
let expoente = numero1 ** numero2;
let resto = numero1 % 2;

if (operacao == '+') {
    console.log(soma)
}
if (operacao == '-') {
    console.log(subtracao)
}
if (operacao == '/') {
    console.log(divisao)
}
if (operacao == '*') {
    console.log(multiplicacao)
}
if (operacao == '**') {
    console.log(expoente)
}
if (operacao == '%') {
    console.log(resto)

    if (resto == 0) {
        console.log('é par')
    }
    else {
        console.log('é impar')
    }
}


// alert(soma)
// console.log(operacao)
// console.log(subtracao)
// console.log(divisao)
// console.log(multiplicacao)