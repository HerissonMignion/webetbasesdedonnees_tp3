
const express = require("express");
const router = express.Router();
const internshipsControllers = require("../controllers/internships-controllers");


router.post("/create", internshipsControllers.createinternship);
router.get("/list", internshipsControllers.listinternships);



module.exports = router;