import React from "react";

import { useState } from "react";
import config from "../config";

import { NavLink } from "react-router-dom";
import StudentsNavBar from "./components/StudentsNavBar";

import "./StudentsCreate.css"
function StudentsCreate() {
  const [fullName, setFullName] = useState("");
  const [daNumber, setDaNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("programming");

  const [created, setCreated] = useState(false);
  const [creationError, setCreationError] = useState(false); // indique s'il y a eu une erreur pendant la création
  const [creationErrorMessage, setCreationErrorMessage] = useState("");

  function buttonCreateStudentHandler() {
    const student = {
      fullName,
      daNumber,
      email,
      profile,
    };

    // console.log(student);

    (async () => {
      const response = await fetch(config.backend + "/api/students/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const responseJson = await response.json();
      // console.log(responseJson);

      //si y'a un étudiant, alors c'est un succès
      if (responseJson.student) {
        setCreated(true);
        setCreationError(false);
        setCreationErrorMessage("");
      } else {
        setCreated(false);
        setCreationError(true);
        setCreationErrorMessage(responseJson.message);
      }
    })();
  }

  return (
    <div className="StudentsCreate">
      <StudentsNavBar />
      Créer un nouveau étudiant
      {!created && (
        <div className="Student-form">
          <label>
            Nom complet :
            <input
              type="text"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
            />
          </label>
          <br></br>
          <label>
            Numéro de DA :
            <input
              type="text"
              onChange={(e) => {
                setDaNumber(e.target.value);
              }}
              value={daNumber}
            />
          </label>
          <br></br>
          <label>
            Courriel :
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              <option key="0" value="programming">
                Programmation
              </option>
              <option key="1" value="networking">
                Réseautique
              </option>
            </select>
          </label>
          <br></br>
          <button onClick={buttonCreateStudentHandler}>Créer l'étudiant</button>
        </div>
      )}
      {created && (
        <div>
          L'étudiant a été créé avec succès
          <br></br>
          <NavLink to="/students/home">
            <button>Retourner à l'accueil des étudiants</button>
          </NavLink>
          <br></br>
          <button
            onClick={(e) => {
              setFullName("");
              setDaNumber("");
              setEmail("");
              setProfile("programming");
              setCreated(false);
              setCreationError(false);
              setCreationErrorMessage("");
            }}
          >
            Créer un nouveau étudiant
          </button>
        </div>
      )}
      {creationError && (
        <div>
          Une erreur s'est produite pendant la création de l'étudiant :
          <p>{creationErrorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default StudentsCreate;
