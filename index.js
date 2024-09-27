let soma = parseInt(number1) + parseInt(number2);
let subtracao = (number1) - (number2);
let divisao = (number1) / (number2);
let multiplicacao = (number1) * (number2);





function calcular() {
    let nu1 = document.getElementById('number1')
    let nu2 = document.getElementById('number2')
    let operacao = document.getElementById('operação')
    let num1 = nu1.value
    let num2 = nu2.value
    let resultado = (num1) * (num2)

    if (operacao == "*") {
        resultado = num1 * num2;
    }
    else if (operacao == '-') {
        resultado = num1 - num2;
    }
    else if (operacao == '/') {
        resultado = num1 / num2;
    }
    else if (operacao == '+') {
        resultado = num1  + num2
    }
    
    console.log(resultado)

    alert(resultado)


}
