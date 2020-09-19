import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router'
import Info from '../components/Info';

const Detail = (props) => {

    const { id } = props
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => (isSubscribed ? setPet(res.data) : null))
            .then(res => setLoaded(true))
            .catch(error => console.log(error))

        return () => (isSubscribed = false);
    }, [])

    const deletePet = e => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                navigate('/')
            })
    }

    const updateLikes = pet => {
        pet.likes += 1
        setPet(pet)
        axios.put(`http://localhost:8000/api/pet/${id}`, pet)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
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
                    <div className="mt-3 d-flex justify-content-between">
                        <h3>Details about: {pet.name}</h3>
                        <button onClick={deletePet} className="btn btn-danger">Adopt {pet.name}</button>
                    </div>

                    <Info pet={pet} onLike={updateLikes} />
                </>

            )}
        </div>
    );
}

export default Detail;
