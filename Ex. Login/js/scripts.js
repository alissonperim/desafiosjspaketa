let fieldEmail = document.querySelector('#email')
let fieldPW = document.querySelector('#password')
let btnSubmit = document.querySelector('#btn-submit')


const submit = () => {
    btnSubmit.addEventListener('click', () => {
        alert(`Seu email é: ${fieldEmail.value}\nSua senha é: ${fieldPW.value}`)
    })
}

const checkField = () => {
    fieldEmail.addEventListener('input', () =>{
        fieldPW.addEventListener('input', () => {
            if(fieldEmail.value.length > 3 && fieldPW.value.length > 3){
                btnSubmit.disabled = false
                btnSubmit.classList.remove('disabled')
                btnSubmit.classList.add('able')
                submit()
            }
        })
    })
}


checkField()