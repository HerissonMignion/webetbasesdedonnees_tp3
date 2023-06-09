
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
require("dotenv").config();
mongoose.set('strictQuery', true);


const HttpError = require("./models/http-error");
const studentsRoutes = require("./routes/students-routes");
const internshipsRoutes = require("./routes/internships-routes");
const { exit } = require("process");
// const testsRoutes = require("./routes/tests-routes");



const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.use(bodyParser.json());

app.use("/api/internships", internshipsRoutes);
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
        error: true,
        message: error.message || "An error occurred."
    });
});


// /!\ /!\ /!\ 
// /!\ /!\ /!\ en cas d'erreur, aller dans ./.env modifier les valeurs
// /!\ /!\ /!\ 
// mongoose.connect("mongodb://" + process.env.database_host + ":" + process.env.database_port + "/" + process.env.database_name)
mongoose.connect("mongodb://" + process.env.database_host + "/" + process.env.database_name)
.then(() => {
    console.log("connected to mongodb");
    const port = process.env.app_listen_port;

    if (process.env.mode == "prod") {
        const httpsServer = https.createServer({
            key: fs.readFileSync("./ssl/server.key", "utf8"),
            cert: fs.readFileSync("./ssl/server.cert", "utf8")
        }, app);
        httpsServer.listen(port);
    }
    else if (process.env.mode == "dev") {
        app.listen(port);
    }
    else {
        console.log("unknown running mode");
        exit(1);
    }


    console.log("listening on port " + port);

})
.catch((error) => {
    console.log(error);
});


