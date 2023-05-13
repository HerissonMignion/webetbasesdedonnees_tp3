import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useFetch, useAsync } from "react-async";


function StudentsHome() {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(false);
    
    (async () => {
        try {
            const response = await fetch("http://localhost:5000/api/students/list");
            setStudents((await response.json()).students);
        }
        catch (err) {
            setError(true);
        }
    })();
    

    return (
        <>
            students home
            <ul>
                {
                    students.map((student) => (
                        <li key={student._id}> student name : {student.fullName}</li>
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