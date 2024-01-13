let A = 3.0 
let B = 4.0
let C = 5.2
const pi = 3.14159

let trianguloRetangulo = (A * C) / 2
let circulo = pi * Math.pow(C, 2)
let trapezio = (A + B) * C / 2
let quadrado = B * B
let retangulo = A * B

console.log("TRIANGULO: " + trianguloRetangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))