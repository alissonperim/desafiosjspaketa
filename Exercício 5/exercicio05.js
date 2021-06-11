//5. Soma dos números de 1 a 10

function sum(){
    let x = 1
    let sumValue = 0
    while(x < 11){
        console.log(`${sumValue} + ${x} = ${sumValue += x}`)
        x++
    }
}

sum()