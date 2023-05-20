import React from "react";

import { useState } from "react";

import Card from "../../shared/card/Card";
import Internship from "../../internships/components/Internship";
import InternshipsList from "../../internships/components/InternshipsList";
import config from "../../config";

function Student({ student }) {
    const [overlayOpen, setOverlayOpen] = useState(false);

    async function sendAssignInternshipRequest(internship) {
        try {
            const response = await fetch(config.backend + "/api/students/assignInternship", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    internshipId: internship._id,
                    studentId: student._id
                })
            });

            const responseJson = await response.json();

            if (!responseJson.error) {
                window.location.reload(false);
            }
            else {
                alert("Une erreur s'est produite : " + responseJson.message);
            }
        }
        catch (err) {
            alert("Une erreur s'est produite pendant la requête");
        }
    }

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
                        (
                            <>
                                est inscrit à un stage
                                
                            </>
                        )
                    :
                        (
                            <>
                                <button
                                    onClick={() => {
                                        setOverlayOpen(!overlayOpen);
                                    }}
                                >
                                    {
                                        overlayOpen
                                        ?
                                            "Annuler"
                                        :
                                            "Ajouter un stage"
                                    }
                                </button>
                            </>
                        )
                }
            </p>
            {
                overlayOpen
                &&
                    (
                        <div className="overlay">
                            Sélectionnez un stage où ajouter l'étudiant
                            <InternshipsList
                                onClickCallback={(internship) => {
                                    sendAssignInternshipRequest(internship);
                                }}
                            />
                        </div>
                    )
            }
        </Card>
    );
}




export default Student;