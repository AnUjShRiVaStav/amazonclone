import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

function Product({title,image,price,rating})  {

  return(
      <div className="product">
      <div className="product__info">
      <div className="product__p">
      <p>{title}</p>
      </div>
          <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          </p>
          <div className="product__rating">
             
             <p>⭐</p>
              
          </div>
          <img
          src={image}
         alt=""
         />
         <Link to="/checkout">
         <div className="button">
         <button>Add to Card</button>
         </div>
         </Link>


         

      </div>

      </div>
  );

} 
export default Product;
    
