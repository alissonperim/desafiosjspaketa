let images = document.querySelectorAll('.img-author')
let textContainers = document.querySelectorAll('.cont-active')
let container = document.querySelector('.container')

const activeImage = () => {
    images.forEach(image => {
        image.classList.remove('active')
    })

    textContainers.forEach(txt => {
        txt.classList.remove('active')
    })

    let cont = container.classList.item(1)
    container.classList.remove(cont)
}

const activeBackground = (index) => {
    container.classList.add('color-ctn-'+index)
}

const activePanel = (index) => {
    textContainers.forEach(txt => {
        if (txt.getAttribute('value') === index.toString()){
            txt.classList.add('active')
        }
    })
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        activeImage()
        image.classList.add('active')
        activeBackground(index)
        activePanel(index)
        console.log(index)
    })
})
