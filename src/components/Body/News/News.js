import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import NewsCard from './NewsCard/NewsCard';
export const fakeNews = [
    { _id: 0, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-1 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "A", category: "action" },
    { _id: 1, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-2 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "B", category: "action" },
    { _id: 2, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-3 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "C", category: "action" },
]

const News = () => {
    const [newsList, setNewsList] = useState([])
    const [category, setCategory] = useState("All")
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        // original
        console.log("category -----------", category)
        if (loggedInUser.category==='All') {
            fetch('http://localhost:5092/newsList')
            .then(res => res.json())
            .then(data => setNewsList(data))
        }
        else{
            fetch(`http://localhost:5092/newsList/${loggedInUser.category}`)
            .then(res => res.json())
            .then(data => setNewsList([data]))
        }
        

        // fetch by content type dynamic string example
        // fetch(`https://arcane-savannah-57391.herokuapp.com/product/${id}`) // category

        // setNewsList(fakeNews)
    }, [loggedInUser.category])

    console.log("from server data front end",newsList);

    const handleChange = (e) => {
        // console.log(document.getElementById(id).value);
        console.log(e.target.value);
        setCategory(e.target.value)
        setLoggedInUser({ ...loggedInUser, category: e.target.value })
    }

    console.log("This is from context api", loggedInUser.category)

    return (
        <div className="pb-1 pt-3">
            <div className="d-flex justify-content-between">
                <h3>News</h3>
                <div className="d-flex align-items-center">
                    <span className="mr-1">Category: </span>
                    <span>
                        <select onChange={handleChange}>
                            <option value="" selected disabled hidden>{loggedInUser.category}</option>
                            <option value="All">All</option>
                            <option value="International">International</option>
                            <option value="Business">Business</option>
                            <option value="Sports">Sports</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Opinion">Opinion</option>
                            <option value="Gear-up">Gear-up</option>
                            <option value="Supplement">Supplement</option>
                            <option value="Cerita">Cerita</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="row">
                {
                    newsList.map(news => {
                        return (
                            <div className="col-md-6">
                                <NewsCard key={news._id} news={news} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default News;