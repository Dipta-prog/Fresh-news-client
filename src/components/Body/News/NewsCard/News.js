import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';
import { categories } from '../../../Shared/Navbar/Navbar';
import NewsCard from './NewsCard';
// export const fakeNews = [
//     { _id: 0, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-1 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "A", category: "action" },
//     { _id: 1, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-2 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "B", category: "action" },
//     { _id: 2, img: "https://www.thesundaily.my/binrepository/648x432/0c0/0d0/none/11808/KJFE/test-kit1_1880007_20210906164736.jpg", title: "News-3 Title", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia nostrum ex magni eligendi officia odit perspiciatis quod id aliquam.", author: "C", category: "action" },
// ]

const News = () => {
    const [newsList, setNewsList] = useState([])
    const [loading, setLoading] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        // original
        setLoading(true)
        console.log("category use effect called -----------", loggedInUser.category)

        fetch(`https://salty-basin-28502.herokuapp.com/newsList/${loggedInUser.category}`)
            .then(res => res.json())
            .then(data => {
                setNewsList(data)
                setLoading(false)
            })

    }, [loggedInUser.category])

    console.log("from server data front end", newsList);

    const handleChange = (e) => {
        // console.log(document.getElementById(id).value);
        console.log(e.target.value);
        // setCategory(e.target.value)
        setLoggedInUser({ ...loggedInUser, category: e.target.value })


        // setNewsList([])
        // fetch(`https://salty-basin-28502.herokuapp.com/newsList/${e.target.value}`)
        //     .then(res => res.json())
        //     .then(data => setNewsList(data))
    }

    console.log("This is from context api", loggedInUser.category)

    return (
        <div className="pb-1 pt-3">
            <div className="d-flex justify-content-between">
                <h3>News</h3>
                <div className="d-flex align-items-center">
                    <span className="mr-1">Category: </span>
                    <span>
                        <select onChange={handleChange} value={loggedInUser.category}>
                            <option selected disabled hidden>{loggedInUser.category}</option>
                            {
                                categories.map(category => <option value={category}>{category}</option>)
                            }
                        </select>
                    </span>
                </div>
            </div>
            {loading && <div>
                <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>}
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