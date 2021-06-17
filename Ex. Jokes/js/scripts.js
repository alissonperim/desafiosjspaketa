const btnChange = document.querySelector('.btn-change')

const JOKES = [
    {
        joke: [
            "How do you steal a coat? You jacket.",
            "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
            "A ghost walks into a bar and asks for a glass of vodka but the bar tender says, 'sorry we don’t serve spirits'",
            "Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.",
            "I got fired from a florist, apparently I took too many leaves.",
            "What is a tornado's favorite game to play? Twister!",
            "You will never guess what Elsa did to the balloon. She let it go.",
            "It’s hard to explain puns to kleptomaniacs, because they take everything literally.",
            "What do you call an alligator in a vest? An in-vest-igator!",
            "What did the late tomato say to the early tomato? I’ll ketch up",
            "What did one wall say to the other wall? I'll meet you at the corner!",
            "I tried taking some high resolution photos of local farmland, but they all turned out a bit grainy.",
            "What did the mountain climber name his son? Cliff.",
            "Why didn’t the orange win the race? It ran out of juice.",
            "Every night at 11:11, I make a wish that someone will come fix my broken clock.",
            "Why don’t seagulls fly over the bay? Because then they’d be bay-gulls!",
            "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
            "It doesn't matter how much you push the envelope. It will still be stationary.",
            "Why is Peter Pan always flying? Because he Neverlands."
        ]
    }
]

const changeJoke = (jokesList) => {
    btnChange.addEventListener('click', () => {
        jokesList.map(jokes => {
            let sortNumber = Math.floor((Math.random() * 19))
            console.log(sortNumber)
            document.querySelector('.container--p').innerText = jokes.joke[sortNumber]
        })
    })
}

changeJoke(JOKES)