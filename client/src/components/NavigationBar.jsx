import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import axios from 'axios'

const Wrapper = styled.div`
    background-color: #B41F0D;
    height: 60px;
    color: white;
    text-decoration: none;

    a {
    color: white;
    text-decoration: none;
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