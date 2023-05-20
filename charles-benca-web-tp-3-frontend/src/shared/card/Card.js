import React from "react";

import "./Card.css"



function Card({children}) {


    return (
        <div
            className="card"
            onClick={() => {
                alert("asdf");
            }}
        >
            {
                children
            }
        </div>
    );
}



export default Card;