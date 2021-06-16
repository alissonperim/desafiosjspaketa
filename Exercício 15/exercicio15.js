//15 O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos de indústrias que
//são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25. Se o
//índice sobe para 0,3 as indústrias do 1o grupo são intimadas a suspenderem suas atividades, se o índice
//cresce para 0,4 as do 1o e 2o grupo são intimadas a suspenderem suas atividades e se o índice atingir 0,5
//todos os 3 grupos devem ser notificados a paralisarem suas atividades. Escrever um algoritmo que lê
//o índice de poluição medido e emite a notificação adequada aos diferentes grupos de empresas.


const measurePoluition = (totalMeasure) => {
    if(totalMeasure <= 0.25){
        console.log("Índices dentro da normalidade")
    }else if(totalMeasure > 0.25 || totalMeasure < 0.4){
        console.log("Intimação enviada ao grupo 1!")
    }else if(totalMeasure >= 0.4 || totalMeasure < 0.5){
        console.log("Intimação enviada aos grupos 1 e 2!")
    }else{
        console.log("Intimação enviado a todos os grupos!")
    }
}

measurePoluition(0.5)