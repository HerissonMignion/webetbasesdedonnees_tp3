import React from "react";

import InternshipsNavBar from "./components/InternshipsNavBar";

import InternshipsList from "./components/InternshipsList";

function InternshipsHome() {


    return (
        <>
            <InternshipsNavBar />
            Accueil des stages
            <InternshipsList />
        </>
    );
}



export default InternshipsHome;