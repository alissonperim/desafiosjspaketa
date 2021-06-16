let textArea = document.querySelector('#textarea')
let sugestionBlock = document.querySelector('.suggestion-block')

const textAreaEnter = () => {
    textArea.addEventListener('keydown', (e) => {
        console.log(e.key)
        if(e.key === 'Enter'){
            sugestionBlock += `
            <div class="vote-container">
            <button class="btn-count">
                <i class="fas fa-chevron-up"></i>
            </button>
            <p class="count-votes">
                <span class="count-numbers">0</span>
                votes
            </p>
            </div>
            <div class="suggestions">
                <strong class="suggestions--strong">${e.value}</strong>
            </div>
            `
        }   
    })
}

textAreaEnter()