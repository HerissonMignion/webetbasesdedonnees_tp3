import React from "react";


import { NavLink } from "react-router-dom";

import "./StudentsNavBar.css";

function StudentsNavBar() {

    return (
        <div className="student-nav-bar-div">
            <ul>
                <li>
                    <NavLink to="/students/home">
                        Accueil des étudiants
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/students/create">
                    Creer un étudiant
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default StudentsNavBar;