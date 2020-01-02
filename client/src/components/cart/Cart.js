import React, {Component} from 'react';
import {connect} from 'react-redux'
import CheckOut from './CheckOut'
import {logActivity} from "../UserFunctions";


class Cart extends Component {
    render() {

        const priceArr = this.props.cart.map(a => a.price * a.quantity);
        console.log(this.props.cart);


        return (

            <div>

                <div>
                    <h1 className="text-center text-white d-inline d-lg-block site-heading"><span
                        className="text-primary site-heading-upper mb-3"
                        style={{paddingTop: '13px', paddingBottom: '0px'}}>your</span><span
                        className="site-heading-lower">shopping cart</span></h1>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>

                            <tr>
                                <th style={{width: '423px', color: 'rgb(230, 167, 86)'}}>Item</th>
                                <th style={{width: '138px', color: 'rgb(230, 167, 86)'}}>Quantity</th>
                                <th style={{width: '128px', color: 'rgb(230, 167, 86)'}}>Price</th>
                                <th style={{width: '128px', color: 'rgb(230, 167, 86)'}}>Add/Remove</th>
                                <th style={{width: '419px'}}/>
                            </tr>
                            </thead>

                            <tbody>
                            {

                                (this.props.cart.sort((a, b) => a < b).map)(item =>
                                    <tr>
                                        <td style={{color: 'white'}}>{item.artist} - {item.title}</td>
                                        <td style={{color: 'white'}}>{item.quantity}</td>
                                        <td style={{color: 'white'}}>${item.price}</td>
                                        <td>
                                            <div className="btn-group" role="group">
                                                <button className="btn btn-outline-primary" type="button"
                                                        onClick={() => this.props.addToCart(item)}>+
                                                </button>
                                                <button className="btn btn-outline-primary" type="button"
                                                        onClick={() => this.props.removeFromCart(item)}>-
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-primary" type="button"
                                                    onClick={() => this.props.removeAllFromCart(item)}>Remove all
                                                from cart
                                            </button>
                                        </td>
                                    </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p style={{color: 'rgb(187, 221, 255)'}}>Total of : {priceArr.reduce((a, b) => a + b, 0)} $</p>
                    </div>

                    {this.props.cart.length > 0 ?
                        <CheckOut totalSum={priceArr.reduce((a, b) => a + b, 0)}
                                  clearCart={() => (this.props.cart.map)(item => this.props.clearCartAfterPurchase(item))}/>
                        : <h1> </h1>
                    }
                </div>


            </div>


        );
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item});
            logActivity('Added ' + item.title + ' - ' + item.artist + ' to cart');

        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item});
            logActivity('Removed ' + item.title + ' - ' + item.artist + ' from cart');
        },

        removeAllFromCart: (item) => {
            dispatch({type: 'REMOVE_ALL', payload: item});
                logActivity('Removed all ' + item.title + ' - ' + item.artist + ' items in cart');

        },
        clearCartAfterPurchase: (item) => {
            dispatch({type: 'REMOVE_ALL', payload: item});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);