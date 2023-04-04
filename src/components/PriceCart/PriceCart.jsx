import React from 'react';
import Features from '../Features/Features';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 p-5  flex flex-col rounded-md '>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>
                    {price.price}
                </span>
                <span className='text-2xl text-white'>/mon</span>
            </h2>
            <h5 className='text-3xl font-bold text-center my-6'>{price.name}</h5>
            <p className='text-white underline font-bold'>Features:</p>
            {
                price.features.map((feature,idx) =><Features
                key={idx}
                feature={feature}
                ></Features>)
            }
            <button className='w-full  hover:bg-green-700 rounded-md bg-green-500 py-2 mt-auto m-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCart;