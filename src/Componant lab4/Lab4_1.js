import React, { useState, useEffect } from 'react';

import {products_data} from "./ProductData";
import TwoButton from "../Componant lab2/TwoButton";

const Lab4_1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     
        setProducts(products_data);
     
    };

    fetchData();
  }, []);

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
};


export default Lab4_1;