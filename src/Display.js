import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import firebase from './firebase';


const Display = () => {

    const [patientObjects, setPatientObjects] = useState({});
    const [currentId,setCurrentId] = useState();

   
    function setId(id){
        setCurrentId(id);
        if(window.confirm("Are you sure to delete this record ?")){
            firebase.database().ref((`Patients/${id}`)).remove();
        }
       

    }



    useEffect(() => {
        firebase.database().ref("Patients").on('value', snapshot => {
            if (snapshot.val() != null) {
                setPatientObjects({
                    ...snapshot.val()
                })
            }
            else{
                setPatientObjects({});
            }
        })

    }, [])
   



    return (
        <div>

            <Link to="/">
                <i className="fas fa-arrow-left"></i>
            </Link>

            <table className="table table table-dark my-3">
                <thead className="thead-dark">
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Symptoms</th>
                        <th scope="col">Prescription</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(patientObjects).map(id => {

                            return <tr key={id}>

                                <td>{patientObjects[id].Name}</td>
                                <td>{patientObjects[id].Age}</td>
                                <td>{patientObjects[id].Gender}</td>
                                <td>{patientObjects[id].Symptoms}</td>
                                <td>{patientObjects[id].Prescription}</td>
                                <td>
                                    <a className= "btn text-danger">
                                        <i className = "fas fa-trash-alt" onClick= {()=>{setId(id)}}></i>
                                    </a>
                                </td>

                            </tr>
                        })

                    }





                </tbody>
            </table>


        </div>
    )
}

export default Display
