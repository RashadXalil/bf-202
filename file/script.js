// // const inp = document.getElementById("inp")
// // const btn = document.getElementById("btn")
// // const area = document.getElementById("txtarea")
// // inp.addEventListener("change", function (e) {
// //     const reader = new FileReader()
// //     // reader.readAsDataURL(inp.files[0]) // true
// //     // reader.onload = function (e) {
// //     //     image.src = e.target.result
// //     // }
// //     // reader.readAsText(inp.files[0])
// //     // reader.onload = function(e){
// //     //     area.value = e.target.result
// //     // }
// //     console.log(inp.files)
// // })
// const image = document.getElementById("image")
// const yazi = document.getElementById("yazi")
// const inp = document.getElementById("inp")

// inp.addEventListener("change", function (e) {
//     const imageReader = new FileReader()
//     const textReader = new FileReader()
//     for (let i = 0; i < e.target.files.length; i++) {
//         console.log(e.target.files)
//         if (e.target.files[i].type == "image/jpeg") {
//             imageReader.readAsDataURL(e.target.files[i])
//             imageReader.onload = function (e) {
//                 image.src = e.target.result
//             }
//         }
//         else if (e.target.files[i].type == "text/plain") {
//             textReader.readAsText(e.target.files[i])
//             textReader.onload = function (e) {
//                 yazi.innerHTML = e.target.result
//             }
//         }
//         else {
//             alert("duzgun file daxil edin !")
//         }
//     }
// })
let counter = 1;
function click() {
    counter++
    if (counter > 2) {
        btn.removeEventListener("click", click)
    }
}
const btn = document.getElementById("btn")
btn.addEventListener("click", click)
