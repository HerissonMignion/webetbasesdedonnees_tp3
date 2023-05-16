import React from "react";
import "./MainNavBar.css";
import { NavLink } from "react-router-dom";

function MainNavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="Imagelogo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1159/1159090.png"
          width={"50px"}
          alt="The logo"
        />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Accueil
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/students/home">
              Étudiants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/internships/home">
              Stages
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavBar;
