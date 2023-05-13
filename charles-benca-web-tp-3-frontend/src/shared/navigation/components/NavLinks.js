import React from "react";
import { NavLink } from "react-router-dom";


function NavLinks() {

    return (
        <ul>
            <li>
                <NavLink to="/home">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/students/home">Étudiants</NavLink>
            </li>
            <li>
                <NavLink to="/internships/home">Stages</NavLink>
            </li>
        </ul>
    );
}



export default NavLinks;