let articleContainer = document.querySelector('.article-container')
let page = 1
let itensPerPage = 5
const loading = document.querySelector('.loading')

const COMMENTS_LIST = [
    {
        img: "https://picsum.photos/200/300?random=1",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=2",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=3",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=4",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=5",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=6",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=7",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=8",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=9",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=4",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=10",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=11",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=4",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=12",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=13",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=14",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=15",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=16",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=17",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=18",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=19",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=20",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=21",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=22",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=23",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=24",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=25",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=26",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    },
    {
        img: "https://picsum.photos/200/300?random=27",
        title: "Lorem, ipsum dolor.",
        date: "31/12/2020",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus aliquid doloremque nihil quaerat, deserunt
        repellendus a officia distinctio. Commodi dolorem iure
        blanditiis in at animi quae perspiciatis praesentium eius
        est non molestiae quo labore maiores dolorum quam
        sequi, et numquam.`
    }
]

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    console.log({scrollTop, scrollHeight, clientHeight})
    if(scrollTop + clientHeight >= scrollHeight){
        showLoading()
    }
})

const getListData = (list) => {
    let post = ""
    list.forEach(listData => {
        post += `
        <div class="article-container-row">
            <div class="article-container--img">
                <img src=${listData.img} alt="Lorem Picsum" class="article--img">
            </div>
            <div class="article-comments">
                <h2 class="article-comments-h2">${listData.title}</h2>
                <p class="article-comments-date--p">${listData.date}</p>
                <p class="article-comments-comment-p">
                    ${listData.comment}
                </p>
            </div>
        </div>
        `
    })
    articleContainer.innerHTML = post
    loading.classList.remove('show')

}

function showLoading(){
    loading.classList.add('show')
    setTimeout(getMoreComments, 1000)
    
}

function getMoreComments(){
    let NEWLIST = []
    if (NEWLIST.length === COMMENTS_LIST.length){
        return
    }
    let quantity = page * itensPerPage > COMMENTS_LIST.length ? COMMENTS_LIST.length : page * itensPerPage
    page++
    NEWLIST = COMMENTS_LIST.slice(0, quantity)
    getListData(NEWLIST)
}