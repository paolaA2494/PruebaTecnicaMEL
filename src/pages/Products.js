import React, { Component } from "react";
import Search from "../components/Search";
import "../styles/Products.scss";
import axios from "axios";
import free_shipping from "../assets/images/ic_shipping.png";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  peticionGet() {
    axios
      .get("http://localhost:8080/sites")
      .then((res) => {
        this.setState({
          data: res.data.items,
        });
        console.log(this.state.data);
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
        <div className="products--routerIndicator">rutas</div>
        <div className="products--container">
          {this.state.data.map((product) => {
            return (
              <>
                <div className="products--container__cards" key={product.id}>
                  <img className="products--container__cards--img"src={product.picture} alt="image_product" />
                  <div className="products--container__cards--mainInfo">
                    <label className="products--container__cards--mainInfo-text">
                      <strong>{`$  ${product.price.amount}`}  {product.free_shipping === true ? (
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
