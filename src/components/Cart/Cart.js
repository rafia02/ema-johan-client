import React from 'react';
import './Cart.css'

const Cart = ({cart, children}) => {
    console.log(cart)

    let price = 0;
    let shipping = 0;
    let quantity = 0
    for(let product of cart){
        price = price + (product.price * product.quantity)
        shipping = shipping + product.shipping * product.quantity
        quantity = quantity + product.quantity
    }

    let tax = Number((price * 0.1).toFixed(2))

    const grandTotal = price + shipping + tax


    return (
        <div className='cart'>
            <h1>Order summery</h1>
            <p>Product Amount: {quantity} </p>
            <p>Total price : {price} </p>
            <p>Total shipping : {shipping} </p>
            <p>Tax : {tax} </p>
            <h3>Grand total : {grandTotal} </h3>
            <p className='font-bold text-white rounded-lg text-center hover:bg-blue-800 bg-blue-600 p-2 w-40'>{children}</p>
        </div>
    );
};

export default Cart;