import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const DeleteButton = styled.button`
    background-color: tomato;
    color: #eee;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 1em;
    `

class Waffles extends Component {
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


    componentDidMount = () => {
        this.getAllWaffles()
    }

    getAllWaffles = () => {
        const userId = this.props.match.params.userId

        axios.get(`/api/${userId}/waffles`).then(res => {
            this.setState({ waffles: res.data })
        })
    }

    createWaffle = () => {
        axios.post('/api/v1', { waffle: this.state.waffle })
            .then(res => {
                console.log(res.data)
                this.setState({ redirectToHome: true, createdWaffle: res.data })
            })
    }

    handleChange = (e) => {
        const newWaffle = { ...this.state.waffle }
        newWaffle[e.target.name] = e.target.value
        this.setState({ waffle: newWaffle })
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
                        onChange={(e) => this.props.handleChange(this.props.batter, e)}
                        onMouseOut={(e) => this.props.updateWaffle(this.props.batter, e)}
                        value={this.props.batter}
                    />
                    <input
                        type="text"
                        name="toppings"
                        onChange={(e) => this.props.handleChange(this.props.toppings, e)}
                        onMouseOut={(e) => this.props.updateWaffle(this.props.toppings, e)}
                        value={this.props.toppings}
                    />
                    <input
                        type="text"
                        name="preferredCrispness"
                        onChange={(e) => this.props.handleChange(this.props.preferredCrispness, e)}
                        onMouseOut={(e) => this.props.updateWaffle(this.props.preferredCrispness, e)}
                        value={this.props.preferredCrispness}
                    />
                    <input
                        type="text"
                        name="imgLink"
                        onChange={(e) => this.props.handleChange(this.props.imgLink, e)}
                        onMouseOut={(e) => this.props.updateWaffle(this.props.imgLink, e)}
                        value={this.props.imgLink}
                    />


                    <DeleteButton
                        onClick={() => this.props.deleteWaffle(this.props.waffle)}
                    >
                        Delete waffle
            </DeleteButton>
                </div>
            </div>
        );
    }
}

export default Waffles;