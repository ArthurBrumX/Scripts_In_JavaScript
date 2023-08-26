// Fundamentos

// Var nome = "Valor"

var minhaVariavel = "Olá Mundo!"; // Declaracao de variavel
console.log(minhaVariavel); // Imprimindo uma mensagem na area de console do navegador!

/*

Comentario com mais de uma linha

Isso
tudo
é
Um
Comentario
*/

// Comentar Muito o codigo Significa que o codigo ta mal escrito!

//-----------------------------------------------------------------------------------------------

// Variaveis e Tipos De Dados!

var meuNumero = 10;
console.log(meuNumero); // Só imprime o numero na tela (console)
console.log(meuNumero + 5) // concatenacao
console.log(typeof meuNumero) // typeof = mostra o tipo do dado da variavel

var booleano = true // o valor booleano só pode ser declarado ou retornar um valor (verdadeiro ou falso)
var meuObjeto = {} // Um objeto é declarado e iniciado por abertura e fechamento de chaves: {}
var meuArray = [] // um Array é uma lista 
var meuNull = null // o valor nulo é um valor que no presente momento do codigo ainda n tem valor, mas em breve vai ter
var meuUndefined = undefined // voce nunca atribui esse valor, isso é quando vc n da valor pra variavel e n declara como null


console.log(booleano)
console.log(meuObjeto)
console.log(meuArray)
console.log(meuNull)
console.log(meuUndefined)

// Novas Formas de declaracoes de variaveis

// Let e Const  = Substitui o var!

// let = um valor que pode ser alterado durante o programa!

// const = constante ( um valor que n muda durante o programa)

let x = 10

const y = 5

console.log(typeof x)
console.log(x,y)

//-----------------------------------------------------------------------------------------------

// Operadores Aritmeticos

console.log(x + y)
console.log(x * y)
console.log(x / y)
console.log(x - y)
/*
+ -> Adicao
- -> Subtracao
* -> Multiplicacao
/ -> Divisao
*/

//-----------------------------------------------------------------------------------------------
// Operadores de Comparacao

console.log(x = y) // x vai receber o valor de y
console.log(x == y) // x é igua a y
console.log(x === y) // x é identico a y (vai verificar o tipo e o valor)
console.log(x !== y) // x é identico a y (vai verificar o tipo e o valor)
console.log(x != y) // x é diferente de y

// Operadores Logicas

// AND -> && (e - Logico (Um teste **E** o outro tem que ser verdadeiro))
// or -> || (ou - logico (Um teste **OU** outro tem que ser Verdadeiro))

// Os dois testes logicos tem que ser verdadeiro
console.log(10 > 5 && 20 > 5) // Verdadeiro
console.log(10 > 5 && 20 < 5) // Falso
console.log(10 < 5 && 20 < 5) // falso

// Apenas Um dos dois testes logicos tem que ser verdadeiro
console.log(10 > 5 || 20 > 5) // Verdadeiro
console.log(10 > 5 || 20 < 5) // Verdadeiro
console.log(10 < 5 || 20 < 5) // Falso


//-----------------------------------------------------------------------------------------------

// conversao de tipos

const meuNumero2 = "123"
const meuNumeroConvertido = Number(meuNumero2) // criou uma nova variavel e atribuiu a outra variavel com o valor convertido!

console.log(typeof meuNumeroCovertido)
console.log(meuNumeroCovertido)
console.log(meuNumero2)


//---------------------------------------------------

const meuNumero3 = "123"
const meuNumeroConvertido2 = Number(meuNumero3)

console.log(typeof meuNumeroCovertido2)
console.log(meuNumeroCovertido2)
console.log(meuNumero3)

//---------------------------------------------------

const meuNumero4 = "123"
const meuNumeroConvertido3 = Number(meuNumero4)

console.log(typeof meuNumeroCovertido3)
console.log(meuNumeroConvertido3)
console.log(meuNumero4)

//---------------------------------------------------






























































