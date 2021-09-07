import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div>
            <div class="col">
                <div className="card mb-4 shadow item" style={{ borderRadius: '10px' }}>
                    <div className="d-flex text-center" style={{ paddingTop: "20px" }}>
                        <div className="card-img-top">
                            <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="d-flex text-center">
                        <div className="card-body">
                            <h6 style={{ fontWeight: '700', fontSize: '18px' }}>{info.title}</h6>
                            <br />
                            <div className="d-flex justify-content-center">
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default InfoCard;