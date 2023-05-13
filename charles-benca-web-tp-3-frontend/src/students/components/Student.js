import React from "react";


import Card from "../../shared/card/Card";



function Student({ student }) {


    return (
        <Card>
            <h1>Nom complet : { student.fullName }</h1>
            <p>
                Numéro de DA : { student.daNumber }<br></br>
                Courriel : { student.email }<br></br>
                Profile : { student.profile }<br></br>
                {
                    student.internship
                    ?
                        "est inscrit à un stage"
                    :
                        "aucun stage"
                }
            </p>
        </Card>
    );
}




export default Student;