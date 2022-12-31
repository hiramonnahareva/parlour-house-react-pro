import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-white p-2 '>
            <h2 className='text-3xl font-bold text-center m-20'>Our Awesome <span className='text-primary'> Services</span></h2>
           <div className='grid lg:grid-cols-3 grid-cols-1  justify-evenly'>
           {
                services.map(service => <Service service= {service} key={service._id}></Service>)

            }
           </div>
        </div>
    );
};

export default Services;