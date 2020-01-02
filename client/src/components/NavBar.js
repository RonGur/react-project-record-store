import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class NavBar extends Component {
    render() {
        const username = this.props.username;
        return (
            <div>
                <div>
                    <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{height: '81px'}}>
                        <div className="container">Hello {username}! <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navcol-1" style={{height: '21px', marginTop: '27px', backgroundColor: '#ffffff', width: '449px'}}>
                                <ul className="nav navbar-nav ml-auto" style={{paddingTop: '0px'}}>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/">Log out</a></li>
                                    <li className="nav-item" role="presentation"><Link to={"/home"} className="nav-link">Home</Link></li>
                                    <li className="nav-item" role="presentation"><Link to={"/about-us"} className="nav-link" >About Us</Link></li>
                                    <li className="nav-item" role="presentation"><Link to={"/record-of-month"} className="nav-link">Record of the Month</Link></li>
                                    <li className="nav-item" role="presentation" style={{width: '135px'}}><Link to={"/cart"} className="nav-link">Shopping Cart<img className="flex-shrink-1 align-items-center align-content-center mr-auto" src={require('./comp_img/icons/shopping_cart_icon.png')} style={{height: '24px', width: '24px', paddingRight: '0px', marginTop: '-63px', marginLeft: '92px', filter: 'contrast(0%) hue-rotate(57deg) '}} /></Link></li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        );
    }
}

export default NavBar;