import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import NewsCard from '../Body/News/NewsCard/NewsCard';
import FooterFN from '../Shared/FooterFN/FooterFN';
import Navbar from '../Shared/Navbar/Navbar';

const CategoryNews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [categoryNews, setCategoryNews] = useState([]);
    // console.log("received category:",loggedInUser.linkCategory)

    // useEffect(() => {
    //     fetch(`https://salty-basin-28502.herokuapp.com/newsList/${category}`)
    //             .then(res => res.json())
    //             .then(data => setCategoryNews(data))
    // }, [])

    return (
        <div className="container-fluid">
            <Navbar/>
             <div className="row">
                {
                    categoryNews.map(news => {
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

export default CategoryNews;