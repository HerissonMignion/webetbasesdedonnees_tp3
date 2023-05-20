import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import config from "../config";
import InternshipsNavBar from "./components/InternshipsNavBar";

function InternshipsCreate() {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [profile, setProfile] = useState("programming");
    const [placesAvailable, setPlacesAvailable] = useState(1);
    const [description, setDescription] = useState("");
    const [pay, setPay] = useState("");


    const [created, setCreated] = useState(false);
    const [creationError, setCreationError] = useState(false); // indique s'il y a eu une erreur pendant la création
    const [creationErrorMessage, setCreationErrorMessage] = useState(""); 


    function buttonCreateInternshipHandler() {
        const internship = {
            contactName,
            contactEmail,
            companyName,
            companyAddress,
            profile,
            placesAvailable,
            description,
            pay
        };

        // console.log(student);

        (async () => {
            const response = await fetch(config.backend + "/api/internships/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(internship)
            });

            const responseJson = await response.json();
            // console.log(responseJson);

            //si y'a un internship, alors c'est un succès
            if (responseJson.internship) {
                setCreated(true);
                setCreationError(false);
                setCreationErrorMessage("");
            }
            else {
                setCreated(false);
                setCreationError(true);
                setCreationErrorMessage(responseJson.message);
            }

        })();
    }

    return (
        <>
            <InternshipsNavBar />
            Créer un stage
            {!created
            && 
                <div className="Student-form stage">
                    <label>
                        Nom du contact : 
                        <input
                            type="text"
                            onChange={(e) => {
                                setContactName(e.target.value);
                            }}
                            value={contactName}
                        />
                    </label>
                    <br></br>
                    <label>
                        Courriel du contact :
                        <input
                            type="text"
                            onChange={(e) => {
                                setContactEmail(e.target.value);
                            }}
                            value={contactEmail}
                        />
                    </label>
                    <br></br>
                    <label>
                        Nom de la compagnie :
                        <input
                            type="text"
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                            }}
                            value={companyName}
                        />
                    </label>
                    <br></br>
                    <label>
                        Adresse de la compagnie :
                        <input
                            type="text"
                            onChange={(e) => {
                                setCompanyAddress(e.target.value);
                            }}
                            value={companyAddress}
                        />
                    </label>
                    <br></br>
                    <label>
                        Profile :
                        <select
                            onChange={(e) => {
                                setProfile(e.target.value);
                            }}
                            value={profile}
                        >
                            <option
                                key="0"
                                value="programming"
                            >
                                Programmation
                            </option>
                            <option
                                key="1"
                                value="networking"
                            >
                                Réseautique
                            </option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Nombre de candidats désirés :
                        <input
                            type="number"
                            onChange={(e) => {
                                setPlacesAvailable(e.target.value);
                            }}
                            value={placesAvailable}
                        />
                    </label>
                    <br></br>
                    <label>
                        Description :
                        <textarea
                            cols="40"
                            rows="5"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            value={description}
                        />
                    </label>
                    <br></br>
                    <label>
                        Paye :
                        <input
                            type="text"
                            onChange={(e) => {
                                setPay(e.target.value);
                            }}
                            value={pay}
                        />
                    </label>
                    <br></br>
                    <button
                        onClick={buttonCreateInternshipHandler}
                    >
                        Créer le stage
                    </button>
                </div>
            }
            {
                created
                &&
                    <div>
                        Le stage a été créé avec succès
                        <br></br>
                        <NavLink to="/internships/home">
                            <button>Retourner à l'accueil des stages</button>
                        </NavLink>
                        <br></br>
                        <button
                            onClick={(e) => {
                                setContactName("");
                                setContactEmail("");
                                setCompanyName("");
                                setCompanyAddress("");
                                setProfile("programming");
                                setPlacesAvailable(1);
                                setDescription("");
                                setPay("");

                                setCreated(false);
                                setCreationError(false);
                                setCreationErrorMessage("");
                            }}
                        >
                            Créer un nouveau stage
                        </button>
                    </div>
            }
            {
                creationError
                &&
                    <div>
                        Une erreur s'est produite pendant la création du stage :
                        <p>
                            {creationErrorMessage}
                        </p>
                    </div>
            }
        </>
    );
}



export default InternshipsCreate;