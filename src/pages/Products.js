import React, { Component } from "react";
import "../styles/Products.scss";
import axios from "axios";
import free_shipping from "../assets/images/ic_shipping.png";
import { Link } from "react-router-dom";


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  peticionGet() {
    axios
      .get("https://api-fake-meli.vercel.app/items")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="products">
        <div className="routerIndicator">Productos</div>
        <div className="products-container">
          {this.state.data.map((product) => {
            return (
              <>
              <Link className="products-container--link" to={`/product/${product.id}`}>
                <div className="products-container__card" key={product.id}>
                  <img className="products-container__card--img"src={product.picture} alt="image_product" />
                  <div className="products-container__card--mainInfo">
                    <label className="products-container__card--mainInfo-price">
                      <strong>{`$  ${product.price.amount}`} {product.price.currency} {product.free_shipping ? (
                      <img src={free_shipping} alt="free_shipping" />
                    ) : (
                      <></>
                    )}</strong>
                    </label>
                    <span className="products-container__card--mainInfo-title">{product.title}</span>
                  </div>
                  <span className="products-container__card--ubication">{product.ubication}</span>
                </div>
                </Link>
                <hr></hr>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
