import React, { Component } from 'react';
import Search from '../components/Search';
import '../styles/Product.scss';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="product">
                 <Search />
            </div>
        );
    }
}

export default Product;