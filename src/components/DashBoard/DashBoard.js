import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './DashBoard.css';
import Navbar from '../Shared/Navbar/Navbar';
import Admin from '../Admin/Admin';
import FooterFN from '../Shared/FooterFN/FooterFN';

const DashBoard = () => {
    const [dataVerifyingComplete, setDataVerifyingComplete] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("From dashboard",loggedInUser.email);


    useEffect(() => {
        fetch('https://salty-basin-28502.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                console.log("After verify response", data)
                setIsAdmin(data);
                setDataVerifyingComplete(true);
            })
    }, []);

    console.log('isAdmin', isAdmin);
    const { id } = useParams();
    // console.log(id);

    const [buyService, setBuyService] = useState(true);
    const [boughtServices, setBoughtServices] = useState(false);
    const [review, setReview] = useState(false);


    useEffect(() => {
        if (id === undefined) {
            setBuyService(false);
            setBoughtServices(true);
            setReview(false);
        }

    }, []);



    // dashboard
    const handleClickForBoughtServices = () => {
        setBuyService(false);
        setBoughtServices(true);
        setReview(false);
    }
    const handleClickForBuyService = () => {
        setBuyService(true);
        setBoughtServices(false);
        setReview(false);
    }
    const handleClickForReview = () => {
        setBuyService(false);
        setBoughtServices(false);
        setReview(true);
    }


    return (
        <div className="container-fluid">

            {!dataVerifyingComplete && <div>
                <Navbar></Navbar>
                <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>}

            {dataVerifyingComplete && <div>
                {!isAdmin && <div>
                    {/* <Navbar></Navbar>
                    <div className="row">
                        <div className="col-md-3 menu-div mb-5 bg-success">
                            <div className="d-flex justify-content-center">
                                <div className=" menu-container">
                                    <p id="manageProducts" onClick={handleClickForBuyService} className="row menu"> <FontAwesomeIcon className="icon" icon={faShoppingCart} /> Buy Service</p>
                                    <p id="addProducts" onClick={handleClickForBoughtServices} className="row menu"> <FontAwesomeIcon className="icon" icon={faList} /> Bought Services</p>
                                    <p id="editProducts" onClick={handleClickForReview} className="row menu"> <FontAwesomeIcon className="icon" icon={faEdit} /> Review</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-9">
                            {buyService && <div>
                                <BuyService></BuyService>
                            </div>
                            }

                            {boughtServices && <div>
                                <Orders></Orders>
                            </div>
                            }

                            {review && <div>
                                <WriteReview></WriteReview>
                            </div>
                            }
                        </div>

                    </div>
                 */}
                    <Navbar />
                    <h1 className="text-center py-5 my-5">Welcome {loggedInUser.name}!</h1>
                    <FooterFN />
                </div>
                }

                {isAdmin && <Admin></Admin>}
            </div>}
        </div>
    );
};

export default DashBoard;