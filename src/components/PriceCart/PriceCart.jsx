import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 p-5 rounded-md'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>
                    {price.price}
                </span>
                <span className='text-2xl text-white'>/mon</span>
            </h2>
            <h5 className='text-3xl font-bold text-center my-6'>{price.name}</h5>
            <p>Features:</p>
            {
                price.features.map(feature =><li>
                    {feature}
                    key:{feature.id}
                    </li>)
            }
        </div>
    );
};

export default PriceCart;