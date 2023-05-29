import React, { Component } from 'react';
// import './Componant lab3/Comp.css'
import products from "./ProductData";
import TwoButton from "../Componant lab2/TwoButton";

class Products_card extends Component {
  render() {
    return (
      <div className="product" >
        {products.map((product) => (
          <div  className="card" key={product.id}>
            <div className="image" style={{backgroundImage: `url(${product.img})`, height: "200px", backgroundSize: "cover"}}></div>
            <div>
              <h2>{product.name}</h2>
              <div>{product.price} $</div>
              <div>{product.description}</div>
              <div>{product.category}</div>
              <TwoButton/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Products_card;