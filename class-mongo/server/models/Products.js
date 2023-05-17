const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: [true, "desc is requied"]
    }
})
const Products = mongoose.model("Products", productSchema)
module.exports = Products