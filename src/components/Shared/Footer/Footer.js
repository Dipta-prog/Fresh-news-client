import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const aboutUs = [
        { name: "We've seen so many of our beloved clients wandering around and getting cheated by fake technicians. When the name 'Pro Repair' was discovered, they felt relaxed !" },
    ];
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ];
    const quickLinks = [
        { name: "Success history", link: "/" },
        { name: "How we work for you", link: "/" },
        { name: "Our features", link: "/" },
        { name: "Your extraction", link: "/" },
        { name: "Reviews", link: "/" }
    ];
    const services = [
        { name: "Our all services", link: "/services" },
        { name: "Popular services", link: "/services" },
        { name: "You may like", link: "/services" },
        { name: "Tooth Extraction", link: "/services" },
        { name: "Mobile Servicing", link: "/services" },
        { name: "Computer Servicing", link: "/services" },
        { name: "Laptop Servicing", link: "/services" }
    ];
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About us"} menuItems={aboutUs} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon id="FacebookIcon" className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon id="GoogleIcon" className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon id="instaIcon" className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;