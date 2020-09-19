import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate, Link } from '@reach/router'

const Create = () => {

const [errors, setErrors] = useState([]);

    const createPet = pet => {
        axios.post('http://localhost:8000/api/new', pet)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className="p-5">
        <div className="mt-3 d-flex justify-content-between">
                <h2>Pet Shelter</h2>
                <Link to={'/'}>
                    <p className="my-4">Back to home</p>
                </Link>
            </div>
            <p>Know a pet needing a home?</p>
            <div className="d-flex">
                {errors.map((err, index) => <p className="text-danger" key={index}> --- {err} --- </p>)}
            </div>
        
            <Form
                initialName={""}
                initialType={""}
                initialDescription={""}
                initialSkillOne={""}
                initialSkillTwo={""}
                initialSkillThree={""}
                onSubmitProp={createPet}
                buttonName="Add Pet"
            />
        </div>
    );
}

export default Create;
