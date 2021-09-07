import React from 'react';
import { Link } from 'react-router-dom';

const TopNews = (props) => {
    const { _id, img, title, description, author, category } = props.topNews
    const handleClick = () => {
        document.getElementById('services').scrollIntoView();
    }
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "1240px" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img-fluid" src={img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="px-2">
                            <h6 className="card-title text-justify pt-1 mb-1"><Link to={`/view-more/${_id}`}>{title}{author ? ` - ${author}` : ''}</Link></h6>
                            <p className="card-text pb-1">
                                <div className="d-flex justify-content-between">
                                    <small className="text-muted"><b>Category: {category}</b></small><small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNews;