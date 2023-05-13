

const Student = require("../models/student");
const Intership = require("../models/intership");
const HttpError = require("../models/http-error");

const mongoose = require("mongoose");



async function createIntership(req, res, next) {
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

        const intership = new Intership({
            contactName,
            contactEmail,
            companyName,
            companyAddress,
            profile,
            placesAvailable,
            description,
            pay
        });

        await intership.save();

        res.status(201).json({
            intership: intership.toObject()
        });

    }
    catch (err) {
        return next(new HttpError("An error occurred while creating the intership", 500));
    }
}


async function listInterships(req, res, next) {
    try {
        const interships = await Intership.find({});
        res.status(201).json({
            interships: interships.map((intership) => {
                return intership.toObject();
            })
        });
    }
    catch (err) {
        return next(new HttpError("An error occurred while listing interships", 500));
    }
}



module.exports = {
    createIntership,
    listInterships
};