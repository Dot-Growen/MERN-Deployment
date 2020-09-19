import React, { useState } from 'react';

const Info = (props) => {

    const { pet, onLike } = props
    const [clicked, setClicked] = useState(false);

    const handleClick = e => {
        onLike(pet)
        setClicked(true)
    }

    return (
        <div className="Card">
            <div className="d-flex mx-auto mt-5 justify-content-between w-50 align-items-center">
                <h2>Pet Name:</h2>
                <h5>{pet.name}</h5>
            </div>
            <div className="d-flex mx-auto mt-5 justify-content-between w-50 align-items-center">
            <h2>Description:</h2>
            <h5>{pet.description}</h5>
            </div> 
            <div className="d-flex mx-auto mt-5 justify-content-between w-50 align-items-center">
            <h2>Skills:</h2>
            <h5>1. {pet.skillOne} 2. {pet.skillTwo} 3. {pet.skillThree}</h5>
            </div> 
            {clicked ? null : <button onClick={handleClick} className="btn btn-success">Like </button> } ({pet.likes}) Likes
        </div>
    );
}

export default Info;
