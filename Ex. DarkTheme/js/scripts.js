let checkbox = document.querySelector('#chk')

const changeCheckBoxStatus = () => {
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark')
    })
}

changeCheckBoxStatus()