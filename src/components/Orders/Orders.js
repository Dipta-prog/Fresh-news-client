import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-57391.herokuapp.com/orderedProducts?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
        setLoadingSpinner(false);
    }, []);

    const handleClass = (id) => {
        console.log(id)
        // console.log(document.getElementById(id));
    }


    return (
        <div>
            {
                loadingSpinner && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            <div className='container'>
                <h3 className='mt-3 ml-3'>Previously Bought Services</h3>
                <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                    {
                        orderedProducts.map(product => {
                            return (
                                <div className="col-md-4">
                                    {/* {console.log(product.orderStatus)} */}
                                    <div class="col">
                                        <div className="card mb-4 shadow" style={{ borderRadius: '10px' }}>
                                            <div className="d-flex text-center" style={{ paddingTop: "20px" }}>
                                                <div>
                                                    <img src={product.serviceImg} style={{ width: '50%' }} className="card-img-top" alt="Product Img" />
                                                </div>
                                            </div>
                                            <div className="d-flex text-center">
                                                <div className="card-body">
                                                    <h6 style={{ fontWeight: '700', fontSize: '18px' }}>{product.serviceName}</h6>
                                                    <br />
                                                    <p>{product.serviceDescription}</p>
                                                    <div className="d-flex justify-content-start">
                                                        <p id={product._id} className={`btn btn-outline-${product.orderStatus === "Pending" ? "danger" : product.orderStatus === "On going" ? "warning" : product.orderStatus === "Done" ? "success" : ""}`}>{product.orderStatus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div >

                {
                    orderedProducts.length === 0 && <h2 className="d-flex mt-5 justify-content-center text-primary">You have not ordered any services</h2>
                }
            </div>

        </div>
    );
};

export default Orders;