import React from "react";

import { NavLink } from "react-router-dom";


import "./InternshipsNavBar.css";

function InternshipsNavBar() {

    return (
        <div className="internship-nav-bar-div">
            <ul>
                <li>
                    <NavLink to="/internships/home">
                        Accueil des stages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/internships/create">
                    Creer un stage
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}



export default InternshipsNavBar;


