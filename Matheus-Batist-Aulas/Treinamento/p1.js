var minhaVariavel = "Olá, Mundo!!"
console.log(minhaVariavel)

// Variaveis e tipos de dados!

var meuNumero = 10
console.log(meuNumero) // Só imprime o numero na tela (console)
console.log(meuNumero + 5) // Concatenacao
console.log(typeof meuNumero) // typeof = mostre o tipo do dado da variavel

var booleano = true // Verdadeira e falso
var meuObjeto = {} // Um objeto
var meuArray = [] // Uma lista
var meuNull = null // Recebe um valor nulo para posteriormente ser atribuido algo
var meuUndefined = undefined // esse valor é gerado quando n se é atribuido um valor a variavel

console.log(booleano) 
console.log(meuObjeto)
console.log(meuArray)
console.log(meuNull)
console.log(meuUndefined)


let x = 10 

// Operadores aritmeticos

console.log(x+y)
console.log(x*y)
console.log(x/y)
console.log(x-y)

const y = 5

console.log(typeof x) // typeof = mostra o tipo do dado
console.log(x,y)

// operadore aritmeticos

console.log(x+y)
console.log(x*y)
console.log(x/y)
console.log(x-y)

console.log(x = y) // x vai receber o valor de y
console.log(x==x) // x é igual a y
console.log(x===y) // x é identico a y
console.log(x!==y) // é diferente de y
console.log(x!=y) // x é diferente de y

// Operadores Logicos

// AND -> &&
// OR -> || 

// Os dois testes logicos tem que resultar verdadeiro
console.log(10>5&&20>5) // Verdadeiro
console.log(10>5&&20<5) // Falso
console.log(10<5&&20<5) // Falso

// Apenas um dos dois testes tem que ser verdadeiro
console.log(10>5||20>5) // verdadeiro
console.log(10>5||20<5) // Verdadeiro
console.log(10<5||20<5) // Falso

// Conversao de tipos

const meuNumero2 = "123"
const meuNumeroConvertido2 = Number(meuNumero2)
//Criou uma variavel que vai receber convertido para numero a variavel "meuNumero2"
console.log(typeof meuNumeroConvertido2)
console.log(meuNumeroConvertido2)
console.log(meuNumero2)


const meuNumero3 = "123"
const meuNumeroConvertido3 = Number(meuNumero3)
console.log(typeof meuNumeroConvertido3)
console.log(meuNumeroConvertido3)
console.log(meuNumero3)

const meuNumero4 = "123"
const meuNumeroConvertido4 = Number(meuNumero4)
console.log(typeof meuNumeroConvertido4)
console.log(meuNumeroConvertido4)
console.log(meuNumero4)


// Estrutura de condicional

const idade = 20

if(idade < 13){
    console.log("Criança!!")
}else if(idade <20){
    console.log("Adolecente")
}else{
    console.log("Adulto!!")
}



if(false){
    console.log("Isso sera Executado!")
}else{
    console.log("Isso será executado!!")
}

// switch case

const fruta = "Maçã"

switch(fruta){
    case "banana":
        console.log("Banana é a fruta")
        break
    case "Maçã":
        console.log("Maçã é a fruta!")
        break
    case "uva":
        console.log("Uva é a fruta")
        break
    default:
        console.log("Não Encontrei a fruta em nenhum dos casos!!")
}

//for

// contador, condicao limite, Incremento








