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
    useEffect(() => {
        fetch('https://salty-basin-28502.herokuapp.com/topNewsList')
            .then(res => res.json())
            .then(data => setTopNewsList(data))
    }, [])
    return (
        <div>
            {/* fetch news of each category take first one, make array using those, map it */}
            {
                topNewsList.map(topNews => <TopNews topNews={topNews}/>)
            }
            {/* <TopNews /> */}
        </div>
    );
};

export default TopNewsList;