import React, { Component } from 'react';

import twitterlogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    state = {
        username: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        //DESESTRUTURACAO ES6
        const { username } = this.state;
        if (!username.length) return;
        localStorage.setItem('@GoTwitter:username', username);
        this.props.history.push('/timeline');
    };

    handleInputChange = (event) => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterlogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Nome do usuario" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}