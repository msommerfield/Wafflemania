import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FancyFont = styled.div`
    font-family: 'Pacifico', cursive;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pics = styled.div`
img {
    width: 250px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;



class Waffle extends Component {
    state = {
        waffle: {
            batter: '',
            toppings: '',
            preferredCrispness: '',
            preferredLocation: '',
            imgLink: ''
        },
        isWaffleFormDisplayed: false,
        redirect: false
    }

    componentDidMount = () => {
        axios.get(`/api/v1/${this.props.match.params.userId}/waffles/${this.props.match.params.waffleId}`)
            .then(res => {
                this.setState({
                    waffle: res.data
                })
            })
    }

    _handleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const waffle = { ...this.state.waffle };
        waffle[attributeName] = attributeValue;
        this.setState({ waffle })
};
    updateWaffle = (event) => {
        event.preventDefault()
        const payload = this.state.waffle
        const userId = this.props.match.params.userId
        const waffleId = this.props.match.params.waffleId
        axios
            .put(`/api/v1/${userId}/waffles/${waffleId}`, payload)
            .then((res => {
                console.log('submitting')
                this.setState({redirect: true})
            }))
            .catch(err => console.log(err))
            this.props.history.goBack()
    }

    deleteWaffle = async () => {
        const userId = this.props.match.params.userId
        console.log(userId)
        const waffleId = this.props.match.params.waffleId
        console.log(waffleId)
        await axios.delete(`/api/v1/${userId}/waffles/${waffleId}`)
        this.setState({ redirect: true })
        console.log("CLICK CLICK BOOM")
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={`/${this.props.match.params.userId}/waffles`}/>
        }
        return (
            
            <div>
                <FancyFont>
                    <h1>All the single waffles</h1>
                </FancyFont>
                <div>{this.state.waffle.batter}</div>
                <div>{this.state.waffle.toppings}</div>
                <div>{this.state.waffle.preferredCrispness}</div>
                <div>{this.state.waffle.preferredLocation}</div>
                <Pics>
                    <img src={this.state.waffle.imgLink}></img>
                </Pics>
                <div>
                <form>
                <div>
                    <label htmlFor="batter">Batter: </label>
                    <input 
                    value={this.state.waffle.batter} 
                    type="text" 
                    name="batter" 
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="toppings">Toppings</label>
                    <input
                    value={this.state.waffle.toppings}
                    type="text"
                    name="toppings"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="preferredCrispness">Preferred Crispness:</label>
                    <input
                    value={this.state.waffle.preferredCrispness}
                    type="text"
                    name="preferredCrispness"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="preferredLocation">Get this waffle at:</label>
                    <input
                    value={this.state.waffle.preferredLocation}
                    type="text"
                    name="preferredLocation"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="imgLink">Image Link: </label>
                    <input
                    value={this.state.waffle.imgLink}
                    type="text"
                    name="imgLink"
                    onChange={this._handleChange}
                    />
            </div>
            <button type="submit" onClick={this.updateWaffle}>Submit</button>
                </form>
                
            </div>
            <button onClick={this.deleteWaffle}>Delete Waffle</button>
            </div>
        )
    }
}


export default Waffle;





