import React from 'react';


import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, addToCart}) => {

    const {name, img, price, seller, ratings} = product
    return (
        <div className='product'>
            <div className='img'>
            <img src={img} alt="" />
            </div>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='price'>Price : ${price}</p>
            <p>Manufacture : {seller}</p>
            <p>Rating : {ratings} stars</p>
            </div>
            <button className='btnn' onClick={()=> addToCart(product)}>
                <p>Add to cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
                
            </button>
        </div>
    );
};

export default Product;