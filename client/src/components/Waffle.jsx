import React, { Component } from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FancyFont = styled.div`
    font-family: 'Pacifico', cursive;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

 



class Waffle extends Component {
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

 updateWaffle = (waffle, e) => {
        const userId = this.props.match.params.userId
        axios.patch(`/api/v1/users/${userId}/waffles/${waffle._id}`, { waffle }).then(res => {
            this.setState({ waffless: res.data.waffles })
        })
    }


    render() {
        return (
            <FancyFont>
                <h1>Hi from a single waffle</h1>
            </FancyFont>
        );
    }
}

export default Waffle;





