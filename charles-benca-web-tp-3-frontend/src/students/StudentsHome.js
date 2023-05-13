import React from "react";
import { useState } from "react";

import config from "../config";
import Student from "./components/Student";

import StudentsNavBar from "./components/StudentsNavBar";


function StudentsHome() {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(false);
    
    (async () => {
        try {
            const response = await fetch(config.backend + "/api/students/list");
            setStudents((await response.json()).students);
        }
        catch (err) {
            setError(true);
        }
    })();
    

    return (
        <>
            <StudentsNavBar />
            students Home
            <ul>
                {
                    students.map((student) => (
                        <li key={student._id}>
                            <Student student={student} />
                        </li>
                    ))
                }
            </ul>
            {
                error
                && (
                    <p>Une erreur s'est produite pendant le chargement des étudiants. Rechargez la page</p>
                )
            }
        </>
    );
}


export default StudentsHome;