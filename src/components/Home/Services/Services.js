import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    return (
        <section id="services" className="services-container">
            <div className="text-center">
                <h2>OUR POPULAR <span className="text-success"> SERVICES</span></h2>
            </div>
            <div className='mt-2'>
                <ServiceDetail></ServiceDetail>
            </div>
        </section>
    );
};

export default Services;