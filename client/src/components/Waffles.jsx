import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

// const DeleteButton = styled.button`
//     background-color: tomato;
//     color: #eee;
//     font-weight: bold;
//     cursor: pointer;
//     padding: 15px;
//     font-size: 1em;
//     `;

const FormWaffle = styled.div`
    font-family: 'Domine', serif;
    justify-content: space-around;
`;

const FancyFont = styled.div`
    font-family: 'Pacifico', cursive;
`;

class Waffles extends Component {
    state = {
        waffles: [],
        newWaffle: {
            batter: '',
            toppings: '',
            preferredCrispness: '',
            preferredLocation: '',
            imgLink: ''
        },
        isWaffleFormDisplayed: false
    }


    componentDidMount = () => {
        const userId = this.props.match.params.userId
        console.log(userId)
        axios.get(`/api/v1/${userId}/waffles`).then(res => {
            console.log(res.data)
            this.setState({ waffles: res.data })
        })

        console.log(this.state.waffles)
    }


    toggleWaffleForm = () => {
        this.setState((state, props) => {
            return ({ isWaffleFormDisplayed: !state.isWaffleFormDisplayed })
        })
    }

    createWaffle = (e) => {
        e.preventDefault()
        const payload = this.state.newWaffle
        console.log(payload)
        const userId = this.props.match.params.userId
        axios
            .post((`/api/v1/${userId}/waffles`, payload), {
                // toppings: this.state.waffle.toppings,
                // batter: this.state.waffle.batter,
                // preferredLocation: this.state.waffle.preferredLocation,
                // preferredCrispness: this.state.waffle.preferredCrispness,
                // imgLink: this.state.waffle.imgLink
            })
            .then(res => {
                const wafflesList = [...this.state.waffles]
                wafflesList.unshift(res.data)
                this.setState({
                    newWaffle: {
                        batter: '',
                        toppings: '',
                        preferredCrispness: '',
                        preferredLocation: '',
                        imgLink: ''
                    },
                    isWaffleFormDisplayed: false,
                    waffles: wafflesList
                })
            })
            // .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const newWaffle = { ...this.state.waffle }
        
        newWaffle[e.target.name] = e.target.value
       
        this.setState({ newWaffle: newWaffle })
        
    }

    updateWaffle = (waffle, e) => {
        const userId = this.props.match.params.userId
        axios.patch(`/api/v1/users/${userId}/waffles/${waffle._id}`, { waffle }).then(res => {
            this.setState({ waffless: res.data.waffles })
        })
    }
    render() {
        return (
            <div>
                <FancyFont><h1>Waffles</h1></FancyFont>
                {
                    this.state.waffles.map(waffle => {
                        return (
                            <div key={waffle._id}>
                                <Link
                                    to={`/${waffle._id}`}
                                >
                                    {waffle.batter}
                                </Link>
                            </div>
                        )
                    })
                }
                <FormWaffle>
                    <button onClick={this.toggleWaffleForm}>+ New Waffle</button>
                    
        
                    {
                        this.state.isWaffleFormDisplayed
                            ? <form onSubmit={this.createWaffle}>

                                <div>
                                    <label htmlFor="batter">Batter</label>
                                    <input
                                        id="batter"
                                        type="text"
                                        name="batter"
                                        defaultValue={this.state.newWaffle.batter}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="toppings">Toppings</label>
                                    <input
                                        id="toppings"
                                        type="text"
                                        name="toppings"
                                        defaultValue={this.state.newWaffle.toppings}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="preferredCrispness">Crispness</label>
                                    <input
                                        id="preferredCrispness"
                                        type="text"
                                        name="preferredCrispness"
                                        defaultValue={this.state.newWaffle.preferredCrispness}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="preferredLocation">Location</label>
                                    <input
                                        id="preferredLocation"
                                        type="text"
                                        name="preferredLocation"
                                        defaultValue={this.state.newWaffle.preferredLocation}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imgLink">Waffle pics</label>
                                    <input
                                        id="imgLink"
                                        type="text"
                                        name="imgLink"
                                        defaultValue={this.state.newWaffle.preferredLocation}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button>Create</button>
                            </form>
                            : null
                    }
                </FormWaffle>
            </div>
        )
    }
}

export default Waffles;