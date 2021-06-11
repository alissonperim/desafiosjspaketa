//10. Crie uma função que receba dois números inteiros positivos e retorne qual é o resto da divisão

function sumPositiveNumber(numA, numB){
    numA < 0 || numB < 0  || numA % 1 !== 0 || numB % 1 !== 0 ?
    console.log("Os números devem ser positivos e inteiros!") :
    console.log(`${numA} + ${numB} = ${numA + numB}`)
}

sumPositiveNumber(10, 30)