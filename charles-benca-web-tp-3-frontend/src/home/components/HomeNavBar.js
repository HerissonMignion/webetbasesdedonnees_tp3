
import { NavLink } from "react-router-dom";

import "./HomeNavBar.css";

function HomeNavBar() {

    return (
        <div className="student-nav-bar-div">
            <ul>
                <li>
                    <NavLink to="/home">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/faq">
                        FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/profils">
                        Profils et compétences
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/deroulement">
                        Déroulement
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}



export default HomeNavBar;