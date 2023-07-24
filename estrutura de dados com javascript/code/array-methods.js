//array no código

const pilotos = ['Senna', 'Prost', 'Schumancher', 'Hamilton']

//mostrar elemento pelo índice
console.log(pilotos[1])

//acessar o tamanho do array
console.log(pilotos.length)

//podem ser iterável e iteráveis são objetos que permitem o acesso aos seus elementos um a um.
for (let piloto of pilotos) {
    console.log(piloto)
}

//adicionar elementos
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)
