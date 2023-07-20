import React from 'react';

const ReviewProduct = ({product, deleteCart}) => {
    const {name, img, quantity, price, id} = product
    return (

            <div className='mb-6 ml-6'>
                <div className='flex border w-1/2'>
                <div className='p-2'>
                    <img className='w-28' src={img} alt="" />
                </div>

                <div className='flex justify-between items-center w-full m-4'>
                    <div className=' '>
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    </div>
                    <div onClick={()=>deleteCart(id)} className='bg-indigo-500 rounded text-white font-extrabold py-2 px-5'>
                        Delete
                    </div>
                </div>
            </div>

            </div>
    );
};

export default ReviewProduct;