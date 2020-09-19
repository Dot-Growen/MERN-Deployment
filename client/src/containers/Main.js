import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List'
import { Link } from '@reach/router';

export default () => {

    const [pet, setPet] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        let isSubscribed = true;
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPet(res.data))
            .catch(error => (isSubscribed ? setError(error.toString()) : null))
        return () => (isSubscribed = false);
    }, []);

    return (
        <div className="p-5">
            <div className="mt-3 d-flex justify-content-between">
                <h2>Pet Shelter</h2>
                <Link to={'/new'}>
                    <p className="my-4">add a pet to the shelter</p>
                </Link>
            </div>
            <p>These pets are looking for a good home</p>
            <List pet={pet} />
        </div>
    )
}