// Fundamentos

// Var nome = "Valor"

var minhaVariavel = "Olá, Mundo!" // Declaracao De Variavel
console.log(minhaVariavel) // Imprimindo uma mensagem na area de console

/*
isso é
um comentario
de muitas 
linha
*/

// Variaveis e tipos de dados

var meuNumero = 10
console.log(meuNumero) // imprimir o conteudo da variavel
console.log(meuNumero + 5) // Vai Somar
console.log(typeof meuNumero) // typeof = vai dizer qual o tipo da variavel

var booleano = true // so retorna verdadeiro ou falso
var meuObjeto = {} // abre e fecha couchetes pra colocar objetos
var meuArray = [] // Um array é uma lista
var meuNull = null // tipo de dado que se ultiliza para dar valor depois
var meuUndefined = undefined // tipo de dado indefinido, aparece quando n se da valor

console.log(booleano) // Verdadeiro e Falso
console.log(meuObjeto) // Objeto
console.log(meuArray) // lista
console.log(meuNull) // Valor Nulo
console.log(meuUndefined) // valor nao definido

    // Formas de declarar variaveis
        // let e cost = subistitui o Var
            // let = Um valor que pode ser alterado durante o programa!
            // Const = Constante (Um vaor que n muda durante o programa)

let x = 10

const y = 5

console.log(typeof x)
console.log(x,y)
      
// Operadores Aritmeticos

console.log(`A soma de ${x} + ${y} é:`,x+y) // Adicao
console.log(`A multiplicacao de ${x} * ${y} é: `,x*y) // Multiplicacao
console.log(`A divisao de ${x} / ${y} é: `,x/y) // Divisao
console.log(`A Subtracao de ${x} - ${y} é: `,x-y) // Subtracao

// Operadores de Comparacao

console.log(x = y) // Recebe (x Vai receber o valor de y)
console.log(x == y) // Vai testar se (x) é igual a (y)
console.log(x === y) // Vai testar se (x) é identico a (y)
console.log(x != y) // Vai testar se (x) é diferente de (y)
console.log(x !== y) // Vai testar se (x) é diferente de (y) 

// Operadores Logicos 

// AND -> && (e - Logico (Um teste (**E** o outro tem que ser verdadeiro))
// Or -> || (ou - Logico (Um teste **Ou** outro tem que ser verdadeiro))

// And -> E (Os dois testes tem que ser verdadeiro)
    // (Verdadeiro && Verdadeiro) - Verdadeiro
    // (Verdadeiro && Falso) - Falso
    // (Falso && Verdadeiro) - Falso
    // (Falso && Falso) - Falso

// Os dois testes Logicos tem que ser verdadeiro!

console.log(10 > 5 && 20 > 5) // Verdadeiro
console.log(10 > 5 && 20 < 5) // Falso
console.log(10 < 5 && 20 < 5) // Falso

// Apenas um dos testes Logicos tem que ser Verdadeiro
console.log(10 < 5 || 20 < 5) // Verdadeiro
console.log(10 < 5 || 20 < 5) // Verdadeiro
console.log(10 < 5 || 20 < 5) // Falso





















