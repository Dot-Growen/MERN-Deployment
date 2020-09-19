import React, { useState } from 'react'

const Form = (props) => {

    const {
        initialName,
        initialType,
        initialDescription,
        initialSkillOne,
        initialSkillTwo,
        initialSkillThree,
        onSubmitProp,
        buttonName,
    } = props

    const [name, setName] = useState(initialName)
    const [type, setType] = useState(initialType)
    const [description, setDescription] = useState(initialDescription)
    const [skillOne, setSkillOne] = useState(initialSkillOne)
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo)
    const [skillThree, setSkillThree] = useState(initialSkillThree)
    const [likes, setLike] = useState(0);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
            likes,
        });
    }

    return (
        <div>
            <form onSubmitCapture={onSubmitHandler} className='card mx-auto col-8 mt-5 p-3'>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Pet Name:</label>
                        <input
                            type='text'
                            name='name'
                            onChange={e => setName(e.target.value)}
                            className='form-control'
                            placeholder={name}
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label>Skill 1:</label>
                        <input
                            type='text'
                            name='skillOne'
                            onChange={e => setSkillOne(e.target.value)}
                            className='form-control'
                            placeholder={skillOne}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Pet Type:</label>
                        <input
                            type='text'
                            name='type'
                            onChange={e => setType(e.target.value)}
                            className='form-control'
                            placeholder={type}
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label>Skill 2:</label>
                        <input
                            type='text'
                            name='skillTwo'
                            onChange={e => setSkillTwo(e.target.value)}
                            className='form-control'
                            placeholder={skillTwo}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Pet Description:</label>
                        <input
                            type='text'
                            name='description'
                            onChange={e => setDescription(e.target.value)}
                            className='form-control'
                            placeholder={description}
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label>Skill 3:</label>
                        <input
                            type='text'
                            name='skillThree'
                            onChange={e => setSkillThree(e.target.value)}
                            className='form-control'
                            placeholder={skillThree}
                        />
                    </div>
                </div>
                <button className="btn btn-primary btn-block">{buttonName}</button>
            </form>
        </div>
    )
}

export default Form
