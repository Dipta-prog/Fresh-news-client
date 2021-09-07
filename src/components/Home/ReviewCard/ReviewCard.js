import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewCard.css';

const ReviewCard = (props) => {
    const { name, location, comment, img } = props.review;
    return (
        <div className="card shadow-sm col mb-4">
            <div className="card-body">
                <p className="card-text text-justify">{comment}</p>
                <div>
                    <FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} />
                </div>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" style={{ borderRadius: '50px' }} src={img} alt="" width="60" />
                <div>
                    <h6 className="text-success">{name}</h6>
                    <p className="m-0">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;