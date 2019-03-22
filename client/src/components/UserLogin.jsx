import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class UserLogin extends Component {
    state = {
        users: [],
        user: {
            userName: '',
            password: '',
        }, 
        redirecToHome: false,
        createdUser: {}
    }
    render() {
        if(this.state.redirecToHome === true) {
            return (<Redirect to={`/${this.state.createdUser._id}`}/> )
        }
        return (
            <div>
                <h1>Wafflemania</h1>
                
            </div>
        );
    }
}

export default UserLogin;