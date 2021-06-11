//9. Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado

function isPresent(strDota){
    console.log(strDota.includes("dota") ? `A string ${strDota} possui dota na palavra.`
                                         : `A string ${strDota} não possui dota na palavra`)
}

isPresent("chadota")