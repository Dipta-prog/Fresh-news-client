import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faUserAlt, faLaptopHouse, faHandshake, faComments, faCalendarAlt, faStethoscope, faFunnelDollar, faMapMarker, faCogs } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        title: 'Experienced Professionals',
        description: 'We pride ourselves on being a professional device repair facility',
        icon: faUserAlt,
    },
    {
        title: 'Expart Technical Skills',
        description: 'Our technical expert will give you honest, relaible and professional help',
        icon: faLaptopHouse,
    },
    {
        title: 'Trustworthy See Reviews',
        description: 'Our business has been built on trust and customer satisfaction',
        icon: faComments,
    },
    {
        title: 'Friendly Service',
        description: 'Our technicians are expert as well as friendly',
        icon: faHandshake
    },
    {
        title: '1 Year Warranty',
        description: 'We are confident about our quality service',
        icon: faCalendarAlt
    },
    {
        title: 'Free Diagnosis',
        description: 'We check every possible problems to give you hassle free service',
        icon: faStethoscope,
    }
]
const BusinessInfo = () => {
    return (

        <div className="container">
            <div className="text-center mt-5">
                <h2>Why Choose <span className="text-success">Us</span>?</h2>
                <p>There are many valid reasons why you should choose us to take care of your valuable device</p>
            </div>
            <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                {
                    infosData.map(info => {
                        return (
                            <div className="col-md-4">
                                <InfoCard info={info} key={info.title}></InfoCard>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    );
};

export default BusinessInfo;