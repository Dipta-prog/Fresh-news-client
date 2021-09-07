import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://arcane-savannah-57391.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    console.log(reviews);

    return (
        <section className="testimonials my-5 py-5" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="container">
                <div className="section-header">
                    <h5 className="text-success text-uppercase">Reviews</h5>
                    <h2>What Our Customers <br /> Say </h2>
                </div>
                <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review => {
                            return (
                                <div className="col-md-4">
                                    <ReviewCard review={review} key={review._id} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;