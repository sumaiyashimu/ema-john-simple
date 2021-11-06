
import React from 'react';
import { useState } from 'react/cjs/react.development';
 import {product} from '../../fakeData/product.js';
import Cart from '../Cart/Cart.js';
import Product from '../Product/Product.js';
 import './Shop.css'

const Shop = () => {
    
    const first10 = product.slice(0,10)
    const [products, setProducts] =useState(first10)
    const [cart,setCart]= useState([])
   
    
    const handleAddProduct= (product)=>{

        console.log('product added', product);
        const newcart=[...cart,product];
        setCart(newcart)
    }

    return (
        <div className="shop-container">

            <div className="product-container">
            
                {
                    products.map( pd => <Product
                     product={pd} 
                     handleProduct={handleAddProduct}
                     ></Product> )
                }
            
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
             
            
        </div>
    );
};

export default Shop;