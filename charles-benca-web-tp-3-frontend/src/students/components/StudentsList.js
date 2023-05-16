import React from "react";

import { useState } from "react";
import config from "../../config";

import Student from "./Student";

function StudentsList() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(""); // chaine de texte vide signifie que tout est accepté.

  (async () => {
    try {
      const response = await fetch(config.backend + "/api/students/list");
      setStudents((await response.json()).students);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  })();

  function filterOnChange(e) {
    setFilter(e.target.value);
  }

  //obtient les étudiants qui passent le filtre
  function getFilteredStudents() {
    if (filter == "") {
      return students;
    }
    return students.filter((student) => student.profile == filter);
  }

  return (
    <div>
      <div>
        <label htmlFor="filter">
          Filtre :
          <select onChange={filterOnChange}>
            <option key={0} value={""}>
              Tout afficher
            </option>
            <option key={1} value={"programming"}>
              Programmation
            </option>
            <option key={2} value={"networking"}>
              Réseautique
            </option>
          </select>
        </label>
      </div>
      <div>
        {error ? (
          "Une erreur s'est prduite"
        ) : loading ? (
          "Chargement des étudiants en cours"
        ) : students.length > 0 ? (
          <ul>
            {getFilteredStudents().map((student) => (
              <li>
                <Student student={student} />
              </li>
            ))}
          </ul>
        ) : (
          "Il n'y a aucun étudiant"
        )}
      </div>
    </div>
  );
}

export default StudentsList;
