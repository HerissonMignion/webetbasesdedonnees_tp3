import React from "react";
import { useState } from "react";

import config from "../config";

import StudentsNavBar from "./components/StudentsNavBar";
import StudentsList from "./components/StudentsList";

function StudentsHome() {

    return (
        <>
            <StudentsNavBar />
            Accueil des étudiants
            <StudentsList />

        </>
    );
}


export default StudentsHome;