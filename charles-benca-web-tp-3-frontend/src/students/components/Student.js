import React from "react";


import Card from "../../shared/card/Card";



function Student({ student }) {


    return (
        <Card>
            <h1>Nom complet : { student.fullName }</h1>
        </Card>
    );
}




export default Student;