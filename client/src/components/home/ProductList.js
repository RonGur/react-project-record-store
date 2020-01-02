import React, {Component} from 'react';
import Product from './Product'
import {connect} from 'react-redux'
import {logActivity} from "../UserFunctions";




class ProductList extends Component {


    render() {
        return (

                <div className="team-boxed">


                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">VINYL ON SALE</h2>
                            <p className="text-center">Check out our record collection , carefully chosen by our
                                staff</p>
                        </div>


                        <div className="row people">

                            <Product
                                     addToCart={this.props.addToCart}
                                     cartItem={(this.props.cart.filter(cartItem => cartItem.id === 1)[0])} id={1} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 2)[0])} id={2} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 3)[0])} id={3} />

                        </div>

                        <div className="row people">

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 4)[0])} id={4} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 5)[0])} id={5} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 6)[0])} id={6} />

                        </div>

                        <div className="row people">

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 7)[0])} id={7} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 8)[0])} id={8} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 9)[0])} id={9} />

                        </div>

                        <div className="row people">

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 10)[0])} id={10} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 11)[0])} id={11} />

                            <Product
                                addToCart={this.props.addToCart}
                                cartItem={(this.props.cart.filter(cartItem => cartItem.id === 12)[0])} id={12} />

                        </div>


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
            logActivity('Added ' +  item.title + ' - ' + item.artist + ' to cart');

        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item});
            logActivity('Removed ' +  item.title + ' - ' + item.artist + ' from cart');
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
