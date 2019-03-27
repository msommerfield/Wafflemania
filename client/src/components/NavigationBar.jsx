import React, { Component } from 'react'
import styled from 'styled-components'


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