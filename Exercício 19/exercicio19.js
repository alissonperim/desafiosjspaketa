//19. Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica
//expressa em segundos e mostre-o expresso em horas, minutos e segundos.

const eventTime = (seconds) => {
    const hour = Math.floor(seconds/3600)
    const minuts = Math.floor((seconds - (3600 * hour)) / 60)
    const second = Math.floor((seconds - (3600 * hour)) % 60)
    console.log(`O evento durou: ${hour}:${minuts}:${second}s`)
}

eventTime(4525)