let arrT = Array(10000)

function sumArray(arg){
    let Add = 0
    for (let i = 0; i < arg.length; i++){
        arg[i] = Math.floor(Math.random() * 200)
        Add += arg[i]
    }
    console.log(Add)
}

sumArray(arrT)