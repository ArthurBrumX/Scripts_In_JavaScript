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

console.log(typeof meuNumeroConvertido)
console.log(meuNumeroConvertido)
console.log(meuNumero2)


//---------------------------------------------------

const meuNumero3 = "123"
const meuNumeroConvertido2 = Number(meuNumero3)

console.log(typeof meuNumeroConvertido2)
console.log(meuNumeroConvertido2)
console.log(meuNumero3)

//---------------------------------------------------

const meuNumero4 = "123"
const meuNumeroConvertido3 = Number(meuNumero4)

console.log(typeof meuNumeroConvertido3)
console.log(meuNumeroConvertido3)
console.log(meuNumero4)

//---------------------------------------------------

// Estrutura de condicional - If, Else, Else if

const idade  = 20

if (idade < 13){
    console.log("Criança!!")
} else if(idade < 20){
    console.log("Adolecente")
} else{
    console.log("Adulto!!")
}


if (false){
    console.log("Isso será executado!")
}else{
    console.log("Isso Será executado!!")
}

//------------------------------------------------------------------------------------------

// Switch case

const fruta = "Maça"

//Vai avaliar a variavel e caso ela for verdade em um dos blocos ela vai executar!!

// Só vai executar o bloco CASO (Case) um dos blocos seje verdadeiro de acordo com o teste ou parametro colocado no switch
switch(fruta){ 
    case "Banana":
        console.log("Banana é a fruta")
        break // Cada Case tem que ter um break se nao ele executa os demais tambemw
    
    case "Maça":
        console.log("Maça é a fruta")
        break

    default: // Esse é o ultimo bloco, caso nenhum dos blocos sejem executados
        console.log("Não encontrei a fruta em nenhum dos casos")
}

//------------------------------------------------------------------------------------------

// Estrutura de Repeticao (Laços de Repeticao - while, for)

    // Vai ser executados quantas vezes forem necessarias de acordo com a condicao imposta
    // 1,2,3,4,5,6,7,8.... => Dependendo de uma condicao


    /* 
    for(contador, condicao de limite, incremento) {
        console.log("Alguma coisa")
    }
    */

// for (para)

// contador, condicao de limite, incremento
for(let i = 0;/*Atribuicao de variavel */    i < 5; /*Teste Logico*/     i = i + 1/*Vai adicionar mais um toda vez que o codigo for executado */){
    // Enquanto a variavel (i) for menor que 5 execute o codigo
    console.log(`O valor de i é ${i} `)
}


// while (Enquanto)

let s = 0
while(s < 5){
    console.log(`O valor de s é: ${s}`)
    s++
}

// do while

let j = 0 

// do = Fazer
// while = enquanto
// do while = Fazer enquanto...

do{ // Fazer isso aq em baixo
    console.log(`O valor de j é de: ${j}`)
    j++
}while(j < 5)

//------------------------------------------------------------------------------------------

// Funções (Salvar um trecho de codigo pra ser usado varias vezes)

    // function nome(argumento1, argumento2){ Corpo}

    // Uma funcao só é executada se ela for chamada em alguma parte do codigo 

function comprimentar (){
    console.log("olá")
}


// invocacao = nome()
comprimentar()


//------------------------------------------------------------------------------------------

// Escopo de variaveis

let cor = "Azul" // Variavel Global

/*
Quando uma variavel estiver dentro de um escopo( estrutura de: Repeticao, condicional etc..) 
é uma variavel local, mas quando é executada fora do escopo ela se torna uma variavel global

*/

function mostrar_cor(){
    let cor = "Verde" // Variavel local (está somente dentro dessa funcao)
}

//------------------------------------------------------------------------------------------

 
// Hoisting = içamento

    //Eu consigo chamar a funcao antes dela ser criadas

testeHoisting()

function testeHoisting(){
    console.log("Deu Certo!!")
}

//------------------------------------------------------------------------------------------
// Arrow Function
    // Funciona como uma funcao mais resumida

const testeArrow = (/*Parametro*/) => console.log("Isso tambem é uma funcao!!!")


//------------------------------------------------------------------------------------------

// Truthy e Falsy

// se a variavel estiver vazia é considerada falsa
// Se a variavel estiver com pelo menos um valor dentro dela, é considerada verdadeira

const minhaVariavel1 = '' // Falsy
const minhaVariavel2 = 'Alguma Coisa' // Truthy

if(minhaVariavel1){
    console.log("É Verdadeiro!!")
}else{
    console.log("É Falso!!")
}

if(minhaVariavel2){
    console.log("É Verdadeiro!! 2")
}else{
    console.log("É Falso!! 2")
}

//------------------------------------------------------------------------------------------

// Arrays (Listas)

const arrays = ['elemento1', 'elemento2', 'elemento3', 'elemento4']

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros)

console.log(numeros[0]) // para pegar um item especifico da lista
// Lembrando que o js consta os numeros apartir de 0

console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])
console.log(numeros[6])
console.log(numeros[7])
console.log(numeros[8])
console.log(numeros[9])
console.log(numeros[10])

// foi  mostrado na tela um elemento de cada vez desse forma

// Para adicionar um elemento na lista

    // nomeDaLista.push(elemento Que eu quero Adicionar)

// Ex:

numeros.push(11)

console.log(numeros)


// Para tirar um elemento da Lista

    // nomeDaLista.pop(Elemento que eu quero remover)

//Ex: 

numeros.pop(11)
console.log(numeros)

//------------------------------------------------------------------------------------------
// Strings

//Concatenacao
const minhaStringNova = "Ola mundo!"

const minhaStringNova2 = minhaStringNova + "Como voce esta!" // Concatenacao

console.log(minhaStringNova2)
//------------------------------------------------------------------------------------------

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













































































