// Fundamentos

// Var nome = "Valor"

var minhaVariavel1 = "Olá, Mundo!"
console.log(minhaVariavel1)

/*
Comentario
De
Varias Linhas
*/

// Comentar Muito o Codigo Significa que o codigo ta mal escrito

// Variavel e Tipos De Dados

var meuNumero = 10
console.log(meuNumero)
console.log(meuNumero + 5)
console.log(typeof meuNumero)

var booleano = true
var meuObjeto = {}
var meuArray = []
var meuNull = null
var meuUndefined = undefined

console.log(booleano)
console.log(meuObjeto)
console.log(meuArray)
console.log(meuNull)
console.log(meuUndefined)

// Novas formas de declaracoes de variaveis

//Let e Const = Substitui o var

// let = Um valor que pode ser alterado durante o programa

// Const = é um Valor que nao pode ser alterado durante o codigo

let x = 10

const y = 5

console.log(x)
console.log(y)
console.log(typeof x)
console.log(x,y)

// operadores Aritmeticos

console.log(x + y)
console.log(x * y)
console.log(x / y)
console.log(x - y)

// + Adicao
// - Subtracao
// / Divisao
// * Multiplicacao

//Operadores de comparacao

console.log(x = y) //operador de atribuicao
console.log(x == y) // operador de comparador simples
console.log(x === y) // Operador de identidade
console.log(x !== y) // Operador de diferenca Composta
console.log(x != y) // Operador de Diferenciacao Simples

//Operadores Logicos

//And - && (e - Logico)
//Or - || (Ou - Logico)

console.log(10 > 5 && 20 > 5) // Verdadeiro
console.log(10 > 5 && 20 < 5) // Falso
console.log(10 < 5 && 20 < 5) // Falso

console.log(10 > 5 || 20 > 5) // Verdadeiro
console.log(10 > 5 || 20 < 5) // Verdadeiro
console.log(10 < 5 || 20 < 5) // Falso

// Conversor de Tipos

const meuNumero2 = "234"
const meuNumeroConvertido = Number(meuNumero2)

// Estruturas Condicionais

const idade = 14

if(idade < 13){
    console.log("Criança!!")
}else if(idade < 20){
    console.log("Adolecente!!")
}else{
    console.log("Adulto!!")
}


if(false){
    console.log("Isso é Executado")
}else{
    console.log("Isso Será Executado!!")
}


// Switch Case

const fruta = "Banana"

switch(fruta){
    case "Banana":
        console.log("Isso é uma Banana")
        break
    
    case "Abacate":
        console.log("Isso é Um Abacate")
        break
    
    case "uva":
        console.log("Isso é Uma Uva")
        break

    case "Maçã":
        console.log("Isso é Uma Maçã")
        break

    default:
        console.log("Não é nenhum dos casos!")
}

// Estritura de Repeticao

    // Vai ser Executados quantas vezes forem necessarias de acordo com a condicao


// For (para)

// Contador, condicao de limite, incremento


for(let i = 0; i< 5; i++){
    console.log(`O Valor De i é ${i}`)
}

// while (Enquanto)

let s = 0
while(s < 5){
    console.log(`O valor de s é: ${s}`)
    s++
}

// do While

let j = 0

do{
    console.log(`O Valor de j é: ${j}`)
    j++
}while(j < 5)


// funcoes

function comprimentar(){
    console.log("Olá")
}

comprimentar()

// Escopo de Variaveis

let cor = "Azul"

function mostrar_cor(){
    let cor = "Verde"
    console.log(cor)
}

mostrar_cor()

// Hoisting = Içamento

// Da pra chamar a funcao antes mesmo dela ser criada!

testeHoisting()

function testeHoisting(){
    console.log("Deu Certo!!!")
}

// Arrow Funcion
    // Uma maneira mais simples de criar as funcoes

const testeArrow = () => console.log("Isso tambem é uma Funcao!!!")

// truthy e falsy

const minhaVariavel01 = '' // Falsy
const minhaVariavel02 = 'Alguma Coisa' // Truthy

if(minhaVariavel01){
    console.log("É Verdadeiro!!")
}else{
    console.log("É Falso!!")
}

if(minhaVariavel02){
    console.log("É Verdadeiro!! 2")
}else{
    console.log("É Falso!! 2")
}

// Arrays (listas)

const arrays = ['Elemento1','Elemento2','Elemento3']

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros)
console.log(numeros[0])

// para adicionar um elemento na lista (push)
// para remover um item da lista (pop)

numeros.push(11)
console.log(numeros)

numeros.pop(11)
console.log(numeros)


// String

// concatenacao

const minhaStringNova = "Olá, Mundo!"
const minhaStringNova2 = minhaStringNova + " Como voce esta?"

console.log(minhaStringNova2)

// Interpolacao (Mesma coisa de concatenacao)

const minhaStringNova3 = `${minhaStringNova2} Como voce está? `
console.log(minhaStringNova3)


//------------------------------------------------------------------------------------------

// lenght (contar quantos caracteres tem dentro da variavel)

console.log(minhaStringNova3.length)
console.log(minhaStringNova3[5]) // Para olhar um caracter expecifico dentro da variavel  

//------------------------------------------------------------------------------------------

// toUpperCase (Deixa as letras em todas maiusculas)

console.log(minhaStringNova.toUpperCase())

//------------------------------------------------------------------------------------------

// toLowerCase (Deixa todas as letras em minusculo)

console.log(minhaStringNova.toLowerCase())

//------------------------------------------------------------------------------------------

// Data e hora

const agora = Date() // Date TEM que ser escrito em MAIUSCULO
console.log(agora)

const natal = new Date(2023, 11, 25)
console.log(natal)
//------------------------------------------------------------------------------------------

//math ( para operacoes matematicas)

console.log(Math.PI) // Vai me retornar o valor de pi

console.log(Math.round(3.6)) // Arredonda o numero pra cima

console.log(Math.sqrt(16)) //  Raiz Quadarada

console.log(Math.pow(2,3)) // Potencia























