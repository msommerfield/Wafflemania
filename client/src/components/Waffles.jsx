import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FormWaffle = styled.div`
    display: flex;
    font-family: 'Domine', serif;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    display: flex;
    flex-direction: column;
    font-family: 'Domine', serif;
    color: white;
    align-items: center;
    padding: 20px 20px;
`;

const FancyFont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Pacifico', cursive;
    color: white;
    text-shadow: 2px 2px 4px #000000;
`;

const Pics = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
img {
    /* display: flex; */
    width: 250px;
    height: auto;
    /* justify-content: center;
    align-items: center;
    flex-direction: row; */
}
`;

class Waffles extends Component {
    state = {
        userId: this.props.match.params.userId,
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
        this.getAllWaffles()
    }

    getAllWaffles = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/v1/${userId}/waffles`).then(res => {
            this.setState({ waffles: res.data })
        })
    }

    toggleWaffleForm = () => {
        this.setState((state, props) => {
            return ({ isWaffleFormDisplayed: !state.isWaffleFormDisplayed })
        })
    }

    createWaffle = (e) => {
        e.preventDefault()
        const payload = this.state.newWaffle
        const userId = this.props.match.params.userId
        axios.post(`/api/v1/${userId}/waffles`, payload)
            .then(() => {
                this.getAllWaffles()
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const newWaffle = { ...this.state.newWaffle }
        newWaffle[e.target.name] = e.target.value
        this.setState({ newWaffle: newWaffle })

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
                                 
                                    to={`/${this.state.userId}/waffles/${waffle._id}`}
                                >
                                    <Pics>
                                        <img src={waffle.imgLink}></img>
                                    </Pics>
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
                                        defaultValue={this.state.newWaffle.imgLink}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button>Make that Waffle</button>
                            </form>
                            : null
                    }
                </FormWaffle>
            </div>
        )
    }
}

export default Waffles;