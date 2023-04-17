const flowers = [];
const basketItems = [];
let id = 0;
let basketItemId = 0;
const cardsWrapper = document.getElementsByClassName("wrapper___vitrine___wrap___bottom")[0]
const addFlowerBtn = document.getElementById("customAddBtn")
const basketWrapper = document.getElementById("cartDrop")
const basketCounter = document.getElementById("basketCounter")
class Flower {
    constructor(name, price, image) {
        this.id = id,
            this.name = name,
            this.price = price,
            this.image = image,
            id++
    }
}
function addFlower(name, price, image) {
    let newFlower = new Flower(name, price, image)
    flowers.push(newFlower)
    renderUI(flowers)
}
function renderUI(array) {
    let innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const { id, name, price, image } = array[i]
        innerHTML += ` <div class="wrapper___vitrine___wrap___bottom-item">
    <img src="${image}" alt="">
    <p>${name}</p>
    <button id="addBtn" onclick="addToBasket(${id})">$${price}</button>
    <button id="deleteFlowerBtn" onclick="deleteFlower(${id})">Delete</button>
</div>`
    }
    cardsWrapper.innerHTML = innerHTML
}
function deleteFlower(id) {
    let target = flowers.find(flower => flower.id == id)
    let indexOfTarget = flowers.indexOf(target)
    flowers.splice(indexOfTarget, 1)
    renderUI(flowers)
}
addFlowerBtn.onclick = function () {
    let flowerName = prompt("Name:")
    let flowerPrice = prompt("Price:")
    let flowerImage = prompt("Image:")
    if(flowerName=="" || flowerPrice=="" ||flowerImage==""){
        alert("inputlar bos qala bilmez")
        return
    }
    addFlower(flowerName, flowerPrice, flowerImage);
}
function addToBasket(id) {
    let targetFlower = flowers.find(flower => flower.id == id)
    let basketFlower = basketItems.find(basketItem => basketItem.flower.id == targetFlower.id)
    console.log(basketFlower)
    if (typeof basketFlower == "undefined") {
        basketItems.push({
            id: basketItemId,
            flower: targetFlower,
            count: 1
        })
        basketItemId++
    }
    else {
        basketFlower.count++
    }
    basketCounter.innerHTML++
    console.log(basketItems)
    renderBasket(basketItems)
}
function renderBasket(array) {
    let innerHTML = ""

    for (let i = 0; i < array.length; i++) {
        const { id, name, price, image } = array[i].flower

        innerHTML += ` <li class="cart-dropdown-list-item item1">
        <div class="cart-item">
            <div class="cart-item-top">
                <div class="cart-item-top-left">
                    <img class="cart-item-top-left-img" src="${image}" alt="">
                </div>
                <div class="cart-item-top-right">
                    <p class="cart-item-top-right-name">${name}</p>
                    <div class="cart-item-top-right-delBtn">
                        <button onclick="deleteFlowerFromBasket(${array[i].id})"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <span class="cart-item-top-right-countPrice">${array[i].count} X $${price}</span>
                </div>
            </div>
        </div>
    </li>         `

    }
    basketWrapper.innerHTML = innerHTML
}
function deleteFlowerFromBasket(id) {
    let targetItem = basketItems.find(item => item.id == id)
    console.log(targetItem)
    if (targetItem.count > 1) {
        targetItem.count--
        renderBasket(basketItems)
        basketCounter.innerHTML--
    }
    else {
        let indexOfTargetItem = basketItems.indexOf(targetItem)
        basketItems.splice(indexOfTargetItem, 1)
        renderBasket(basketItems)
        basketCounter.innerHTML--
    }
}