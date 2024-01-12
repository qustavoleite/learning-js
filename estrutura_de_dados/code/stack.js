//stack no código

//passo 1: modelagem do dado
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

//passo 2: utilização do dado
const stack = new Stack()

//adicionar dados
stack.push("learning")
stack.push("data")
console.log(stack.push("structures"))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())