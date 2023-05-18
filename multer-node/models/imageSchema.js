const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        image: Buffer,
        contentType: String
    }
})
const imageModel = mongoose.model("Images", imageSchema)
module.exports = imageModel