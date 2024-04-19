import { Products } from "./classes.js";
import { PRODUCTDATA } from "./const.js";
import {PRODUCTS} from "./data.js";

const cards = document.querySelector(".cards")
const modal = document.querySelector(".modal")
const addBtn = document.querySelector(".add__btn")
const cancel = document.querySelector(".cancel__btn")

const form = document.querySelector(".form")
console.log(form);
const name = document.querySelector(".form__name__input")
const quantity = document.querySelector(".form__quantity__input")
const unit = document.querySelector("#form__unit")
const price = document.querySelector(".form__price__input")
const url = document.querySelector(".form__url__input")


function createCards(carData) {
    let card = ""

    carData.forEach(product => {
        card += `
            <div class="card">
                <div class="card__img">
                    <img src="${product.url}" alt="${product.name} img">
                </div>
                <div class="card__info">
                    <h1>Name: ${product.name}</h1>
                    <p>Quantity: ${product.quantity} </p>
                    <p>Unit: ${product.unit}</p>
                    <p>Price: $${product.price}</p>
                </div>
                <div class="card__btn">
                    <button class="delete__btn add__btn" name="delete" data-id="${product.id}">Delete</button>
                </div>
            </div>
        `
        cards.innerHTML = card
    });
}
createCards(PRODUCTS)

addBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

cancel.addEventListener("click", () => {
    modal.style.display = "none"
})

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    let product = new Products(
        name.value,
        quantity.value,
        unit.checked,
        price.value,
        url.value
    )
    PRODUCTS.push(product)
    console.log(product);
    createCards(PRODUCTS)
    localStorage.setItem(PRODUCTDATA,JSON.stringify(PRODUCTS))
    modal.style.display = "none"

})
// console.log(PRODUCTS);

cards.addEventListener("click", e=> {
    if(e.target.name === "delete") {
        deleteProduct(e.target.dataset.id)
    }
})

const deleteProduct = id => {
    let index = PRODUCTS.findIndex(u => u.id === id)
    PRODUCTS.splice(index,1)
    createCards(PRODUCTS)
}