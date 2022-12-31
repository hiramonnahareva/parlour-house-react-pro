import React from 'react';

const Service = ({service}) => {

    const {img, name, shadow, price, description, } = service;
    return (
        <div className={`p-5 ${shadow} text-center m-9 px-16 gap-4 rounded-lg` }>
            <div className='flex justify-center'>
            <img className='w-28' src={img} alt="" />
            </div>
            <h2 className='text-2xl pt-5 font-bold'>{name}</h2>
            <h3 className='text-2xl font-bold text-primary py-2'>{price}</h3>
            <p>{description}</p>
            
        </div>
    );
};

export default Service;