import React from 'react'
import { navigate } from '@reach/router';

const List = (props) => {

    const { pet } = props

    return (
        <div>
            <table className="table mx-auto w-75" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pet.map((pet, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <button onClick={() => {
                                        navigate(`/${pet._id}`)
                                    }} >details</button>
                                    <button onClick={() => {
                                        navigate(`/edit/${pet._id}`)
                                    }} >edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default List;


