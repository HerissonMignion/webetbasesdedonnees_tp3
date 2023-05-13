

const Student = require("../models/student");
const Internship = require("../models/internship");
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
        return next(new HttpError("An error occurred while creating the stuent:\n" + err.message, 500));
    }
}


async function listStudents(req, res, next) {
    try {
        const students = await Student.find({});
        res.status(201).json({
            students: students.map((student) => {
                return student.toObject();
            })
        });
    }
    catch (err) {
        return next(new HttpError("An error occurred while listing students", 500));
    }
}



module.exports = {
    createStudent,
    listStudents
};
