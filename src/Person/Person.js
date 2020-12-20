import React from 'react';
import './Persn.css';

const person =(props) => {
    return (
    <div className="Person">
    <p>I am {props.name} I am a {props.age} years old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    
    </div>
    )
}
export default person;