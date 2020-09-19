import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate, Link } from '@reach/router'

const Update = (props) => {

    const [errors, setErrors] = useState([]);
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = props

    useEffect(() => {
        let isSubscribed = true;
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => (isSubscribed ? setPet(res.data) : null))
            .then(res => setLoaded(true))
            .catch(error => console.log(error))

        return () => (isSubscribed = false);
    }, [])

    const updatePet = pet => {
        axios.put(`http://localhost:8000/api/pet/${id}`, pet)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.res.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const deletePet = e => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                navigate('/')
            })
    }


    return (
        <div className="p-5">
            {loaded && (
                <>
                    <div className="mt-3 d-flex justify-content-between">
                        <h2>Pet Shelter</h2>
                        <Link to={'/'}>
                            <p className="my-4">Back to home</p>
                        </Link>
                    </div>
                        <p>Edit: {pet.name}</p>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <Form
                        initialName={pet.name}
                        initialType={pet.type}
                        initialDescription={pet.description}
                        initialSkillOne={pet.skillOne}
                        initialSkillTwo={pet.skillTwo}
                        initialSkillThree={pet.skillThree}
                        onSubmitProp={updatePet}
                        buttonName="Edit Pet"
                    />
                </>
            )}
        </div>
    )
}

export default Update;
