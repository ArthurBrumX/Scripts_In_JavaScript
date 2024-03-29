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
console.log(10 > 5 || 20 > 5) // Verdadeiro
console.log(10 > 5 || 20 < 5) // Verdadeiro
console.log(10 < 5 || 20 < 5) // Falso


// Conversao de tipos

const meuNumero2 = "123"
const meuNumeroConvertido2 = Number(meuNumero2) // conversao e atribuicao

console.log (typeof meuNumeroConvertido2)
console.log(meuNumeroConvertido2)
console.log(meuNumero2)

const meuNumero3 = "123"
const meuNumeroConvertido3 = Number(meuNumero3)

console.log(typeof meuNumeroConvertido3)
console.log(meuNumero3)

const meuNumero4 = "123"
const meuNumeroConvertido4 = Number(meuNumero4)

console.log(typeof meuNumeroConvertido4)
console.log(meuNumero4)

// Estruturas Condicional - if, else, else if

const idade = 20

if (idade < 13){
    console.log("Criança!!")
} else if (idade < 20){
    console.log("Adolecente!!")
}else{
    console.log("Adulto!!")
}

if (false){
    console.log("Isso sera Executado")
}else{
    console.log("Isso sera executado!!")
}

// Switch case

const fruta = "Maçã"

switch(fruta){
    case "Banana":
        console.log("Banana é a fruta!!")
        break

    case "Maçã":
        console.log("Maçã é a fruta!!")
        break

    case "Abacate":
        console.log("Abacate é a fruta!!")
        break

    default:
        console.log("Nao encontrei a fruta em nenhum dos casos")
}


// Estrutura de Repeticao (Laços De Repeticao - While. for)

// For(Para)

// contador, condicao de limite, incremento

for(let i = 0; i < 5; i++){
    console.log(`O valor de i é ${i}`)
}

// While(Enquanto)

let s = 0

while(s < 5){
    console.log(`O Valor De s é: ${s}`)
    s++
}


let j = 0

do{ // Fazer isso aq em baixo
    console.log(`O valor de j é de: ${j}`)
    j++
}while(j < 5) // Enquanto isso aq for Verdadeiro

// Funções

function comprimentar(){
    console.log("Olá!!!")
}

function bomDia(){
    console.log("Bom Dia!!!")
}

function boaTarde(){
    console.log("Boa Tarde!!!")
}

function boaNoite(){
    console.log("Boa noite!!!")
}

const horario = "Noite"

if(horario == "Dia"){
    bomDia()
}else if(horario == "Tarde"){
    boaTarde()
}else if(horario == "Noite"){
    boaNoite()
}

// Hosting = Içamento

    // É possivel chamar a funcao antes dela ser criada

testeHoisting()

function testeHoisting(){
    console.log("Deu Tudo Certo")
}

// Arrow Function

    // Function Como uma funcao mais resumida

const testeArrow = () => console.log("Isso Tambem é uma Função!!")

testeArrow()


// Truthy e Falsy

const minhaVariavel1 = "" // Falsy
const minhaVariavel2 = "Alguma coisa" // truthy

if (minhaVariavel1){
    console.log("é verdadeiro - 1")
}else{
    console.log("É falso!! - 1")
}

// ------------------------------

if(minhaVariavel2){
    console.log("É Verdadeiro - 2")
}else{
    consonle.log("É Falso - 2")
}


// Arrays (Listas)

const array = ['Elemento1','Elemento2','Elemento3','Elemento4']

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros)

// para chamar elementos expecificos, precisa colocar entre simbolos
console.log(numeros[0])
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

// Foi mostrado na tela um elemento de cada vez dessa forma

// Para adicionar um elemento na lista

    // NomeDaLista.push(elemento que eu quero Adicionar)

// ex:

numeros.push(11) // estou adicionando um elemento no fim da lista

console.log(numeros)

// paratirar um eemento da lista

    // nomeDaLista.pop (elemento que eu quero remover)

// Ex:

numeros.pop(11)
console.log(numeros)


//Strings

// Concatenacao

const minhaStringNova = "Olá Mundo!!"

const minhaStringNova2 = minhaStringNova + "Como Voce Esta?" //  Isso é uma concatenacao

console.log(minhaStringNova) // Sem Concatenacao
console.log(minhaStringNova2) // com Concatenacao

// Interpolacao (Mesma coisa de Concatenacao)

const minhaStringNova3 = `${minhaStringNova2} Como Voce Esta?`
console.log(minhaStringNova2)

// lenght (Contar  quatos caracteres tem dentro da variavel)

console.log(minhaStringNova3.length) // Conta quantos caracteres tem dentro da variavel
console.log(minhaStringNova3[5]) // para olhar um caracter expecifico

// toUpperCase (deixa a letra toda em mauscula)

console.log(minhaStringNova2.toUpperCase())

//toLowerCase (para deixar todas as letras minusculas)

console.log(minhaStringNova2.toLowerCase())


// Data e Hora

const agora = Date()
console.log(agora)

const natal = new Date(2023,11,25)
console.log(natal)


// math ( para operacoes matematicas)

console.log(Math.PI) // Mostra o valor de pi
console.log(Math.round(3.6)) // Arredonda o numero pra cima
console.log(Math.sqrt(16)) // Raiz Quadrada
console.log(Math.pow(2,3)) // Potencia



























































































