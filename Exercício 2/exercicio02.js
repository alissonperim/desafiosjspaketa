//2. Receba um array de 10 números inteiros aleatórios de 1 a 100 e retorne qual é o maior número
//Exemplo: [1, 11, 3, 29, 44, 66, 7, 21, 20, 30]

function higherNumber(...arrayCheck)
{
    return Math.max(...arrayCheck)
}

let myArray = Array(10)

for (let i = 0; i < myArray.length; i++){
    myArray[i] = Math.floor(Math.random() * 100)
    console.log(myArray[i])
}

console.log(`O maior número do array é: ${higherNumber(...myArray)}`)