import React from 'react';
import './FooterFN.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPinterest, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const FooterFN = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleChange = (e)=>{
        // console.log(document.getElementById(id).value);
        console.log("clicked",e.target.innerHTML);
        if (e.target.innerHTML==="All News") {
            setLoggedInUser({...loggedInUser ,category: 'All'})
        }
        else setLoggedInUser({...loggedInUser ,category: e.target.innerHTML})
        // setCategory(e.target.value)
        // setLoggedInUser({...loggedInUser ,category: e.target.value})
    }

    return (
        <div>
            <div className="d-flex flex-column main-footer-div">

                {/* <!-- Footer --> */}
                <footer >
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"><h6 className="text-uppercase font-weight-bold mb-2">About Us</h6>
                                <p className="font-italic text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat voluptate odio quam explicabo tempora pariatur ducimus magnam.</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><FontAwesomeIcon icon={faVimeo} /></a></li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase text-center font-weight-bold mb-4">News Category</h6>
                                <ul className="list-unstyled mb-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Local</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">International</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Business</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Sports</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Life Style</Link></li>
                                        </div>
                                        <div className="seperator"></div>
                                        <div>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Spot-Light</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Opinion</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Gear up</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Suppliment</Link></li>
                                            <li className="mb-2"><Link onClick={handleChange} className="text-muted">Cerita</Link></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Wishlist</a></li>
                                    <li className="mb-2"><a  onClick={handleChange} className="text-muted">All News</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                                <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                                <div className="p-1 rounded border">
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                                        <div className="input-group-append">
                                            <button id="button-addon1" type="submit" className="btn btn-link"><FontAwesomeIcon icon={faPaperPlane} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Copyrights --> */}
                    <div className="bg-light py-4">
                        <div className="container text-center">
                            <p className="text-muted mb-0 py-2">© {new Date().getFullYear()} Fresh News All rights reserved.</p>
                        </div>
                    </div>
                </footer>
                {/* <!-- End --> */}

            </div>
        </div>
    );
};

export default FooterFN;