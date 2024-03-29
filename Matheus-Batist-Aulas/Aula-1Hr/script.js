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

// VARIAVEL = TESTE LOGICO ? VERDADEIRO : FALSO

let testingANumber = someNumber < 20 ? 'yes': 'no' // o Resultado do teste logico vai ser atribuido a variavel

console.log(testingANumber)


// Estruturas de repeticao (Loop)

const mylist = [1,2,3,4,5]

let counter = 0

while(counter < mylist.length ){ //length = contar
    console.log('Imprimindo' + mylist[counter])
    // Enquanto counter for menor que o valor de (mylist)
    counter++ // counter = counter + 1
    
}


const mysecondlist = ['a','b','c','d','e']

for (let counter = 0; counter < mysecondlist.length; counter++ ){
    console.log(`Imprimindo ${mysecondlist[counter]}`)
}


// metodos de arrays -> Repeticao

//forEach

const names = [ "Arthur","Matheus","Felipe","Ygor"]

names.forEach(function(names){
    console.log(`O nome é: ${name}`)
}) //consegue exibir todos os itens em funcao anonima.




// metodo - map (serve para modificar alguma coisa, normamente alguma lista)

const modifiedNames = names.map(function(name){
    if(name === 'Arthur'){
        return name = 'Sr.Arthur' //o nome que era apenas 'Arthur' Agora é 'Sr.Arthur'
    } else{
        return name
    }
})


console.log(modifiedNames)


//Filter - Filtro (voce cria um filtro apenas para trazer os elementos que eu quero atraves do return)

const bigNumbers = [1,2,3,4,5,20,30].filter(function(number){
    return number >= 5
})

console.log(bigNumbers)


// reduce  - reduzir (consegue reduzir uma lista a um elemento só)
// reduz o elemento e torna um só

const sumAll = [10,20,30,40,50].reduce(function(total,number){
    return total + number
})

console.log(sumAll)

// Funcao ( a gente cria um bloco de codigo que pode ser reultilizado(reciclado) em qualquer parte do codigo)

function minhaFuncao(){
    console.log('Olá, Funcao!')
}

minhaFuncao() // Chamou a funcao
minhaFuncao()
minhaFuncao()
minhaFuncao()
minhaFuncao()
minhaFuncao()

// Sempre que o codigo for se repetir, é recomendavel colocar em funcao

function nomeCompleto(nome,sobrenome){
    return `O nome completo é: ${nome} ${sobrenome}`
    // Se for um console.log ele imprime
    // Se for uma variavel ele armazena
}

console.log(nomeCompleto('Arthur','Brum'))
console.log(nomeCompleto('Joao', 'Azevedo'))

    //Argumentos - Parametros de funcoes

    // function nomeCompleto(nome,sobrenome){
    //     console.log(`O nome completo é: ${nome} ${sobrenome}`) 
    // }

    // nomeCompleto('Arthur','Brum')
    // nomeCompleto('Joao', 'Azevedo')


const meuNomeCompleto = nomeCompleto('Maria','Matos')

console.log(meuNomeCompleto)

//-------------------------------------------------

// const primeiroNome = 'Maria'
// const segundoNome = 'Matos'

// const nomeCompleto_2 = meuNomeCompleto_2 (primeiroNome, segundoNome)

// console.log(meuNomeCompleto_2)

//--------------------------------------------------


// Arrow functions (sintaxe um pouco mais resumida)


// Arroz function != function

const myArrowFunction = (a,b) => {
    return a + b
} //Uma variavel para armazenar variavel

console.log(myArrowFunction(2,5))

const mySimpleArrowFunction = (a + b) => a + b // Quando tudo se resolve em uma linha nao precisa de chaves.

console.log(mySimpleArrowFunction)


// Classes (Tambem onde se ve orientacao a objeto)

class Product{

    // metodo constructor
    constructor(name, price){
        this.name
        this.price
    }

    productDetails(){
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    }
}

// Criando uma nova Instacia

const socks = new Product('Meia Branca', 10.99)
const shirt = new Product('Camisa Preta', 15.99)

console.log(socks.name)
console.log(socks.price)

console.log(shirt.name)
console.log(shirt.productDetails(''))


// Heranca (Onde se EStende a Classe)

class superProduct extends Product{
    constructor(name,price,size){
        super(name, price)
        this.size = size
    }

    showAdjective(adjective){
        return `O ${this.name} é muito ${adjective}`
    }

    // Static 

    sayHello(){
        console.log('Hello')
    }
}

const tenis = new superProduct('Tenis Vermelho',59.90,'42')

console.log(tenis.name)
console.log(tenis.size)
console.log(tenis.showAdjective('Bom'))



superProduct.sayHello()



// Dom (Document Objetct Model) - Ferramenta para adicionar eventos e modificacoes ao html e css atraves do js

    // Como selecionar um elemento por Dom
    // Query Selector


// Selecao de elementos

const title = document.getElementById('title') //#title

console.log(title)


// Query Selector

    //Ao inves de seecionar byId ou ByClass
    // Basta colocar o querrySelector e se for:
        // id = # 
        // Class = .
const sameTitle = document.querySelector("#title") 

console.log(sameTitle)

const text = document.querySelectorAll('.text')

console.log(text)
console.log(text[1])

text.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})


// manipulacao de elementos

title.textContent = 'Mudei o Texto'

text[0].innerHTML = '<span>Alteramos o HTML Desse Elemento</span>'

text[1].style.backgroundColor = 'red' //background-color: red

text[2].classList.add('My-Class')

text[2].classList.remove('text')

text[3].remove()


// Eventos

const btn = document.querySelector("#bnt")

btn.addEventListener("click",function(){
    console.log('Clicou!')
})

btn.addEventListener("click",function(){
    console.log('Clicou!')
    text[2].style.color = 'blue'
})















































 




















































































































































