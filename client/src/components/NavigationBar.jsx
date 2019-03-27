import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import axios from 'axios'

const Wrapper = styled.div`
    background-color: #B41F0D;
    height: 40px;
    color: white;
    text-decoration: none;

    a {
    color: white;
    text-decoration: none;
    font-family: 'Pacifico', cursive;
    font-size: 25px;
    cursor: pointer
    }
    `

// const thisLink = styled.a`
//     color: white;
//     text-decoration: none;
//     `;


class NavigationBar extends Component {
    render() {
        return (
            <Wrapper>
                <a href="/">Home</a>
            </Wrapper>
        )
    }
}

export default NavigationBar