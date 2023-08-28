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

for(let i = 0; i<5; i=i+1){
    console.log(`O valor de i é ${i}`)
}


// While(Enquanto)

let s = 0 

while (s < 5){
    console.log(`O valor de s é: ${s}`)
}

// do while

let j = 0

do{
    console.log(`O valor de j é de: ${j}`)
}while(j < 5)

// Funcoes

function comprimentar(){
    console.log("OLá!!")
}


// Invocacao da funcao:

comprimentar()

//Escopo de variaveis

let cor = "Azul" // Isso é uma variavel Global

function mostrar_cor(){
    let cor = "Verde" // Isso é uma variavel local (dentro do escopo)
}


// Hosting = Içamento

testeHoisting()

function testeHoisting(){
    console.log("Deu Certo!!")
}


// Arrow Function

const testeArrow = (/*Paramentros*/) => console.log("Isso tambem é uma funcao")


// truthy e Falsy

const minhaVariavel1 = ''
const minhaVariavel2 = 'Alguma Coisa'

if(minhaVariavel1){
    console.log("É Verdadeiro!")
}else{
    console.log("É Falso!!")
}


if(minhaVariavel2){
    console.log("É Verdadeiro!! 2")
}else{
    console.log("É Falso!! 2")
}


// Arrays

const arrays = ['Elemento1','Elemento2','Elemento3','Elemento4','Elemento5']

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros)

console.log(numeros[0])

console.log(numero[1])
console.log(numero[2])
console.log(numero[3])
console.log(numero[4])
console.log(numero[5])
console.log(numero[6])
console.log(numero[7])
console.log(numero[8])
console.log(numero[9])
console.log(numero[10])


// Para adicionar item a lista(no final)

numeros.push(11)
console.log(numeros)

// Para retirar um item da lista (no final)

numeros.pop(11)
console.log(numeros)

// Strings

// Concatenacao

const minhaStringNova = "Olá Mundo!"
const minhaStringNova2 = minhaStringNova + "Como Voce Esta!"
console.log(minhaStringNova2)

const minhaStringNova3 = `${minhaStringNova2} Como Voce Esta?`
console.log(minhaStringNova3)

console.log(minhaStringNova3.length)
console.log(minhaStringNova3[5])

console.log(minhaStringNova.toLocaleUpperCase())

console.log(minhaStringNova.toLocaleLowerCase())

// Data e Hora

const agora = Date()
console.log(agora)

const natal = new Date(2023,11,25)
console.log(natal)

//  math

console.log(Math.PI)
console.log(Math.round(3.6))
console.log(Math.sqrt(16))
console.log(Math.pow(2,3))
























