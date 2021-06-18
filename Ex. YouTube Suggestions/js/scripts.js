let textArea = document.querySelector('#txtarea')
let container = document.querySelector('.container')
let sugestionContainer = document.querySelector('.suggestion-container')
let suggestionsCount = document.querySelector('.suggestions-count--strong')
let suggestionsBlock = document.querySelectorAll('.suggestion-block')
let btnVote = document.querySelectorAll('.btn-count')


let newSuggestion
let allSuggestions = []

const textAreaEnter = () => {
    let count = 1
    textArea.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            let txtAreaValue = document.querySelector("#txtarea").value
            e.preventDefault()
            newSuggestion = `
            <div id="suggestion-block" class="suggestion-block">
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
                    <strong class="suggestions--strong">${txtAreaValue}</strong>
                </div>
            </div>
            `
            allSuggestions = [...allSuggestions, newSuggestion]

            count++
            suggestionsCount.innerText = count
            sugestionContainer.innerHTML += newSuggestion
            document.querySelector("#txtarea").value = ""
        }
    })
}

const setVote = () => {
    container.addEventListener('click', (e) => {
        const btn = e.path.find(el => el.classList && el.classList.contains('btn-count'))
        console.log("listener container")
        if(btn){
            const block = e.path.find(el => el.classList && el.classList.contains('suggestion-block'))
            console.log("event btn")
            if(btn.classList.contains('voted')){
                btn.classList.remove('voted')
                unvote(block)
            }else{
                btn.classList.add('voted')
                vote(block)
            }
        }
    })
}

const vote = (el) => {
    let vBtn = el.querySelector('.count-numbers')
    vBtn.innerText = +vBtn.innerText + 1
}

const unvote = (el) => {
    let vBtn = el.querySelector('.count-numbers')
    vBtn.innerText = +vBtn.innerText - 1
}

const init = () => {
    textAreaEnter()
    setVote()
}

init()