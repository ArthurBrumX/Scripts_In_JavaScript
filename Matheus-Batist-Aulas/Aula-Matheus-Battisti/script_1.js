// Para imprimir algo no console

console.log('Olá, Mundo')

// consoles (Geral)

console.log('Esta é uma mensagem!') // Imprime uma mensagem no console
console.warn('Este é um Aviso!') // Imprime um Aviso
console.error('Este é um erro!') // Imprime um erro

//---------------------------------------------------------------------------

// Variaveis

    // 3 tipos de declaracao de variaveis

    //var
    //let
    //const

var x = 10 // A Variavel 'x' vai receber o valor 10
let y = 15 // A variavel 'y' vai receber o valor 15
const z = 20 // A Variavel 'z' vai receber o valor 20

console.log(x) // Vai imprimir o valor da variavel 'x'
console.log(y) // Vai imprimir o valor da variavel 'y'
console.log(z) // Vai imprimir o valor da variavel 'z'

    // var = forma antiga de se declarar (pode ser redeclarada a qualquer momento)
    // let = forma atual de se declarar (pode ser redeclarada e até criar outra variavel com o mesmo nome)
    // const = fortam atual de se declarar (nao pode ser redeclarada de forma alguma)

//---------------------------------------------------------------------------

// Tipos de dados
    // Principais e mais ultilizados tipos de dados em JS


// String = É todo tipo de caracter
const nome = "Arthur" // Tipo String
console.log(nome)
console.log(typeof nome) // Typeof = mostra o tipo da variavel

// ===========================================================

// Number = Todos os tipos de numeros (Inteiros ou Reais)
const numero_inteiro = 4 // Tipo Number
console.log(numero_inteiro)
console.log(typeof numero_inteiro) // Typeof = mostra o tipo da variavel

const numero_real = 12.4 // Tipo Number
console.log(numero_real)
console.log(typeof numero_real) // Typeof = mostra o tipo da variavel

// ===========================================================

// Booleano (Verdadeiro ou Falso)
const booleano_false = false // Tipo Booleano (Verdadeiro e Falso)
console.log(booleano_false)
console.log(typeof booleano_false) // Typeof = mostra o tipo da variavel

const booleano_true = true // Tipo booleano (Verdadeiro e Falso)
console.log(booleano_true)
console.log(typeof booleano_true) // Typeof = mostra o tipo da variavel

// ===========================================================

// Null = (Nulo) -> Não tem valor ainda, porem pode ser atribuido
const nulo = null // Tipo Null (nulo)
console.log(nulo)
console.log(typeof nulo) // typeof = mostra o tipo da variavel

// ===========================================================

// undefined
let sem_valor // Tipo Undefined ( Não foi definido nenhum valo)
console.log(sem_valor)
console.log(typeof sem_valor) // Typeof = mostra o tipo da variavel

//---------------------------------------------------------------------------


// Arrays (Listas)

    // É recomendado deixar cada lista com um tipo de dado unico

const linguagens = ["JS","PHP","Python"] //Isso é uma lista
console.log(linguagens)
console.log(typeof linguagens)

// ===========================================================

// Objetos (Objetos Literais)

    // Um onjeto é separado por (Nome, Propriedade, valor)

// const usuario = nome: '------valor-----', nome: '---valor----',
const usuario =  {email: 'arthur@gmail.com', password: 'teste123', age: 30} // objetos literais






























