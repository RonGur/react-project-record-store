import React, {Component} from 'react';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import {login} from "./UserFunctions";



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
            remember: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        const UserToVerify = {
            username: this.state.username,
            password: this.state.password,
            remember_me: this.state.remember_me
        }
        login(UserToVerify)
            .then(res => window.location = '/home')
            .catch(err => alert(err.message));
    }


    render() {
        return (
                <div>
                    <div>
                        <h1 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3">welcome&nbsp;</span><span className="site-heading-lower">record breaker</span></h1>
                        <div className="container" style={{backgroundColor: '#ffffff', width: '896px', minWidth: 141, maxWidth: '1247px', height: '400px', padding: '27px', borderRadius: '25px',marginBottom:'40px'}}>
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center" style={{height: '52px', minHeight: '0px'}}><strong>Sign in</strong> with your Record Breaker account.</h2>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="username"
                                        placeholder="Username"
                                        value = {this.state.username}
                                        onChange = {this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value = {this.state.password}
                                        onChange = {this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />Remeber Me</label></div>
                                </div>
                                <div className="form-group">
                                    <button
                                        className="btn btn-primary btn-block"
                                        type="submit"
                                    >
                                        Log in
                                    </button>
                                </div>
                                <a className="donthave" href="/" style={{paddingLeft: 300}}>Don't have an account? Register here.</a></form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;