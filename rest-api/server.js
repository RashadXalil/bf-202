const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())
const users = [
    {
        name: "rashad",
        password: "12345"
    },
    {
        name: "ulvi",
        password: "23457"
    }
]
app.get("/", (req, res) => {
    res.status(200).send(users)
})
app.post("/", (req, res) => {
    users.push(req.body)
    res.status(201).send(users)
})
app.delete("/:id", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})