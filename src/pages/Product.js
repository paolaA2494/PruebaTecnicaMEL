import React, { Component } from 'react';
import Search from '../components/Search';
import '../styles/Product.scss';
import axios from "axios";
import free_shipping from "../assets/images/ic_shipping.png";



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
              decimals: ""
            },
            picture: "",
            condition: "",
            free_shipping: Boolean,
            sold_quantity: "",
            ubication: "",
            description: ""
           }
        }
    }


    componentDidMount() {
        this.getDetails();
      }
    
      getDetails = async () => {
        try {

        const { match: { params: { id }} } = this.props;
          const  {data}  = await axios.get(`https://api-fake-meli.vercel.app/items/${id}`);
          this.setState({
            dataDeatils: data,
          });
        } catch (error) {}
      };


    render() {

        return (                                                                                                   
          <div className="product">
                 <Search />
            <div className="product--routerIndicator">Producto / {this.state.dataDeatils.title}</div>
              <div className="product--container">                                                                              
                 <div className="product--container__cards" key={this.state.dataDeatils.id}>
                  <img className="product--container__cards--img"src={this.state.dataDeatils.picture} alt="image_product" />
                  <div className="product--container__cards--mainInfo">
                    <label className="product--container__cards--mainInfo-text">
                      <strong>{`$  ${this.state.dataDeatils.price.amount}`}  {this.state.dataDeatils.free_shipping ? (
                      <img src={free_shipping} alt="free_shipping" />
                    ) : (
                      <></>
                    )}</strong>
                    </label>
                    <span>{this.state.dataDeatils.title}</span>
                  </div>
                  <span className="product--container__cards--ubication">{this.state.dataDeatils.ubication}</span>
                </div>
              </div>
          </div>
        );
    }
}

export default Product;