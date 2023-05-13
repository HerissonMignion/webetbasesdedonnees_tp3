

const Student = require("../models/student");
const Interships = require("../models/intership");
const HttpError = require("../models/http-error");

const mongoose = require("mongoose");


async function createStudent(req, res, next) {
    try {
        const {
            fullName,
            daNumber,
            email,
            profile
        } = req.body;

        const student = new Student({
            fullName,
            daNumber,
            email,
            profile
        });

        await student.save();
        
        res.status(201).json({
            student: student.toObject()
        });

    }
    catch (err) {
        return next(new HttpError("An error occurred while creating the stuent", 500));
    }
}


async function listStudents(req, res, next) {

}



module.exports = {
    createStudent,
    listStudents
};
