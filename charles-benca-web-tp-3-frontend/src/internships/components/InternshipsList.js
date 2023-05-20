import React from "react";

import { useState } from "react";
import config from "../../config";

import Internship from "./Internship";


function InternshipsList({ onClickCallback }) {
    const [loading, setLoading] = useState(true);
    const [internships, setInternships] = useState([]);
    const [error, setError] = useState(false);
    const [filter, setFilter] = useState(""); // chaine de texte vide signifie que tout est accepté.
    

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


    function filterOnChange(e) {
        setFilter(e.target.value);
    }

    //obtient les stages qui passent le filtre
    function getFilteredInternships() {
        if (filter == "") {
            return internships;
        }
        return internships.filter((internship) => (internship.profile == filter));
    }

    return (
        <div>
            <div>
                <label htmlFor="filter">Filtre :
                    <select onChange={filterOnChange}>
                        <option
                            key={0}
                            value={""}
                        >
                            Tout afficher
                        </option>
                        <option
                            key={1}
                            value={"programming"}
                        >
                            Programmation
                        </option>
                        <option
                            key={2}
                            value={"networking"}
                        >
                            Réseautique
                        </option>
                    </select>
                </label>
            </div>
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
                                        getFilteredInternships().map((internship) => (
                                            <li>
                                                <Internship
                                                    internship={internship}
                                                    onClickCallback={(internship) => {
                                                        onClickCallback(internship);
                                                    }}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            :
                                "Il n'y a aucun stage"
                }
            </div>
        </div>
    );
}



export default InternshipsList;