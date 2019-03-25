import React, { Component } from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'

class User extends Component {
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
            .then(res => {
                console.log(res.data)
                this.setState({redirectToHome: true, createdUser: res.data})
            })
    }



    render() {
        return (
            <div>
                <h1>Users</h1>
                this.state.users
            </div>
        );
    }
}

export default User;





  
  

