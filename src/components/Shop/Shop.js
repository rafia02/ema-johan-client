import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const {products, previesProduct} = useLoaderData()
    console.log(products)
    const [cart, setCart] = useState([]);
    

    useEffect(()=>{
        const storedCart = getStoredCard()
        const saveCard = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(storedCart){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                saveCard.push(addedProduct)
            }
        }
        setCart(saveCard)
    },[])


    const addToCart = (product) =>{
        let newCart = []
        const isCard = cart.find(p => p.id === product.id)
        if(!isCard){
            product.quantity = 1
            newCart = [...cart, product]
        }

        else{
            const notSelectCard = cart.filter(p => p.id !== product.id)
            isCard.quantity = isCard.quantity + 1
            newCart= [...notSelectCard, isCard]
        } 
        
        

        setCart(newCart)
   

        addToDb(product.id, product.price, product.tax)

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">Delete</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;