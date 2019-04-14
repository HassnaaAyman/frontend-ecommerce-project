import React, { Component } from 'react';
import '../App.css';
import { login, register } from "../Api/user"

class UserForm extends Component {

    loginHandler = async (e) => {
        e.preventDefault();
        const { username: { value: username }, password: { value: password } } = e.target.elements;
        const res = login({ username, password }).then(res => {
            console.log(res.data.user._id);
            this.props.history.push('./product-list');
        });
        alert('you are authenticated');
    }

    registerHandler = async (e) => {
        e.preventDefault();
        const { username: { value: username }, password: { value: password }, email: { value: email } } = e.target.elements;
        const res = await register({ username, password, email });
        alert('you are registerd');
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2> Register Form </h2>
                    <form onSubmit={this.registerHandler} >
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit" >Register </button>
                    </form>

                    <h2> Login Form </h2>
                    <form onSubmit={this.loginHandler} >
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit" >login</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default UserForm;
