import React, { useState, useEffect } from 'react'

const Form = (props) => {

    const initialfieldvalues = [{
        Name: "",
        Gender: "",
        Age: "",
        Symptoms: "",
        Prescription: ""
    }]

    var [values, setValues] = useState(initialfieldvalues);





    const handleChange = e => {
        // console.log(e.target);
        var { name, value } = e.target;
        // console.log(name,value);
        setValues({
            ...values,
            [name]: value
        })
    }



    const handleFormSubmit = e => {
        const name = document.getElementById("patientname");
        const age = document.getElementById("patientage");
        const gender = document.getElementById("patientgender");

        const nameval = name.value;
        const ageval = age.value;
        const genderval = gender.value;

        e.preventDefault();

        if(nameval!=="" && ageval!=="" && genderval!==""){


       
        props.addOrEdit(values);
        alert("Record Save Successfully!");

        }
        else{
            alert("Name, Gender and Age field Cannot be empty!");
        }





    }





    return (
        <form autoComplete="off" onSubmit={handleFormSubmit} id="patient-form">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Patient Name" name="Name" value={values.Name} onChange={handleChange} id="patientname" />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Gender" name="Gender" value={values.Gender} onChange={handleChange} id="patientgender" />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Age" name="Age" value={values.Age} onChange={handleChange} id="patientage" />
                </div>

            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Symptoms</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Symptoms" value={values.Symptoms} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Prescription</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Prescription" onChange={handleChange} value={values.Prescription}></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="save" className="btn btn-primary btn-block" />

            </div>

        </form>
    )
}

export default Form
