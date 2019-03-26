import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const PrimaryButton = styled.button`
    color: #222;
    font-weight: bold;
    cursor: pointer;
    border-radius: 12px;
    padding: 16px;
    font-size: 1em; 
    `;

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
        axios.get('/api/v1').then(res => {
            console.log(res)
            this.setState({ users: res.data })

        })
    }

    createUser = () => {
        axios.post('/api/v1', { user: this.state.user })
            .then(res => {
                console.log(res.data)
                this.setState({ redirectToHome: true, createdUser: res.data })
            })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/v1/${userId}`).then(res => {
            const copiedUsers = [...this.state.users]
            const filteredUsers = copiedUsers.filter(user => user._id !== res.data._id)
            this.setState({ users: filteredUsers, redirectToHome: true })
        })

    }


    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to={{
                pathname: "/"
            }}
            />)
        }
        return (
            <div>
                <h1>Waffle Enthusiasts</h1>
                {
                    this.state.users.map(user => {
                        return (
                            <div>
                                <Link
                                    to={`/users/${user._id}/waffles`}
                                >
                                    {user.userName}
                                </Link>
                                <PrimaryButton>
                                    <button onClick={this.deleteUser}>Delete</button>
                                </PrimaryButton>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default User;








