console.log('Hello World JavaScript')  // Serve para depurar codigo ou para enviar avisos

//Console

console.error('Este é um erro') // Comunica um erro
console.warn('Este é um aviso') // comunica um aviso
console.log('Esta é uma mensagem') //coloca uma mensagem

//--------------------------------------------------------------------------------------------------

//Varieaveis

var x = 10 // pode reatribuir

//Maneiras mais modernas

let y = 10 //pode Redeclarar sómente em outro escopo
const z = 10 //Não pode redeclarar

//--------------------------------------------------------------------------------------------------

//Tipos de dados

const name = "Arthur" // Tipo String
console.log(name)
console.log(typeof name) //exibe o tipo dela


const shirtsQTY = 4 //Tipo Number
console.log(shirtsQTY)
console.log(typeof shirtsQTY) //exibe o tipo dela

const decimal = 12.4 //Tipo Number
console.log(decimal)
console.log(typeof decimal) //Exibe o tipo dela

const isApproved = false //Tipo Booleano (Verdadeiro e Falso)
console.log(isApproved)
console.log(typeof isApproved) //Exibe o tipo dela

const surname = null //Tipo Null/objeto
// (nesse ponto ainda n tem valor mas vai ter em breve)
console.log(surname) 
console.log(typeof surname) //Exibe o tipo dela

let age // Tipo Undefined (Não foi definido nenhum valor)
console.log(age)
console.log(typeof age)// Exibe o tipo dela

//--------------------------------------------------------------------------------------------------

//Array (Listas)

//é recomendado deixar cada lista com um tipo de dado unico
const languagens = ["JavaScript","PHP","Python"] // Isso é uma lista
console.log(languagens)
console.log(typeof languagens)

//--------------------------------------------------------------------------------------------------

// Objetos (Objetos literais)

// Um objeto é separado por (Nome, Propriedade, Valor)
const user = {email:'Arthur@gmail.com', password: 'Teste123', age: 30} // Objetos literais
console.log(user)
console.log(typeof user)

//--------------------------------------------------------------------------------------------------

//Metodos de String

const fullName = 'Arthur Brum'

console.log(fullName.length) // Conta quantos caracteres tem em uma String

console.log(fullName.toLowerCase()) // Deixa todo o texto em ccaixa auta

console.log(fullName.toUpperCase()) // Deixa todo o texto em caixa baixa

//--------------------------------------------------------------------------------------------------

const stringToArray = fullName.split(' ') //Separa uma String em lista

console.log(stringToArray)

//--------------------------------------------------------------------------------------------------

console.log(fullName.indexOf('Brum'))//encontrar uma palavra em uma lista(Elemento)
//paraprocurar tem q colocar como parametro a inicial ou o nome do elemento desejado

//--------------------------------------------------------------------------------------------------

console.log(fullName.slice(0, 7))// para fatiar/extrair/resgatar uma parte de uma string
//slice = fatiar

//--------------------------------------------------------------------------------------------------

// Metodos de Arrays

const list =  ['a','b','c','d','e'] //começam a contar de 0

console.log(list.length)//Extrair a quantidade de elementos que tem em uma lista

console.log(list[2])//Resgata o elemento expecifico pelo indice da lista

list[5] = 'f'//Adicionar um item ao indice que eu queria
//na lista o indice (o lugar) vai receber a letra 'f'


console.log(list.length - 1)//Como pegar o utimo elemento de uma lista

//--------------------------------------------------------------------------------------------------

//remove e adciona no fim da lista

//Adiciona um item no fim da lista
list.push('g')//adicionar um elemento a partir de um metodo
// metodos sao esses comandos após o . (.lengt .slice .split) entre outros

//Remove um item ao fim da lista
list.pop('g')//remover um item do fim da lista
// metodos sao esses comandos após o . (.lengt .slice .split) entre outros

//--------------------------------------------------------------------------------------------------

//remove e adciona no começo da lista

//Remove um item do começo da lista
list.shift() //Remove o primeiro item da lista
// metodos sao esses comandos após o . (.lengt .slice .split) entre outros


//Adiciona um item do começo da lista
list.unshift() //Adiciona o primeiro item da lista
// metodos sao esses comandos após o . (.lengt .slice .split) entre outros

//--------------------------------------------------------------------------------------------------

//Objetos (objetos literais)

const product = {
    name: 'camisa',
    price: 15.99,
    inStrock: true,
    size: ['p','m','g'],
    'main color': 'blue'
}

console.log(product.name)
console.log(product['name']) //vai dar erro

console.log(product['main color']) //vai dar certo
//esse tipo de busca serve pra quando o elemento estiver dentro de ' '


//destructuring

    //serve tanto pra arrays quanto pra objetos

    //consegue estrair variaveis por meio de objetos

const {price, inStock} =  product

console.log(price)
console.log(inStock)

//-----------------------------------

const [n1,n2] = list

console.log(n1) 
console.log(n2)


//-------------------------------------------------------------------------------

//Json - javaScript Object Notation

    //comunicacao entre api´s
    //Quando voce desenvolve uma aplicacao que se comunica com uma api, é com json que voce se comunica com a api
    // api = é um intermedio entre uma aplicacao grande e eu (desenvolvedor)

    // para criar um json, tem q criar um objeto normal

const dog = { //objeto
    name: 'Shark',
    age: 10
}

    //Um Objeto pode virar um json

const json = JSON.stringify(dog) // transformando um objeto em json - para enviar

console.log(json)

    //quando vai pra api tem q converter
    //quando volta tambem tem q converter

const obj = JSON.parce(json) // transformar novamente pra receber - para receber

    // para enviar - JSON.stringify
    // para receber - JSON.parce

console.log(obj)

//-------------------------------------------------------------------------------------------------

const jsonerrado = '{"nome":"teste","surname": "testando"}' //precisa ter aspas e n pode ter virgula se n for acrescentar mais nada

const obj2 = JSON.parce(jsonerrado) // transformar novamente pra receber - para receber

    // para enviar - JSON.stringify
    // para receber - JSON.parce

console.log(obj2)

//-------------------------------------------------------------------------------------------------


// Estruturas condicionais

    // < - Menor
    // > - Maior
    // >= - maior igual
    // <= - Menor igual
    // != - Diferente

const a = 10

if(a > 8) { //se isso for verdadeira (if = se)
    console.log('A é maior que 8')
}


const b = 'Arthur'

if (b === 'joao') {
    // === - teste de identidade (mehor validacao)

} else if (b === 'pedro'){
    console.log('O nome é pedro')

} else if(b==='Gustavo'){
    console.log('O nome é Gustavo')
}
else{
    console.log('nao encontramos nenhum nome')
}

// if Ternario - um if que pode ser feita em uma linha só


















































































































