import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import User from './User';

const WaffleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    `;

const WaffleLogo = styled.div`
    color: white;
    font-size: 130px;
    font-family: 'Pacifico', cursive;
`;

const FormWaffle = styled.div`
    font-family: 'Domine', serif;
    justify-content: space-around;
`;

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

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({users: res.data})
        })
    }

    createUser = () => {
        axios.post('/api/v1', {user: this.state.user})


        .then((res) => {
                const copiedUsers = [...this.state.users]
                copiedUsers.push(res.data)
               
                console.log(res)
            
         
                this.setState({redirectToHome: true, createdUser: res.data, users: copiedUsers})
            })
    }

    handleChange = (e) => {
        const newUser = {...this.state.user}
        newUser[e.target.name] = e.target.value
        this.setState({user: newUser})
    }

    handleSignUp = (e) => {
        e.preventDefault()
        this.createUser()
    }

render() {
    if(this.state.redirectToHome === true) {
        return (<Redirect to={`/${this.state.createdUser._id}`} />)
    }

    return (
       
        <WaffleWrapper>
            <WaffleLogo>
                <h1>Wafflemania</h1>  
            </WaffleLogo>

        <FormWaffle>
        <h4>Sign Up</h4>
        <form onSubmit={this.handleSignUp}>
            <div>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    value={this.state.user.userName}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.user.password}
                />
            </div>
            <button>Create User</button>
        </form>
        </FormWaffle>
    </WaffleWrapper>
    
)
}
}


export default UserLogin;