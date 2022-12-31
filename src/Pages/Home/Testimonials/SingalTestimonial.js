import React from 'react';


const SingalTestimonial = ({review}) => {
    const {name, img, post, description, rate, id} = review;
    
    return (

        
        <div className={'p-5 mt-9 px-16 rounded-lg' }id={id}>
            <div className='flex items-center gap-5'>
            <img className='w-16' src={img} alt="" />
            <div>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className=''>{post}</p>
            </div>
            </div>
            <p className='mt-2'>{description}</p>
           <div className="flex mt-2">
           <img width={20} src={rate} alt="" />
            <img width={20} src={rate} alt="" />
            <img width={20} src={rate} alt="" />
            <img width={20} src={rate} alt="" />
            <img width={20} src={rate} alt="" />
           </div>
            
        </div>
    );
};

export default SingalTestimonial;