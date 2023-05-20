

const Student = require("../models/student");
const Internship = require("../models/internship");
const HttpError = require("../models/http-error");

const mongoose = require("mongoose");
const { assignInternshipToStudent } = require("./students-controllers");



async function createInternships(req, res, next) {
    try {
        const {
            contactName,
            contactEmail,
            companyName,
            companyAddress,
            profile,
            placesAvailable,
            description,
            pay
        } = req.body;

        const internship = new Internship({
            contactName,
            contactEmail,
            companyName,
            companyAddress,
            profile,
            placesAvailable,
            description,
            pay
        });

        await internship.save();

        res.status(201).json({
            internship: internship.toObject()
        });

    }
    catch (err) {
        return next(new HttpError("An error occurred while creating the internship\n" + err.message, 500));
    }
}


async function listInternships(req, res, next) {
    try {
        const internships = await Internship.find({});
        res.status(200).json({
            internships: internships.map((internship) => {
                return internship.toObject();
            })
        });
    }
    catch (err) {
        return next(new HttpError("An error occurred while listing internships", 500));
    }
}

async function getInternship(req, res, next) {
    try {
        const { internshipId } = req.body;
        const internship = await Internship.findById(internshipId);
        res.status(200).json({
            internship: internship.toObject()
        });
    }
    catch {
        return next(new HttpError("An error occurred while fetching the internship", 500));
    }
}




module.exports = {
    createInternships,
    listInternships,
    getInternship
};