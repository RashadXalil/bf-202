const express = require("express")
const app = express()
const cors = require("cors")
const { v4: uuid } = require("uuid")
app.use(cors())
app.use(express.json())
const todos = [{
    id: uuid(),
    title: "todo1"
},
{
    id: uuid(),
    title: "todo2"
},
{
    id: uuid(),
    title: "todo3"
}, {
    id: uuid(),
    title: "todo4"
}, {
    id: uuid(),
    title: "todo5"
},
]
const users = [{
    id: uuid(),
    name: "lorem",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
}]
//todos

app.get("/todos", (req, res) => {
    res.send(todos)
})
app.get("/todos/:id", (req, res) => {
    let { id } = req.params
    let target = todos.find(todo => todo.id == id)
    res.send(target)
})
app.post("/todos", (req, res) => {
    todos.push(req.body)
})
app.delete("/todos/:id", (req, res) => {
    let { id } = req.params
    let target = todos.find(todo => todo.id == id)
    let indexOfTarget = todos.indexOf(target)
    todos.splice(indexOfTarget, 1)
    res.send(todos)
})

//users

app.get("/users", (req, res) => {
    res.send(users)
})
app.get("/users/:id", (req, res) => {
    let { id } = req.params
    let target = users.find(user => user.id == id)
    res.status(200).send(target)
})
app.delete("/users/:id", (req, res) => {
    let { id } = req.params
    let target = users.find(user => user.id == id)
    let indexOfTarget = users.indexOf(target)
    users.splice(indexOfTarget, 1)
    res.send(`user silindi id:${id}`)
})
app.post("/users", (req, res) => {
    users.push({ id: uuid(), ...req.body })
    res.send(users)
})
app.listen(8080, () => {
    console.log("server running on 8080")
})