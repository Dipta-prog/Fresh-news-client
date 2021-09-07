import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FooterFN from '../../../Shared/FooterFN/FooterFN';
import Navbar from '../../../Shared/Navbar/Navbar';
import NewsCard from '../NewsCard/NewsCard';

const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('https://salty-basin-28502.herokuapp.com/newsList')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])

    return (
        <div className="container-fluid">
            <Navbar/>
             <div className="row">
                {
                    allNews.map(news => {
                        return (
                            <div className="col-md-4">
                                <NewsCard key={news._id} news={news} />
                            </div>
                        )
                    })
                }
            </div>
            <FooterFN/>
        </div>
    );
};

export default AllNews;