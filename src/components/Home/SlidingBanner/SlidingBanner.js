import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fakeNews } from '../../Body/News/NewsCard/News';

const SlidingBanner = () => {
    const [highlights, setHighlights] = useState([])
    useEffect(() => {
        // original
        // fetch('https://arcane-savannah-57391.herokuapp.com/products')
        //     .then(res => res.json())
        //     .then(data => setNewsList(data))
        setHighlights(fakeNews)
    }, [])

    return (
        <div>
            <h3>News Highlights</h3>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                    {
                        highlights.map((highlight, index) => {
                            const { _id, img, title, description, author, category } = highlight
                            return (
                                <div className={`carousel-item ${(index === 0) ? 'active' : ''}`}>
                                    <img src={img} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link className="text-white" to={`/view-more/${_id}`}><h3>{title}</h3></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="carousel-item active">
                        <img src="https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>First slide label</h3>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                        <img src="https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Second slide label</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Third slide label</h3>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default SlidingBanner;