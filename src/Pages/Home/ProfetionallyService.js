import React from 'react';
import CountUp from 'react-countup';
import image from '../../Assets/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ProfetionallyService = () => {
    
    return (
        <div className="hero min-h-screen py-20 bg-accent">
        <div className="hero-content flex-col lg:flex-row gap-x-[102px] items-center lg:pb-0 gap-y-10  ">
            <img className="w-55 lg:w-[580px] rounded-lg" src={image} alt='treatment' />
            <div>
                <h1 className="text-4xl font-bold">Let us handle your screen <span className='text-primary'>Professionally</span>.</h1>
                <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                <div className='flex gap-20'>
                    <div>
                        <h2 className='text-[42px] font-bold text-primary'><CountUp start={0} end={500} duration={2} delay={0} />+</h2>
                    <p className='text-black'>Happy Customer</p>
                    </div>
                    <div>
                        <h2 className='text-[42px] font-bold text-primary'><CountUp start={0} end={16} duration={2} delay={0} />+</h2>
                    <p className='text-black'>Total Service</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProfetionallyService;