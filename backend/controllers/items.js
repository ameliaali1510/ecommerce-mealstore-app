const Item = require("../models/mealCart")

const addItem = async (req, res) => {
    const { text } = req.body
    // create new item object with model
    const itemObj = new Item({
        text
    })
    const newItem = await itemObj.save()
    res.status(200).json(newItem)
    // await for it to be saved
    // respond with json()
}

const getItems = async (req, res) => {
    const items = await Item.find({})
    res.json({
        message: "all items",
        items: items
    })
}


module.exports = {
    addItem,
    getItems
}


