let containerQuestion = document.querySelectorAll('.container-question')
let openContainer = document.querySelectorAll('.btn-toggle')

const openContainerQuestion = () => {
    openContainer.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            containerQuestion[index].classList.toggle('active')
        })
    })
}

openContainerQuestion(openContainer)