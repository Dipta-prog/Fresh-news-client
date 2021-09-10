import React from 'react';
import {
    Link
} from "react-router-dom";
import './Navbar.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
export const categories = ["All", "Local", "International", "Business", "Sports", "Lifestyle", "Spot-Light", "Opinion", "Gear-up", "Supplement", "Cerita"]

const Navbar = () => {
    // const [loggedInUser] = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleChange = (e) => {
        // console.log(document.getElementById(id).value);
        console.log("clicked", e.target.innerHTML);
        if (e.target.innerHTML === "All News") {
            setLoggedInUser({ ...loggedInUser, category: 'All' })
        }
        else setLoggedInUser({ ...loggedInUser, category: e.target.innerHTML })
        // setCategory(e.target.value)
        // setLoggedInUser({...loggedInUser ,category: e.target.value})
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: '#dbdbdb'}}>
                <Link style={{ fontWeight: '800', fontSize: '30px' }} className="navbar-brand" to='/home'>Fresh News</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/home'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/contact-us'>Contact Us</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/all-news' >All News</Link>
                        </li>
                        <li class="nav-item dropdown mx-3">
                            <Link style={{ fontWeight: '600' }} class="nav-link dropdown-toggle text-primary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    categories.map(category => <Link onClick={handleChange} class="dropdown-item">{category}</Link>)
                                }
                            </div>
                        </li>
                        <li className="nav-item active mx-3">
                            {!(loggedInUser.isSignedIn) && <span type="submit"><Link class="btn btn-outline-primary my-sm-0" to='/login'>Login</Link></span>}
                            {(loggedInUser.isSignedIn) && <span class="btn my-sm-0" type="submit">{loggedInUser.photoURL && <img style={{ borderRadius: "20px", width: "35%", padding: "3px" }} src={loggedInUser.photoURL} alt=""></img>} {(loggedInUser.photo === '') && <div> {loggedInUser.name}</div>}</span>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;