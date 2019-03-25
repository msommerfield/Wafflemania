import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DeleteButton = styled.button`
    background-color: tomato;
    color: #eee;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 1em;
`


class Waffle extends Component {
    state = {
        waffles: [],
        waffle: {
            batter: '',
            toppings: '',
            preferredCrispness: '',
            preferredLocation: '',
            imgLink: ''
        }, 
        redirecToHome: false,
        createdWaffle: {}
    }
    }

    componentDidMount = () => {
        this.getAllWaffles()
    }

    getAllUsers = () => {
        axios.get(`/api/${userId}/waffles/${waffleId}`).then(res => {
            this.setState({waffles: res.data})
        })
    }

    createUser = () => {
        axios.post('/api/v1', {waffle: this.state.waffle})
            .then(res => {
                console.log(res.data)
                this.setState({redirectToHome: true, createdUser: res.data})
            })
    }

    handleChange = (e) => {
        const newWaffle = {...this.state.waffle}
        newWaffle[e.target.name] = e.target.value
        this.setState({waffle: newWaffle})
    }

    handleSignUp = (e) => {
        e.preventDefault()
        this.createWaffle()
    }


    render() {
        return (
            <div>
                <div>
            <input
                type="text"
                name="batter"
                onChange={(e) => props.handleChange(props.batter, e)}
                onMouseOut={(e) => props.updateWaffle(props.batter, e)}
                value={props.batter}
            />
            <input
                type="text"
                name="toppings"
                onChange={(e) => props.handleChange(props.toppings, e)}
                onMouseOut={(e) => props.updateWaffle(props.toppings, e)}
                value={props.toppings}
            />
            <input
                type="text"
                name="preferredCrispness"
                onChange={(e) => props.handleChange(props.preferredCrispness, e)}
                onMouseOut={(e) => props.updateWaffle(props.preferredCrispness, e)}
                value={props.preferredCrispness}
            />
            <input
                type="text"
                name="imgLink"
                onChange={(e) => props.handleChange(props.imgLink, e)}
                onMouseOut={(e) => props.updateWaffle(props.imgLink, e)}
                value={props.imgLink}
            />
            
            
            <DeleteButton
                onClick={() => props.deleteWaffle(props.waffle)}
            >
                Delete waffle
            </DeleteButton>
            </div>
            </div>
        );
    }
}

export default Waffle;





