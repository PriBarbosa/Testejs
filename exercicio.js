//let numero1 = prompt("Qual mês você faz aniversário?") 
let numero1;

let MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"];


function transformarNumeroEmMes(numero) {



    if (numero == 1)
        console.log('janeiro')
    else if (numero == 2)
        console.log('fevereiro')
    else if (numero == 3)
        console.log('março')
    else if (numero == 4)
        console.log('abril')
    else if (numero == 5)
        console.log('maio')
    else if (numero == 6)
        console.log('junho')

    else if (numero == 7)
        console.log("julho")
    else if (numero == 8)
        console.log('agosto')
    else if (numero == 9)
        console.log('setembro')
    else if (numero == 10)
        console.log("outubro")
    else if (numero == 11)
        console.log('novembro')
    else if (numero == 12)
        console.log('dezembro')
    else
        console.log("erro")


}


function transformarNumeroEmSemana(numero) {
    if (numero == 1)
        return 'domingo'
    else if (numero == 2)
        return "segunda"
    else if (numero == 3)
        return 'terça'
    else if (numero == 4)
        return 'quarta'
    else if (numero == 5)
        return 'quinta'
    else if (numero == 6)
        return 'sexta'
    else if (numero == 7)
        return 'sabado'
    else return 'erro'

}

function calcular() {
    let input = document.getElementById('mes')
    numero1 = input.value
    transformarNumeroEmMes(numero1)
    let semana = transformarNumeroEmSemana(numero1)
    console.log('semana = ',semana)
}

function soma() {
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    let num1= nu1.value
    let num2 = nu2.value
    let resultado = parseInt(num1) + parseInt(num2)
    console.log('soma',resultado ) 
    
}

function dividir() {
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    let num1= nu1.value
    let num2 = nu2.value
    let resultado = (num1)/(num2)
    console.log('dividir',resultado ) 
}
function subtrair() {
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    let num1= nu1.value
    let num2 = nu2.value
    let resultado = (num1)-(num2)
    console.log('dividir',resultado ) 
}

function multiplicar() {
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    let num1= nu1.value
    let num2 = nu2.value
    let resultado = (num1)*(num2)
    console.log('multiplicar',resultado ) 
}