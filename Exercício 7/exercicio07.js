//7. Crie uma função que reteorne a maior string de um array

function returnStrInArray(){
    let strArr = ["Maçã", "Melão", "Pêra", "Banana", "Uva"]
    let strBigger

    for (let i = 0; i < strArr.length; i++){
        if(strArr[i].length > strArr[0].length){
            strBigger = strArr[i]
        }
    }
    console.log(strBigger)
}

returnStrInArray()