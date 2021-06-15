//14  Escrever um algoritmo que lê:

//- a percentagem do IPI a ser acrescido no valor das peças
//- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
//- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
//O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
//Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

let LIST_PRODUCTS = [
    {
        name: "TV",
        code: "10001",
        price: 1050.15,
        amount: 5
    },
    {
        name: "Desktop",
        code: "10002",
        price: 2550.52,
        amount: 2
    }
]


function percentIPI(ipi){
    return ipi/100
}

function paymentValue(list, ipi){
    console.log(`Valor do IPI introduzido na nota: ${ipi}%`)
    let value = 0
    let finalValue = 0
    list.map(li => {
        value += (li.price * li.amount)
        finalValue = value + (value * percentIPI(ipi))
    })
    return console.log(`Valor total a ser pago: ${finalValue.toFixed(2).replace('.', ',')}`)
}

function product(products){
    const eachProduct = products.map(el => {
        console.log(`
            Nome do produto: ${el.name}
            Código do produto: ${el.code}
            Valor do produto: ${el.price.toString().replace('.', ',')}
        `)
    })
}

const init = () => {
    product(LIST_PRODUCTS)
    paymentValue(LIST_PRODUCTS, 20)
}

init()