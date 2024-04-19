import { PRODUCTDATA } from "./const.js"


export const PRODUCTS = JSON.parse(localStorage.getItem(PRODUCTDATA)) || [
    {
        id: "1",
        name: "Banana",
        quantity: 15,
        unit: "kg",
        price: 19_000,
        url: "https://www.shutterstock.com/image-photo/banana-cluster-isolated-600nw-575528746.jpg"
    },
    {
        id: "2",
        name: "Orange",
        quantity: 11,
        unit: "kg",
        price: 20_000,
        url: "https://thumbs.dreamstime.com/b/sliced-orange-fruit-leaves-isolated-white-23331258.jpg"
    },
    {
        id: "3",
        name: "Apple",
        quantity: 300,
        unit: "kg",
        price: 12_000,
        url: "https://img.freepik.com/free-photo/picture-nice-red-apple-white-background_125540-4627.jpg"
    },
    {
        id: "4",
        name: "Watermelon",
        quantity: 9,
        unit: "kg",
        price: 22_000,
        url: "https://thumbs.dreamstime.com/b/big-watermelon-slice-white-background-as-package-design-element-44517200.jpg"
    },
    {
        id: "5",
        name: "Melon",
        quantity: 10,
        unit: "kg",
        price: 24_000,
        url: "https://st2.depositphotos.com/3058973/12127/i/450/depositphotos_121277152-stock-photo-orange-cantaloupe-melon-isolated.jpg"
    },
    {
        id: "6",
        name: "Pear",
        quantity: 20,
        unit: "kg",
        price: 19_100,
        url: "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=KwN77KxCAl025ZaSBgzO7aqM9DALlBcrX0TXUNF5kDs="
    },
]