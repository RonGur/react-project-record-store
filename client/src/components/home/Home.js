import React, {Component} from 'react';
import Product from './Product'
import ProductList from './ProductList'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {Form, FormControl, Button} from 'react-bootstrap';

import SearchedProduct from './SearchedProduct'
import NavBar from "../NavBar";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedItem: '',
            new_searchedItem: '',

        }
    }

    changeSearchedItem() {
        this.setState({searchedItem: this.state.new_searchedItem})
    }

    clearSearch(){
        this.setState({searchedItem: ""});
    }


    render() {
        return (
            <div>
                <h1 className="text-center text-white d-inline d-lg-block site-heading" style={{marginBottom: '259px'}}>
                    <span className="site-heading-lower">record breaker</span><span
                    className="text-primary site-heading-upper mb-3">Do you believe in rock'n'roll?</span></h1>
                <div className="container" style={{marginTop: '71px'}}>
                    <div className="text-center"><a className="d-xl-flex justify-content-xl-start" href="/about-us" style={{
                        fontSize: '33px',
                        marginBottom: '-242px',
                        fontFamily: 'Raleway, sans-serif',
                        marginLeft: '-39px',
                        color: 'rgb(239,219,193)'
                    }}>About Our Store</a></div>
                    <div className={"center"}>
                        <img className={"spin"} src={require('../comp_img/icons/vinyl-icon.png')}
                             style={{width: '500px', margin: '0 auto'}} align="middle"/>
                    </div>
                    <div className="text-center"><a className="d-xl-flex order-1 justify-content-xl-end" href="/record-of-the-month"
                                                    style={{
                                                        fontSize: '33px',
                                                        marginTop: '-303px',
                                                        marginRight: '-23px',
                                                        fontFamily: 'Raleway, sans-serif',
                                                        color: 'rgb(239,219,193)'
                                                    }}>Record of the Month</a></div>
                </div>
                <nav className="navbar navbar-light navbar-expand-md text-break navigation-clean" style={{
                    backgroundColor: 'rgba(255,255,255,0)',
                    padding: '0px',
                    marginBottom: '96px',
                    marginTop: '299px'
                }}>

                    <div className="container">
                        <button className="btn btn-primary btn-block float-left justify-content-between" type="button"
                                style={{height: '71px', filter: 'blur(0px)'}}><Link to={"/cart"}
                                                                                    className="navbar-brand text-secondary"
                                                                                    href="#" style={{
                            color: 'rgb(52,58,64)',
                            fontSize: '32px'
                        }}>Shopping Cart</Link><img
                            className="flex-shrink-1 align-items-center align-content-center mr-auto"
                            src={require('../comp_img/icons/shopping_cart_icon.png')}
                            style={{height: '60px', width: '60px', paddingRight: '0px'}}/></button>
                    </div>
                </nav>

                <Form className={"center"}>
                    <p className="text-white-50">Looking for something?</p>
                    <FormControl placeholder='search for a record by title/artist'
                                 onChange={event => this.setState({new_searchedItem: event.target.value})}
                    />

                    <div className={"center"}>

                        <Button onClick={() => this.changeSearchedItem()}>
                            Search
                        </Button>

                        <Button onClick={() => this.clearSearch()}>
                            Clear Search
                        </Button>
                    </div>
                </Form>

                {this.state.searchedItem !== '' ? <SearchedProduct searched={this.state.searchedItem}/> :
                    <ProductList/>}

            </div>


        );
    }
}


export default Home;
