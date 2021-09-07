import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css'

const NewsCard = (props) => {
    console.log("From news card", props)
    const { _id, img, title, description, author, category } = props.news
    return (
        <div className="pb-2">
            <div className="card" style={{ width: '100%' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p style={{ textDecoration: 'none' }} className="card-text">{description.substr(0, 100)} ...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="pr-3"><Link to={`/view-more/${_id}`} className="btn btn-primary">View More</Link></span>
                        <small className="text-muted">
                            <span className="text-justify"><b>Author: </b>{author}</span><br />
                            <span><b>Category:</b> {category}</span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;