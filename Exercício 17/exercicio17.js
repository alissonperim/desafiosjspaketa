//17 Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias

const readAge = (days) => {
    const amountOfYears = Math.floor(days / 365)
    const amountOfMonths = Math.floor((days - (365 * amountOfYears)) / 31)
    const amountOfDays = Math.floor((days - (365 * amountOfYears)) % 31)
    
    console.log(`Sua idade expressa em anos, meses e dias é: ${amountOfYears} ano(s), ${amountOfMonths} mes(es) e ${amountOfDays} dia(s).`)
}

readAge(10478)