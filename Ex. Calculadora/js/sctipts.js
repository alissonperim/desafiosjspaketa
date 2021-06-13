let display = document.querySelector('.results')
let buttons = Array.from(document.querySelectorAll('.btn'))

buttons.map(button =>{
    button.addEventListener('click', (e) => {
        switch (e.target.innerText){
            case ('C'):
                display.value = ''
                break
            case ('←'):
                display.value = display.value.slice(0, -1)
                break
            case ('='):
                try{
                    var inputValue = eval(display.value.replace(',', '.'))
                    display.value = inputValue.toString().replace('.', ',')
                } catch{
                    display.value = "Erro!"
                }
                break
            default:
                display.value += e.target.innerText
        }
    })
})