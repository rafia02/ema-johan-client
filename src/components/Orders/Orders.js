import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';


const Orders = () => {
    const {products, previesProduct} = useLoaderData()
    console.log(previesProduct)
    const [cart, setCart] = useState(previesProduct)

    const deleteCart = (id) =>{
      const remainingCart =  cart.filter(newCart => newCart.id !== id)
      setCart(remainingCart)

      removeFromDb(id)

    }
    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product =><ReviewProduct
                         key={product.id}
                         product={product}
                         deleteCart ={deleteCart}
                         ></ReviewProduct> )
                }
            </div>

            <div className='bg-red-300'>
            <Cart cart={cart}>
                <Link to="/shipping">Shipping Order</Link>
            </Cart>
            </div>
        </div>
    );
};

export default Orders;