

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
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        
        res.status(201).json({
            students: students.map((student) => {
                return student.toObject();
            })
        });
    }
    catch (err) {
        return next(new HttpError("An error occurred while listing students\n" + err.message, 500));
    }
}


async function assignInternshipToStudent(req, res, next) {
    try {
        const {
            internshipId,
            studentId
        } = req.body;

        const student = await Student.findById(studentId);
        let internship = undefined;
        if (internshipId && internshipId !== "undefined") {
            internship = await Internship.findById(internshipId);
        }

        // TODO : s'assurer que le maximum d'étudiant à ce stage n'est pas dépassé (qu'il y a encore de la place)

        student.internship = internship;

        await student.save();


        res.status(200).json({
            student: student.toObject()
        });
    }
    catch (err) {
        return next(new HttpError("An error occurred while assigning the internship\n" + err.message, 500));
    }
}


module.exports = {
    createStudent,
    listStudents,
    assignInternshipToStudent
};
