import React, {Component} from 'react';
import CartItem from '../database-objects_def/CartItem'
import data from '../../data-json/products'

class Product extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const product = data.products.filter(product => product.id === this.props.id)[0];
        return (

            <div className="col-md-6 col-lg-4 item">
                <div className="box" style={{height: '601px'}}>
                    <h1>{product.title}</h1>
                    <p style={{fontSize: '26px', marginTop: '9px'}}>{product.artist}</p><img className="rounded img-fluid" src={require("../comp_img/album_covers/" + product.cover)} style={{maxWidth: '247px'}} /><span className="text-center d-block price" style={{color: 'rgb(226,95,72)', fontSize: '25px'}}><strong>${product.price}</strong></span>

                    <button
                        onClick={()=>this.props.addToCart(new CartItem(product.id,product.title,product.artist,this.props.albumCover, product.price))}
                        className="btn btn-primary" type="button">Add to cart({
                        (this.props.cartItem && this.props.cartItem.quantity) || 0

                    })
                    </button>


                </div>
                <div className="social" style={{marginTop: '-62px'}}><a href={product.spotify} target="_blank" rel="noopener noreferrer"><i className="fa fa-spotify" /></a><a href={product.youtube} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play" /></a><a href={product.apple} target="_blank" rel="noopener noreferrer"><i className="fa fa-apple" /></a></div>

            </div>

        );
    }
}

export default Product;