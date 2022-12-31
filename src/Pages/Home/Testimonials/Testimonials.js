import React from 'react';
import person1 from '../../../Assets/Image/Ellipse 90.png';
import person2 from '../../../Assets/Image/Ellipse 91.png';
import person3 from '../../../Assets/Image/Ellipse 92.png';
import icon from '../../../Assets/Icon/Group 33040.png'
import SingalTestimonial from './SingalTestimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonials = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 2
      }; 
    const reviews = [
        { _id: 1, img: person1, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
        { _id: 2, img: person2, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
        { _id: 3, img: person3, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
        { _id: 4, img: person1, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
        { _id: 5, img: person2, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
        { _id: 6, img: person3, name: 'Nash Patrik', post: 'CEO, Manpol', description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', rate: icon },
    ]
    return (



        <div className='bg-white py-5 my-5'>
            <h2 className='text-3xl my-5 text-center font-bold'>Testimonials</h2>

                <div className=" mx-28">
            <Slider {...settings}>
                    {
                        reviews.map((review, index) => <SingalTestimonial review={review} key={review._id}></SingalTestimonial>)
                    }
            </Slider>
                {/* </div> */}
        </div>
       
         </div >
    );
};

export default Testimonials;