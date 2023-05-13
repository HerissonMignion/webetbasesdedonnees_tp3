
const express = require("express");
const router = express.Router();
const intershipsControllers = require("../controllers/interships-controllers");


router.post("/create", intershipsControllers.createIntership);
router.get("/list", intershipsControllers.listInterships);



module.exports = router;