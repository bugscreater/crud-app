import React, { useState, useEffect } from 'react'
import Form from "./Form"
import Navbar from './Navbar'
import firebase from './firebase';





const Content = () => {

    // const [patientObjects, setPatientObjects] = useState({});



    // useEffect(() => {
    //     firebase.database().ref("Patients").on('value', snapshot => {
    //         if (snapshot.val() != null) {
    //             setPatientObjects({
    //                 ...snapshot.val()
    //             })
    //         }
    //     })

    // }, [])



    function addOrEdit(values) {



        const data = firebase.database().ref("Patients");
        data.push(values);
    }



    return (
        <div>
            <Navbar />
            <div className="container my-auto">
                <div className="my-5">
                    <div className="col-md-8 offset-md-2">
                        <Form addOrEdit={addOrEdit} />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Content
