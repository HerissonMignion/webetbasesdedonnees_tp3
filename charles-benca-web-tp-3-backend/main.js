
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', true);


const HttpError = require("./models/http-error");
const studentsRoutes = require("./routes/students-routes");
const intershipsRoutes = require("./routes/interships-routes");
// const testsRoutes = require("./routes/tests-routes");



const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.use(bodyParser.json());

app.use("/api/interships", intershipsRoutes);
app.use("/api/students", studentsRoutes);
// app.use("/api/tests", testsRoutes);


app.use((req, res, next) => {
    return next(new HttpError("No suitable route found.", 404));
});


app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        message: error.message || "An error occurred."
    });
});


// /!\ /!\ /!\ 
// /!\ /!\ /!\ en cas d'erreur, aller dans ./.env modifier les valeurs
// /!\ /!\ /!\ 
mongoose.connect("mongodb://" + process.env.database_host + "/" + process.env.database_name)
.then(() => {
    console.log("connected to mongodb");
    const port = process.env.app_listen_port;
    app.listen(port);
    console.log("listening on port " + port);

})
.catch((error) => {
    console.log(error);
});


