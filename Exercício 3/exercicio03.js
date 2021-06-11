//3. Crie uma uma função que receba as seguintes listas a = [0, 3, 99, 44, -1] b = [4, 6, 9, 10, -349]
//c = [1, 1, 1, 99, 37] e que retorne uma lista chamada d contendo todos os elementos
//das 3 listas em ordem decrescente.


function returnD(){
    let a = [0, 3, 99, 44, -1]
    let b = [4, 6, 9, 10, -349]
    let c = [1, 1, 1, 99, 37]
    let d = a.concat(b, c)

    return console.log(d.sort((sortA, sortB) => sortB - sortA))

}

returnD()

//Dúvida: como eu faria a função, para que ela recebesse como parâmetro uma quantidade n de arrays e fizesse o mesmo
//que foi feito nesse exercício, pegando cada array que foi passado, concatenando e depois ordenando?