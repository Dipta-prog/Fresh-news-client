import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fakeNews } from '../Body/News/News';
import FooterFN from '../Home/FooterFN/FooterFN';
import Navbar from '../Shared/Navbar/Navbar';


const NewsDetails = () => {
    const { _id } = useParams();
    const [newsDetails, setNewsDetails] = useState({
        _id: null,
        img: '',
        title: '',
        description: '',
        author: '',
        category: ''
    })
    const [loadingSpinner, setLoadingSpinner] = useState(true)
    // console.log("useparams _id: ", _id)

    useEffect(() => {
        fetch(`http://localhost:5092/view-more/${_id}`)
            .then(res => res.json())
            .then(data => setNewsDetails(data))
        setLoadingSpinner(false);
        // (_id === undefined) ? setNewsDetected(false) : setNewsDetected(true)
    }, [_id])
    console.log("From news details", newsDetails)

    const { img, title, description, author, category } = newsDetails

    return (
        <div>
            <Navbar />
            {
                loadingSpinner && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            {!loadingSpinner && <div>
                <div className="row">
                    <img style={{ width: "100%" }} src={img} alt="" />
                </div>
                <div className="container">
                    <div className="pb-3">
                        <div className="text-center">
                            <h1 className="text-justify">{title}</h1>
                        </div>
                        <div className="text-right">
                            <span className="text-justify"><b>Author: </b>{author}</span><br />
                        </div>
                    </div>
                    <div className="text-justify">
                        <p>{description}</p>
                    </div>

                    <div className="text-right pb-5">
                        <div className="text-left">
                            {category}
                        </div>
                        Date: {new Date().toLocaleDateString()}
                    </div>
                </div>

            </div>
            }
            <FooterFN />
        </div>
    );
};

export default NewsDetails;