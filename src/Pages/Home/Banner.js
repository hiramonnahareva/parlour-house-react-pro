import React from 'react';
import banner from '../../Assets/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-accent">
  <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
    <img src={banner} className="lg:h-[96vh]  pb-20 lg:w-50% rounded-lg shrink-0" alt='' />
    <div className=' lg:w-50%'>
      <h1 className="text-5xl font-bold">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
      <button className="btn btn-primary">Get an Appointment</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;