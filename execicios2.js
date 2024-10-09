function calcular() {
    let nu1 = document.getElementById('number1')
    let nu2 = document.getElementById('number2')
    let operacao = document.getElementById('operacao').value
    console.log(operacao)
    let num1 = nu1.value
    let num2 = nu2.value
    let resultado = 0
    let resultadoTela =document.getElementById("resultado")

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
        resultado = parseInt(num1) + parseInt(num2)
    }


    console.log(resultado)



 resultadoTela.innerText= resultado


}
