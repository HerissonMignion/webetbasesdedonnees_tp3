import React from "react";

import { useState } from "react";
import config from "../../config";

import Internship from "./Internship";

function InternshipsList() {
    const [loading, setLoading] = useState(true);
    const [internships, setInternships] = useState([]);
    const [error, setError] = useState(false);

    (async () => {
        try {
            const response = await fetch(config.backend + "/api/internships/list");
            setInternships((await response.json()).internships);
        }
        catch (err) {
            setError(true);
        }
        setLoading(false);
    })();

    return (
        <div>
            {
                error
                ?
                    "Une erreur s'est produite"
                :
                    loading
                    ?
                        "Chargement des stages en cours"
                    :
                        internships.length > 0
                        ?
                            <ul>
                                {
                                    internships.map((internship) => (
                                        <li>
                                            <Internship internship={internship} />
                                        </li>
                                    ))
                                }
                            </ul>
                        :
                            "Il n'y a aucun stage"
            }
        </div>
    );
}



export default InternshipsList;