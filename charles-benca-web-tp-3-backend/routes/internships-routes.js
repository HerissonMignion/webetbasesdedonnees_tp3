
const express = require("express");
const router = express.Router();
const internshipsControllers = require("../controllers/internships-controllers");


router.post("/create", internshipsControllers.createInternships);
router.get("/list", internshipsControllers.listInternships);



module.exports = router;