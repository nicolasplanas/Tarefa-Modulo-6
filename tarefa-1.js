let num = [1,2,3,4,5,6,7,8]
let inicio = [0]
let fim = [9]
let meio = 4.5
let numCopy = num

console.log("Antes: ", num);

const resultado = inicio.concat(num, fim);

console.log("Depois: ", resultado);

resultado.shift();
resultado.pop();

console.log("Valores removidos: ", resultado);

num.splice(4, 0, meio);

console.log("Valor adicionado no meio: ", num);

console.log("Array num copiado para o array numCopy: ", numCopy)