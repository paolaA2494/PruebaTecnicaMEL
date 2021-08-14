import React, { Component } from "react";
import "../styles/Products.scss";
import logo from "../assets/images/Logo_ML.png";
import axios from "axios";
import iconSearch from "../assets/images/ic_SearchG.png";
import ProductList from "../components/ProductList";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      data: [],
    };
  }

  handleChange =  (e) => {
    this.setState({ searchWord: e.target.value });
    this.searchingTitle();
  };

  async getProducts() {
    await axios.get("https://api-fake-meli.vercel.app/items")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  searchingTitle = () => {
    let searchTitle = this.state.data.filter((item) => {
      if (
        item.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.searchWord) ||
        item.title.toLowerCase().includes(this.state.searchWord)
      ) {
        return item;
      }
    });
    this.setState({ data: searchTitle });
  };

  componentDidMount() {
    this.getProducts();
  }

 
  render() {

    const changeValue = this.state.searchWord;
    return (
      <div className="products">
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
        <div className="routerIndicator">Productos / {this.state.searchWord}</div>
        <ProductList data={this.state.data} />
      </div>
    );
  }
}

export default Products;
