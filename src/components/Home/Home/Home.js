import React from 'react';
import './Home.css'
import headerImg from '../../../images/Header-banner-fresh-news.jpg'
import Services from '../Services/Services';
import Header from '../TopNewsList/TopNewsList';
import FeaturedService from '../FeaturedService/FeaturedService';
import Reviews from '../Reviews/Reviews';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Footer from '../../Shared/Footer/Footer';
import SlideBusinessInfo from '../../SlideBusinessInfo/SlideBusinessInfo';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNewsList from '../TopNewsList/TopNewsList';
import SlidingBanner from '../SlidingBanner/SlidingBanner';
import News from '../../Body/News/News';
import FooterFN from '../FooterFN/FooterFN';

const Home = () => {

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <div className="col-md-8 right-border">
                    <div className="pb-2">
                        <img src={headerImg} alt="" className="banner-img" />
                    </div>
                    <div className="py-1">
                        <SlidingBanner />
                    </div>
                    <div className="py-1">
                        <News/>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="pb-2">Top News</h3>
                    <TopNewsList />
                </div>
                <div className="col-md-12">
                    <FooterFN/>
                </div>
            </div>

            {/* <Header></Header> */}
            {/* <Navbar />
            <FeaturedService></FeaturedService>
            <Services></Services>
            <SlideBusinessInfo></SlideBusinessInfo>
            <BusinessInfo></BusinessInfo>
            <Reviews></Reviews>
            <Footer></Footer> */}
        </div>

    );
};

export default Home;