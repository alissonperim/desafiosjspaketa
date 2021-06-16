//Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
//Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.

const weightedGrades = (n1, n2, n3) => {
    const average = (n1 * 2 + n2 * 3 + n3 * 5) / 10
    console.log(average)
}

weightedGrades(10, 7.5, 8)