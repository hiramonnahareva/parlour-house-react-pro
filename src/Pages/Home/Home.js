import React from 'react';
import Banner from './Banner';
import ProfetionallyService from './ProfetionallyService';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer';
import ContectInfo from './ContectInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ProfetionallyService></ProfetionallyService>
            <Testimonials></Testimonials>
            <ContectInfo></ContectInfo>
        </div>
    );
};

export default Home;