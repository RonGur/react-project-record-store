import React, {Component} from 'react';
import Product from './Product'
import {connect} from 'react-redux'
import data from '../../data-json/products'
import {logActivity} from "../UserFunctions";


class SearchedProduct extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const searchedProduct = data.products.filter(product => (product.title.toLocaleLowerCase() === this.props.searched.toLocaleLowerCase()) || (product.artist.toLocaleLowerCase() === this.props.searched.toLocaleLowerCase()));
        return (

            <div className="team-boxed">

                {searchedProduct.length === 0 ? <h1>sorry, we couldn't find {this.props.searched} in our stock </h1> :

                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">VINYL ON SALE</h2>
                            <p className="text-center">Check out our record collection , carefully chosen by our
                                staff</p>
                        </div>


                        <div className="row people">
                            <Product albumName={searchedProduct[0].title} artistName={searchedProduct[0].artist}
                                     albumCover={require("../comp_img/album_covers/" + searchedProduct[0].cover)}
                                     price={searchedProduct[0].price}
                                     addToCart={this.props.addToCart}
                                     youtube={searchedProduct[0].youtube}
                                     spotify={searchedProduct[0].spotify}
                                     apple={searchedProduct[0].apple}
                                     cartItem={(this.props.cart.filter(cartItem => cartItem.id === searchedProduct[0].id)[0])}
                                     id={searchedProduct[0].id}/>

                        </div>

                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchedProduct)

