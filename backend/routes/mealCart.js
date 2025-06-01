const express = require("express")
const router = express.Router()
const itemsController = require("../controllers/items")

router.post("/item", itemsController.addItem)
router.get("/items", itemsController.getItems)

module.exports = router 