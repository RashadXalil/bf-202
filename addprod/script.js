let products = [{
    id: 0,
    brand: "Apple",
    model: "Iphone 11",
    storage: 128,
    ram: 4,
    price: 1200,
    discountPercent: 10,
    discountedPrice: 1080,
    isDeleted: false,
    image: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-0220_afabcf0b3a54bf947569ab162b09ec71_w.jpg"
}, {
    id: 1,
    brand: "Apple",
    model: "Iphone 11",
    storage: 128,
    ram: 4,
    price: 1200,
    discountPercent: 0,
    discountedPrice: 1080,
    isDeleted: false,
    image: "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-0220_afabcf0b3a54bf947569ab162b09ec71_w.jpg"
}
];
let id = 2;
const addBtn = document.getElementById("addBtn")
const cardBody = document.getElementById("card__body")
const getAllProductsBtn = document.getElementById("getAllProducts")
class Product {
    constructor(brand, model, storage, ram, price, discountPercent, image) {
        this.id = id,
            this.brand = brand,
            this.model = model,
            this.storage = storage,
            this.ram = ram,
            this.price = price,
            this.discountPercent = discountPercent,
            this.image = image,
            this.isDeleted = false,
            this.discountedPrice = this.price - ((this.discountPercent * this.price) / 100),
            id++;
    }
}
function addProduct(brand, model, storage, ram, price, discountPercent, image) {
    if (image == "") {
        image = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    }
    let newProduct = new Product(brand, model, storage, ram, price, discountPercent, image)
    products.push(newProduct)
    renderList(products)
}
function renderList(array) {
    let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const { id, brand, model, storage, ram, price, discountedPrice, discountPercent, image, isDeleted } = array[i]
        if (isDeleted == false) {
            innerHTML += `<div class="col-3">
        <div class="custom__card">
          <div class="card__image">
            <img
              src="${image}"
              alt=""
            />
          </div>
          <div class="card__body">
            <div class="card__body__title">
              <p>
                <span class="card__body__title__brand">${brand}</span
                ><span class="card__body__title__model">${model}</span>
                <span class="card__body__title__storage">${storage}GB</span>
              </p>
            </div>
            <div class="card__body__footer">
              <div class="card__body__footer__price">
              ${discountPercent != 0 ? `  <span class="card__body__footer__price__mainprice discounted"
              >${price}AZN</span
            >
            <span class="card__body__footer__price__discountedprice "
              >${discountedPrice}AZN</span
            >`: `<span class="card__body__footer__price__mainprice "
            >${price}AZN</span
          >`}
              </div>
              <div>
                    <button class="btn btn-danger" onclick="changeDeleteStatus(${id})">Delete</button>
                    <button class="btn btn-info">Edit</button>
                  </div>
            </div>
          </div>
        </div>
      </div>`
        }
    }
    cardBody.innerHTML = innerHTML
}
addBtn.onclick = function () {
    let prodBrand = prompt("Product Brand:")
    let prodModel = prompt("Product Model : ")
    let prodStorage = prompt("Product Storage : ")
    let prodRam = prompt("Product Ram : ")
    let prodPrice = prompt("Product Price:")
    let prodDiscountPercent = prompt("Product Discount Percent:")
    let prodImage = prompt("Product Image : ")
    addProduct(prodBrand, prodModel, prodStorage, prodRam, prodPrice, prodDiscountPercent, prodImage)
    console.log(products)

}
function deleteProduct(id) {
    let target = products.find(product => product.id == id)
    let indexOfTarget = products.indexOf(target)
    products.splice(indexOfTarget, 1)
    renderList(products)
}
function changeDeleteStatus(id) {
    let target = products.find(product => product.id == id)
    target.isDeleted = true
    renderList(products)
    console.log(products)
}
function getAllProducts(array) {
    let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const { id, brand, model, storage, ram, price, discountedPrice, image, isDeleted } = array[i]
        innerHTML += `<div class="col-3">
        <div class="custom__card">
          <div class="card__image">
            <img
              src="${image}"
              alt=""
            />
          </div>
          <div class="card__body">
            <div class="card__body__title">
              <p>
                <span class="card__body__title__brand">${brand}</span
                ><span class="card__body__title__model">${model}</span>
                <span class="card__body__title__storage">${storage}GB</span>
              </p>
            </div>
            <div class="card__body__footer">
              <div class="card__body__footer__price">
              ${discountPercent != 0 ? `  <span class="card__body__footer__price__mainprice"
              >${price}AZN</span
            >
            <span class="card__body__footer__price__discountedprice"
              >${discountedPrice}AZN</span
            >`: `<span class="card__body__footer__price__mainprice discounted"
            >${price}AZN</span
          >`}
              </div>
              <div>
                    <button class="btn btn-danger" onclick="changeDeleteStatus(${id})">Delete</button>
                    <button class="btn btn-info">Edit</button>
                  </div>
            </div>
          </div>
        </div>
      </div>`
    }
    cardBody.innerHTML = innerHTML
}
getAllProductsBtn.onclick = function () {
    getAllProducts(products)
}
renderList(products)    