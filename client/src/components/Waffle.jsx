import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DeleteButton = styled.button`
    background-color: tomato;
    color: #eee;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 1em;
`

function Waffle(props) {
    return (
        <div>
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.ingredients.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.ingredients.batter, e)}
                value={props.ingredients.batter}
            />
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.ingredients.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.ingredients.batter, e)}
                value={props.ingredients.batter}
            />
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.ingredients.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.ingredients.batter, e)}
                value={props.ingredients.batter}
            />
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.ingredients.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.ingredients.batter, e)}
                value={props.ingredients.batter}
            />
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.ingredients.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.ingredients.batter, e)}
                value={props.ingredients.batter}
            />
            
            
            <DeleteButton
                onClick={() => props.deleteWaffle(props.waffle)}
            >
                Delete waffle
            </DeleteButton>
            </div>
    )
}

export default Waffle;

