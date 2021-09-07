import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css'
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const NewsCard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    console.log("From news card", props)
    const { _id, img, title, description, author, category } = props.news

    const handleRouteChange=(_id)=>{
        console.log("route change called", _id)

            fetch(`http://localhost:5092/view-more/${_id}`)
                .then(res => res.json())
                .then(data => {
                    setLoggedInUser({...loggedInUser,category:data.category})
                })
        // to={`/view-more/${_id}`}
        history.push(`/view-more/${_id}`)
    }
    return (
        <div className="pb-2">
            <div className="card" style={{ width: '100%' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p style={{ textDecoration: 'none' }} className="card-text">{description.substr(0, 100)} ...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="pr-3"><Link  onClick={()=>handleRouteChange(_id)} className="btn btn-primary">View More</Link></span>
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