import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';


import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Article-Clean.css'
import './assets/css/Footer-Basic.css'
import './assets/css/Header-Blue.css'
import './assets/css/Lightbox-Gallery.css'
import './assets/css/Navigation-Clean.css'
import './assets/css/Pricing-Table-with-Icon-Buy-Button.css'
import './assets/css/Pricing-Table-with-Icon-Buy-Button-1.css'
import './assets/css/Registration-Form-with-Photo.css'
import './assets/css/Team-Boxed.css'

import './assets/fonts/font-awesome.min.css'

import Cart from './components/cart/Cart.js';
import Default from './components/Default';
import AboutUs from "./components/AboutUs"
import RecordOfMonth from "./components/RecordOfMonth";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Home from "./components/home/Home"
import {getUsername, isAdmin, isAuthenticated, logOutUser} from "./components/UserFunctions";
import {PrivateRoute} from "./components/PrivateRoute";
import AdminScreen from "./components/AdminScreen";
import {AdminPrivateRoute} from "./components/AdminPrivateRoute";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            loggedUser: '',
            adminMode: false
        };
    }

    componentWillMount() {
        const username = getUsername();
        this.setState({loggedUser: username})
        if (isAuthenticated()) {
            this.setState({isAuthenticated: true});
        }
        if (isAdmin()) {
            this.setState({adminMode: true});
        }
    }

    handleLogOut = () => {
        logOutUser();
        this.resetSessionIfCookieExpired();
    };

    resetSessionIfCookieExpired = () => {
        if (!isAuthenticated()) {
            this.setState({isAuthenticated: false});
            this.setState({adminMode: false});
        }
    };

    render() {

        document.body.style = 'background: #343a40';

        return <React.Fragment>
            <Router>
                {this.state.isAuthenticated &&
                /**** NavBar Component - Show only if user is logged in ****/

                <div>
                    <div>
                        <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{height: '81px'}}>
                            <div className="container">Hello {this.state.loggedUser}! <button data-toggle="collapse"
                                                                                              className="navbar-toggler"
                                                                                              data-target="#navcol-1"><span
                                className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"/>
                            </button>
                                <div className="collapse navbar-collapse" id="navcol-1" style={{
                                    height: '21px',
                                    marginTop: '27px',
                                    backgroundColor: '#ffffff',
                                    width: '449px'
                                }}>
                                    <ul className="nav navbar-nav ml-auto" style={{paddingTop: '0px'}}>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link"
                                               href="/"
                                               onClick={this.handleLogOut}>
                                                Log out</a></li>
                                        {this.state.adminMode &&
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link"
                                               href="/admin-screen"
                                               onClick={this.resetSessionIfCookieExpired}>
                                                Admin Screen</a></li>
                                        }
                                        <li className="nav-item" role="presentation"><Link
                                            to={"/home"}
                                            onClick={this.resetSessionIfCookieExpired}
                                            className="nav-link">
                                            Home</Link></li>
                                        <li className="nav-item" role="presentation"><Link
                                            to={"/about-us"}
                                            onClick={this.resetSessionIfCookieExpired}
                                            className="nav-link">
                                            About Us
                                        </Link></li>
                                        <li className="nav-item" role="presentation"><Link
                                            to={"/record-of-the-month"}
                                            onClick={this.resetSessionIfCookieExpired}
                                            className="nav-link">
                                            Record of the Month
                                        </Link></li>
                                        <li className="nav-item" role="presentation" style={{width: '135px'}}><Link
                                            to={"/cart"} className="nav-link"
                                            onClick={this.resetSessionIfCookieExpired}>
                                            Shopping Cart
                                            <img
                                                className="flex-shrink-1 align-items-center align-content-center mr-auto"
                                                src={require('./components/comp_img/icons/shopping_cart_icon.png')}
                                                style={{
                                                    height: '24px',
                                                    width: '24px',
                                                    paddingRight: '0px',
                                                    marginTop: '-63px',
                                                    marginLeft: '92px',
                                                    filter: 'contrast(0%) hue-rotate(57deg) '
                                                }}/></Link></li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                }

                <Switch>
                    <Route exact path="/" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/home" component={Home}/>
                    <PrivateRoute path="/about-us" component={AboutUs}/>
                    <PrivateRoute path="/cart" component={Cart}/>
                    <PrivateRoute path="/record-of-the-month" component={RecordOfMonth}/>
                    <AdminPrivateRoute path="/admin-screen" component={AdminScreen}/>
                    <Route component={Default}/>
                </Switch>

                {this.state.isAuthenticated &&
                <div className="footer-basic" style={{backgroundColor: 'rgb(52,58,64'}}>

                    <footer>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link
                                to={"/home"}
                                onClick={this.resetSessionIfCookieExpired}
                                style={{color: 'rgb(255,255,255)'}}>Home</Link></li>

                            <li className="list-inline-item"><Link
                                to={"/cart"}
                                onClick={this.resetSessionIfCookieExpired}
                                style={{color: 'rgb(255,255,255)'}}>Cart</Link></li>
                            <li className="list-inline-item"><Link
                                to={"/record-of-the-month"}
                                onClick={this.resetSessionIfCookieExpired} style={{color: 'rgb(255,255,255)'}}>Record
                                of the Month</Link></li>
                            <li className="list-inline-item"><Link
                                to={"/about-us"}
                                onClick={this.resetSessionIfCookieExpired} style={{color: 'rgb(255,255,255)'}}>About
                                Us</Link></li>
                            <li className="list-inline-item"><a style={{color: 'rgb(255,255,255)'}} href="/"
                                                                onClick={this.handleLogOut}>Log
                                Out</a></li>
                        </ul>
                        <p className="copyright">Record Breaker © 2019</p>
                    </footer>
                </div>
                }
            </Router>
        </React.Fragment>;
    }
}

export default App;