//12 - Tendo como dados de entrada a altura e o sexo de uma pessoa (?M? masculino e ?F? feminino),
//construa um algoritmo que calcule seu peso ideal,utilizando as seguintes fórmulas:

const idealWeight = (gender, heigth) => {
    switch(gender.toLowerCase()){
        case 'm':
            console.log(`O peso ideal para homens de altura: ${heigth.toFixed(2)} é: ${((72.7 * heigth) - 58).toFixed(2)}`)
            break
        case 'f':
            console.log(`O peso ideal para mulheres de altura: ${heigth.toFixed(2)} é: ${((62.1 * heigth) - 44.7).toFixed(2)}`)
            break
        default:
            return
    }
}

idealWeight('m', 1.88)

idealWeight('F', 1.60)