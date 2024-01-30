const express = require("express");
const router = express.Router();
const incrementController = require("../controllers/increment-controller");

router.get("/count", incrementController.getCount);
router.post("/count/increment", incrementController.incrementCount);
router.post("/count/decrement", incrementController.decrementCount);

module.exports = router