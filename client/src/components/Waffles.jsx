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

    handleChange = (e) => {
        const cloneNewWaffle = { ...this.state.newWaffle }
        cloneNewWaffle[e.target.name] = e.target.value
        this.setState({ newWaffle: cloneNewWaffle })
    }



    createWaffle = () => {
        const userId = this.props.match.params.userId
        axios.post((`/api/v1/users/${userId}/waffles`), {
            batter: this.state.waffle.batter,
            toppings: this.state.waffle.toppings,
            preferredCrispness: this.state.waffle.preferredCrispness,
            imgLink: this.state.waffle.imgLink,
        })
            .then(res => {
                const wafflesList = [...this.state.waffles]
                wafflesList.unshift(res.data)
                this.setState({
                    newWaffle: {
                        batter: '',
                        toppings: '',
                        preferredCrispness: '',
                        imgLink: ''
                    },
                    isWaffleFormDisplayed: false,
                    waffles: wafflesList
                })
            })
    }

    handleChange = (e) => {
        const newWaffle = { ...this.state.waffle }
        newWaffle[e.target.name] = e.target.value
        this.setState({ waffle: newWaffle })
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
              {/* <h1>Waffles</h1>  */}
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
                                    onChange={this.handleChange}
                                    value={this.state.newWaffle.batter}
                                />
                            </div>
                            <div>
                                <label htmlFor="toppings">Toppings</label>
                                <input
                                    id="toppings"
                                    type="text"
                                    name="toppings"
                                    onChange={this.handleChange}
                                    value={this.state.newWaffle.toppings}
                                />
                            </div>
                            <div>
                                <label htmlFor="preferredCrispness">Crispness</label>
                                <input
                                    id="preferredCrispness"
                                    type="text"
                                    name="preferredCrispness"
                                    onChange={this.handleChange}
                                    value={this.state.newWaffle.preferredCrispness}
                                />
                            </div>
                            <div>
                                <label htmlFor="imgLink">Waffle pics</label>
                                <input
                                    id="imgLink"
                                    type="text"
                                    name="imgLink"
                                    onChange={this.handleChange}
                                    value={this.state.newWaffle.imgLink}
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