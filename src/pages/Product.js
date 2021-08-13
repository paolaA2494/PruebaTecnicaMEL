import React, { Component } from 'react';
import '../styles/Product.scss';
import axios from "axios";



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
            <div className="routerIndicator">Producto / {this.state.dataDeatils.title}</div>

              <div className="product-container">                                                                              
                 <div className="product-container__mainInfo" key={this.state.dataDeatils.id}>
                    <img className="product-container__mainInfo--img" src={this.state.dataDeatils.picture} alt="image_product" />
                    <div className="product-container__mainInfo-content">
                         <label className="product-container__mainInfo-content--title">Descripción del producto</label>
                         <span className="product-container__mainInfo-content--text">{this.state.dataDeatils.description}</span>
                     </div>
                </div>
                <div className="product-container__mainActions">
                  <span className="product-container__mainActions--condition">{`${this.state.dataDeatils.condition} - ${this.state.dataDeatils.sold_quantity} vendidos`}</span>
                  <label  className="product-container__mainActions--title">{this.state.dataDeatils.title}</label>
                  <h1  className="product-container__mainActions--price"> {`$ ${this.state.dataDeatils.price.amount} ${this.state.dataDeatils.price.currency}`}</h1>
                  <button className="product-container__mainActions--button">Comprar</button>
                </div>
              </div>
          </div>
        );
    }
}

export default Product;