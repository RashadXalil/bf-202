const todoListEl = document.getElementById("todo__list")
let todos = [{
    title: "todo 1",
    description: "lorem"
}, {
    title: "todo 2",
    description: "lorem"
}, {
    title: "todo 3",
    description: "lorem"
}, ]

function todoList() {
    let todoItems = ""
    setTimeout(() => {
        todos.forEach(item => {
            todoItems += `
            <li>${item.title} ${item.description}</li>
            `
        })
        todoListEl.innerHTML = todoItems
    }, 1000);
}

function newTodo(todo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error) {
                resolve({
                    statusCode: 200,
                    data: todos,
                    statusText: "OK"
                }) // error yoxdursa
            } else {
                reject({
                    errorCode: 403,
                    errorText: "Item yaradilmadi"
                })
            }
            todos.push(todo)

        }, 2000);
    })
}
// newTodo({
//     title: "todo 4",
//     description: "lorem"
// }).then(res => {
//     console.log("response", res)
// })
let newwTodo = {
    title: "todo 4",
    description: "lorem"
}
newTodo(newwTodo).then(res => {
    console.log(res)
})
todoList()


// const response = fetch("https://northwind.vercel.app/api/products").then(res => res.json()).then(data => {
//     let html = ""
//     for (let i = 0; i < data.length; i++) {
//         html += `
//         <li>${data[i].name}</li>
//         `
//     }
//     todoListEl.innerHTML = html
// })
// axios
// axios.get("https://northwind.vercel.app/api/products").then(res => {
//     let html = ""
//     for (let i = 0; i < res.data.length; i++) {
//         html += `
//         <li>${res.data[i].name}</li>
//         `
//     }
//     todoListEl.innerHTML = html
// })
// const wrapper = document.getElementById("wrapper")
// axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
//     console.log(res)
//     let html = ""
//     for (let i = 0; i < res.data.length; i++) {
//         const {
//             userId,
//             id,
//             title,
//             body
//         } = res.data[i]
//         html += `
//         <tr>
//         <th scope="row">${userId}</th>
//         <td>${id}</td>
//         <td>${title}</td>
//         <td>${body}</td>
//       </tr>
//         `


//     }
//     wrapper.innerHTML = html
// })