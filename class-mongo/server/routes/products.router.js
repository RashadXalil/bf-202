const express = require("express")
const router = express.Router()
const Products = require("../models/Products")
//get All Products
router.get("/", async (req, res) => {
    const data = await Products.find()
    res.send(data)
})
// get by id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})
//post
router.post("/", async (req, res) => {

    const newProduct = new Products({
        ...req.body
    })
    await newProduct.save()
    res.send(newProduct)
})
// delete 
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    res.send(`${id}-li product silindi`)
})
//update
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedProduct = await Products.findByIdAndUpdate(id, {})
    res.send(updatedProduct)
})
module.exports = router