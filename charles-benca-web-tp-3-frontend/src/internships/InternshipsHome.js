import React from "react";

import InternshipsNavBar from "./components/InternshipsNavBar";

import InternshipsList from "./components/InternshipsList";

function InternshipsHome() {


    return (
        <>
            <InternshipsNavBar />
            Accueil des stages
            <InternshipsList
                onClickCallback={(internship) => {
                    alert(JSON.stringify(internship));
                }}
            />
        </>
    );
}



export default InternshipsHome;