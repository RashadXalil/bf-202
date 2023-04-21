const text = document.getElementById("text")
let date = new Date()
// text.innerHTML = `${date.getDay()}/${date.getMonth() + 1 < 9 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
text.innerHTML = date.toDateString()