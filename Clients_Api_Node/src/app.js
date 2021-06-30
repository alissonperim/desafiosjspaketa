const express = require("express")
const app = express()
const dataUser = require("./data-clients.json")

app.use(express.json())

app.get("/clients", function (req, res) {
    res.json(dataUser)
})
app.get("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = dataUser.find(d => d.id == id)
    if (!client) return res.status(204).json()
    res.json(client)
})
app.post("/clients", function (req, res) {
    const { name, email } = req.body


    //Lógica de salvar no db

    res.json({ name, email })
})
app.put("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = dataUser.find(d => d.id == id)

    if (!client) return res.status(204).json()

    const { name } = req.body

    client.name = name

    return res.json(client)
})
app.delete("/clients/:id", function (req, res) {
    const { id } = req.params
    const clients = dataUser.filter(d => d.id != id)

    if (!clients) return res.status(204).json()

    res.json(clients)
})

app.listen(3000, () => {
    console.log("Server is running")
})