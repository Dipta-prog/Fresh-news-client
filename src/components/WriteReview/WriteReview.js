import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const WriteReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userImgUploadStatus, setUserImgUploadStatus] = useState(false);
    const [reviewData, setReviewData] = useState({
        name: '',
        location: '',
        comment: '',
        img: ''
    });

    // input fields handle function for write review
    const handleBlur = (event) => {
        if (event.target.name === 'buyer-name') {
            const tempInfo = { ...reviewData };
            tempInfo.name = (event.target.value);
            setReviewData(tempInfo);
        }
        if (event.target.name === 'buyer-location') {
            const tempInfo = { ...reviewData };
            tempInfo.location = (event.target.value);
            setReviewData(tempInfo);
        }
        if (event.target.name === 'comment') {
            console.log('Card Number:', event.target.value);
            const tempInfo = { ...reviewData };
            tempInfo.comment = (event.target.value);
            setReviewData(tempInfo);
        }
    }

    const handleImgUpload = () => {
        const imgData = new FormData();
        imgData.append('image', loggedInUser.photoURL);
        imgData.set('key', '07e3f5810f445d3150142c8ea40f5780');
        setUserImgUploadStatus(false);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response.data.status);
                const tempInfo = { ...reviewData };
                tempInfo.img = (response.data.data.display_url);
                setReviewData(tempInfo);
                if (response.data.status === 200) {
                    setUserImgUploadStatus(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // server post
    const handleSubmit = (event) => {
        handleImgUpload();
        event.preventDefault();
        const tempInfo = { ...reviewData };
        if (userImgUploadStatus) {
            console.log('image uploded from condition');

            const url = 'https://arcane-savannah-57391.herokuapp.com/writeReview';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempInfo)
            })
                .then(res => {
                    console.log('server side response', res.status);
                    if (res.status === 200) {
                        event.target[0].value = '';
                        event.target[1].value = '';
                        event.target[2].value = '';

                        setReviewData({
                            name: '',
                            location: '',
                            comment: '',
                            img: ''
                        });
                        setUserImgUploadStatus(false);
                        alert('Review added');
                    }
                });
        }

    }


    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Review</h3>
                <div className="card shadow card-width">
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="pl-3 pr-3 pt-2">
                                <h5>Add Name</h5>
                                <input required onBlur={handleBlur} className="form-control" type="text" name="buyer-name" placeholder="Your Name" />
                            </div>
                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>You are From</h5>
                                <input required onBlur={handleBlur} className="form-control" type="text" name="buyer-location" placeholder="I am from" />
                            </div>

                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>Add Your Comment</h5>
                                <textarea required onBlur={handleBlur} className="form-control" rows="5" cols="37" placeholder="Enter your comment" name="comment"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3 d-flex float-right">Save</button>
            </form>

        </div>
    );
};

export default WriteReview;