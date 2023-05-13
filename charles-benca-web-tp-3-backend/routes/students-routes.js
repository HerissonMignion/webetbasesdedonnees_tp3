
const express = require("express");
const router = express.Router();
const studentsControllers = require("../controllers/students-controllers");


router.post("/create", studentsControllers.createStudent);
router.get("/list", studentsControllers.listStudents);


module.exports = router;

