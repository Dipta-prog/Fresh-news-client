import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import headerImg from '../../../images/Header-banner-fresh-news.jpg'
import { fakeNews } from '../../Body/News/NewsCard/News';
// import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar'
import TopNews from '../TopNews/TopNews';

// import './TopNewsList.css';

const TopNewsList = () => {
    const [topNewsList, setTopNewsList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://salty-basin-28502.herokuapp.com/topNewsList')
            .then(res => res.json())
            .then(data => {
                setTopNewsList(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading && <div>
                <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>}
            {
                topNewsList.map(topNews => <TopNews topNews={topNews}/>)
            }
            {/* <TopNews /> */}
        </div>
    );
};

export default TopNewsList;