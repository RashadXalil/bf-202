const express = require("express")
const router = express.Router()
const imageModel = require("../models/imageSchema")
const multer = require("multer")
const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single("testImage")
// get All Images
router.get("/", async (req, res) => {
    const data = await imageModel.find()
    res.send(data)
})
// get image by Id
router.get(":id", async (req, res) => {
    const { id } = req.params
    const target = await imageModel.findById(id)
    res.send(target)
})
// post image
router.post("/", async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new imageModel({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: "image/png/jpg"
                }
            })
            newImage.save().then(() => {
                res.send("image uploaded")
            }).catch(err => {
                res.send(err)
            })
        }
    })
})
// delete image 
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    await imageModel.findByIdAndDelete(id)
    res.send("item deleted")
})
// update image 
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const target = await imageModel.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated", target)
})

module.exports = router