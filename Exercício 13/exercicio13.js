//13. Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível de notas
//de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor lido e a relação
//de notas necessárias.


function bestChange(x){
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    
    console.log(`Você possui: ${x.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
    
    while((x / 100) >= 1){
        x -= 100
        nota100 += 1
    }

    while((x / 50) >= 1){
        x -= 50
        nota50 += 1
    }

    while((x / 10) >= 1){
        x -= 10
        nota10 += 1
    }

    while((x / 5) >= 1){
        x -= 5
        nota5 += 1
    }

    while((x / 1) >= 1){
        x -= 1
        nota1 += 1
    }  

    console.log(`Para chegar a esse valor você precisa de: ${nota100} nota(s) de 100 reais, ${nota50}
                nota(s) de 50 reais, ${nota10} nota(s) de 10 reais, ${nota5} nota(s) de 5 reais e ${nota1} nota(s) de 1 real.`)
}


bestChange(329)