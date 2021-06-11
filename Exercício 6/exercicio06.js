//6. Criar uma função que converta uma temperatura de Celsius para Fahrenheit

function tempConversor(celsiumDegrees){
    let f = celsiumDegrees * 1.8 + 32
    console.log(`A temperatura ${celsiumDegrees}°C em Fahrenheit é: ${f.toFixed(1)}°F`)
}

tempConversor(30)