import React, { Component } from "react";
import "../styles/Product.scss";
import axios from "axios";
import logo from "../assets/images/Logo_ML.png";
import iconSearch from "../assets/images/ic_SearchG.png";
import ProductDetail from "../components/ProductDetail";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDeatils: {
        id: "",
        title: " ",
        price: {
          currency: "",
          amount: "",
          decimals: "",
        },
        picture: "",
        condition: "",
        free_shipping: Boolean,
        sold_quantity: "",
        ubication: "",
        description: "",
      },
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    try {
      const {
        match: {
          params: { id },
        },
      } = this.props;
      const { data } = await axios.get(
        `https://api-fake-meli.vercel.app/items/${id}`
      );
      this.setState({
        dataDeatils: data,
      });
    } catch (error) {}
  };

  render() {
    return (
      <div className="product">

        
        <div className="search">
          <div className="search-content">
            <div className="search-content__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search-content__searhbar">
              <input
                className="search-content__searhbar--input"
                placeholder="Nunca dejes de buscar"
                name="searchWord"
                value={this.state.searchWord}
                onChange={(changeValue) => this.handleChange(changeValue)}
              />
              <button className="search-content__searhbar--icon">
                <img src={iconSearch} alt="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="routerIndicator">
          Producto / {this.state.dataDeatils.title}
        </div>
        <ProductDetail data = {this.state.dataDeatils} />
      </div>
    );
  }
}

export default Product;
