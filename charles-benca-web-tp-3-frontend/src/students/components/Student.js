import React from "react";

import { useState } from "react";

import Card from "../../shared/card/Card";



function Student({ student }) {
    const [overlayOpen, setOverlayOpen] = useState(false);

    return (
        <Card>
            <h1>Nom complet : { student.fullName }</h1>
            <h1>id = {student._id}</h1>
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
            {
                overlayOpen
                &&
                    (
                        <div>
                            asdfasdf
                        </div>
                    )
            }
        </Card>
    );
}




export default Student;