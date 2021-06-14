(() => {
    let searchInput = document.querySelector('#search')
    const usersContainer = document.querySelector('#users-container')

    let usersList = [
        {
            Name: 'Alisson Perim Honostorio',
            Location: 'Goiânia-GO',
            Avatar: 'https://picsum.photos/80/?random=1'
        },
        {
            Name: 'Maria Eduarda',
            Location: 'Goiânia-GO',
            Avatar: 'https://picsum.photos/80/?random=2'
        },
        {
            Name: 'Laura Rodrigues',
            Location: 'Goiânia-GO',
            Avatar: 'https://picsum.photos/80/?random=3'
        },
        {
            Name: 'Vanda Franco Honostorio',
            Location: 'Silvânia-GO',
            Avatar: 'https://picsum.photos/80/?random=4'
        },
        {
            Name: 'Alcir Pereira Honostorio',
            Location: 'Corumbá-GO',
            Avatar: 'https://picsum.photos/80/?random=5'
        }
    ]

    const createUsersContainer = (list) => {
        let addUsers = ""

        if(list.length === 0){
            usersContainer.innerHTML = '<p class="empty-msg">Nenhum usuário encontrado!</p>'
            return
        }

        list.forEach(user => {
            addUsers += `
                <div class="users">
                    <img src="${user.Avatar}" alt="user-image" class="user-image">
                    <div class="user-data">
                        <h2 class="users-container--h2">${user.Name}</h2>
                        <p class="users-container--p">${user.Location}</p>
                    </div>
                </div>
            `
        })
        
        usersContainer.innerHTML = addUsers
    }

    const filterUsers = (e) => {
        const newList = usersList.filter((user) => {
            return  user.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    user.Location.toLowerCase().includes(e.target.value.toLowerCase())
        })
        createUsersContainer(newList)
    }
    searchInput.addEventListener('input', filterUsers)

    createUsersContainer(usersList)

})()