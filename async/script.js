// let a = 12;
// let b = 3;

// function multiple(a, b) {
//     return a * b
// }
// function a(5)(6)(7)(8)

// function a(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
// console.log(a(1)(2)(3))

// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

// function outerFunction() {
//     let counter = 0

//     function plus() {
//         counter++
//         return counter
//     }

//     function minus() {
//         counter--
//         return counter
//     }
//     return {
//         plus,
//         minus
//     }

// }
// const innerFunc = outerFunction()
// console.log(innerFunc.plus())
// console.log(innerFunc.plus())
// console.log(innerFunc.plus())
// console.log(innerFunc.minus())

// setTimeout(() => {
//     console.log("salam")
// }, 2000);
let counter = 0
let seconds = 0;
let minutes = 0;
let hours = 0;
// const seconds = document.getElementById("seconds")
let watchTimer = setInterval(timer, 1000);

function timer() {
    counter++
    seconds.innerHTML = counter
}

// clearInterval(watchTimer)

document.getElementById("stop").onclick = function () {
    clearInterval(watchTimer)
}
let timeOut = setTimeout(timer, 1000);
clearTimeout(timeOut)

// console.log("outer")