
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', true);


const HttpError = require("./models/http-error");
// const teachersRoutes = require("./routes/teachers-routes");
// const coursesRoutes = require("./routes/courses-routes");
const studentsRoutes = require("./routes/students-routes");
// const testsRoutes = require("./routes/tests-routes");



const app = express();

app.use(bodyParser.json());

// app.use("/api/teachers", teachersRoutes);
// app.use("/api/courses", coursesRoutes);
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


