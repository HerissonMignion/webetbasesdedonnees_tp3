import React from "react";

import Card from "../../shared/card/Card";


function Internship({ internship }) {

    return (
        <Card>
            <h1>Stage</h1>
            <h1>id = {internship._id}</h1>
            Nom du contact : {internship.contactName}<br></br>
            Courriel du contact : {internship.contactEmail}<br></br>
            Nom de la compagnie : {internship.companyName}<br></br>
            Addresse de la compagnie : {internship.companyAddress}<br></br>
            Profile : {internship.profile}<br></br>
            Nombre total de candidats désirés : {internship.placesAvailable}<br></br>
            Description :
            <p>
                {internship.description}
            </p>
        </Card>
    );
}


export default Internship;