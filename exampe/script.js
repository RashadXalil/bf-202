const tBody = document.getElementById("tbody")
const addBtn = document.getElementById("addBtn")
const firstNameInp = document.getElementById("firstname")
const lastNameInp = document.getElementById("lastname")
const ageInp = document.getElementById("age")
const genderInp = document.querySelectorAll('input[name="gender"]') // array
let users = []
let id = 0;

class User {
    constructor(firstname, lastname, age, gender) {
        this.id = id,
            this.firstname = firstname,
            this.lastname = lastname,
            this.age = age,
            this.gender = gender,
            id++
    }
}
function addUser(firstname, lastname, age, gender) {
    let newUser = new User(firstname, lastname, age, gender)
    users.push(newUser)
    renderUI(users)
}
function renderUI(array) {
    let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const { id, firstname, lastname, age, gender } = array[i]
        innerHTML += `
        <tr>
        <th scope="row">${id}</th>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${age}</td>
        <td>${gender}</td>
      </tr>`
    }
    tBody.innerHTML = innerHTML
}
addBtn.onclick = function (e) {
    e.preventDefault()
    let firstNameValue = firstNameInp.value
    let lastNameValue = lastNameInp.value
    let ageValue = ageInp.value
    let genderValue = ""
    for (let index = 0; index < genderInp.length; index++) {
        if (genderInp[index].checked == true) {
            genderValue = genderInp[index].value
        }
    }
    addUser(firstNameValue, lastNameValue, ageValue, genderValue)
    firstNameInp.value = ""
    lastNameInp.value = ""
    ageInp.value = ""
    for (let i = 0; i < genderInp.length; i++) {
        genderInp[i].checked = false
    }
}
