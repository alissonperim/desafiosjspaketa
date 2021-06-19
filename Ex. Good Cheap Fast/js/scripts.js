const checkbox = document.querySelectorAll('.chk')
const label = document.querySelectorAll('.label')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

const check = () => {
    checkbox.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            tryCheck(e.target)
        })
    })
}

const tryCheck = (clickedOne) => {
    if(good.checked && cheap.checked && fast.checked){
        if(good === clickedOne){
            fast.checked = false
        }

        if(fast === clickedOne){
            cheap.checked = false
        }

        if(cheap === clickedOne){
            good.checked = false
        }
    }
}

check()