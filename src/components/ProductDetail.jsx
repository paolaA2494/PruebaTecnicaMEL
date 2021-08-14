import React, { Component } from 'react';
import '../styles/ProductDetail.scss';


class ProducDetail extends Component {
    

    render() {

        const { data } = this.props;


        return (
        
        
            <div className="product-container">
            <div
              className="product-container__mainInfo"
              key={data.id}
            >
              <img
                className="product-container__mainInfo--img"
                src={data.picture}
                alt="image_product"
              />
              <div className="product-container__mainInfo-content">
                <label className="product-container__mainInfo-content--title">
                  Descripción del producto
                </label>
                <span className="product-container__mainInfo-content--text">
                  {data.description}
                </span>
              </div>
            </div>
            <div className="product-container__mainActions">
              <span className="product-container__mainActions--condition">{`${data.condition} - ${data.sold_quantity} vendidos`}</span>
              <label className="product-container__mainActions--title">
                {data.title}
              </label>
              <h1 className="product-container__mainActions--price">
                {" "}
                {`$ ${data.price.amount} ${data.price.currency}`}
              </h1>
              <button className="product-container__mainActions--button">
                Comprar
              </button>
            </div>
          </div>
        );
    }
}

export default ProducDetail;