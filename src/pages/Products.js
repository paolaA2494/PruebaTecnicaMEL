import React, { Component } from "react";
import Search from "../components/Search";
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
        <Search />
        <div className="products--routerIndicator">Productos</div>
        <div className="products--container">
          {this.state.data.map((product) => {
            return (
              <>
                <div className="products--container__cards" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img className="products--container__cards--img"src={product.picture} alt="image_product" />
                </Link>
                  <div className="products--container__cards--mainInfo">
                    <label className="products--container__cards--mainInfo-text">
                      <strong>{`$  ${product.price.amount}`}  {product.free_shipping ? (
                      <img src={free_shipping} alt="free_shipping" />
                    ) : (
                      <></>
                    )}</strong>
                    </label>
                    <span>{product.title}</span>
                  </div>
                  <span className="products--container__cards--ubication">{product.ubication}</span>
                </div>
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
