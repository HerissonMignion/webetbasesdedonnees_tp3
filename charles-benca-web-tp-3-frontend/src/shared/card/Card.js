import React from "react";

import "./Card.css"



function Card(props) {
    const { children, onClickCallback } = props;

    return (
        <div
            className="card"
            onClick={() => {
                if (onClickCallback) {
                    onClickCallback();
                }
            }}
        >
            {
                children
            }
        </div>
    );
}



export default Card;