const num = [1.5,2,3,4.5,5.5,6,7.5,8,9.5,10]

const dobro = num.map(num => num*2);
console.log("Array de valores dobrados gerada: ", dobro);

const pares = dobro.filter(num => num % 2 === 0);
console.log("Array de valores pares gerada: ", pares);

const soma = pares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Array de valores somados gerada: ", soma);