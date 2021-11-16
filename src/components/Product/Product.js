import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
   console.log(props.product.key);
    const {img, name,seller,price,stock,key}= props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                  <h2 className="product-name"> <Link to={"/"+key}>{name}</Link> </h2>
                  <br />
                  <p><small>By:{seller}</small> </p>
                  <p>${price}</p>
                  <br />
                  <p><small>Only {stock} left in stoke - order soon </small></p>
                  <button className="main-button" onClick={()=>props.handleProduct(props.product)}
                  ><FontAwesomeIcon icon={ faShoppingCart }/> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;