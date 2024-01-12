//queue no código

//passo 1: modelagem de dados
class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

//passo 2: utilização dos dados
const fila = new Queue()
fila.enqueue('Gustavo')
fila.enqueue("Maria")
fila.enqueue("Leo")

fila.dequeue()
fila.dequeue()
fila.dequeue()