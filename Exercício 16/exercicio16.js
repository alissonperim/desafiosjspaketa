//16. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.

const convertDateToDays = (fullDate) => {

    let completDate = new Date(fullDate)
    let dateTimeNow = new Date()

    let timeInMS = Math.abs(completDate - dateTimeNow)
    const day = 24 * 60 * 60 * 1000
    console.log(`TICKS: ${timeInMS}`)
    const totalDays = timeInMS/day
    console.log(Math.floor(totalDays))
}

convertDateToDays('1992-10-08')