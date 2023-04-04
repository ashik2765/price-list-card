import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    
    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-purple-900 bg-purple-400 font-bold text-center p-4 mt-5'>Awesome Affortable Price </h2>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                prices.map(price =><PriceCart 
                    key={price.id}
                    price={price}
                    ></PriceCart>)
            }
            </div>
        </div>
    );
};

export default PriceList;