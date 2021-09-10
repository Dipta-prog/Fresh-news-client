import React, { useEffect, useState } from 'react';
import editBtn from '../../all_Images/icons/Group 307.png';
import deleteBtn from '../../all_Images/icons/Group 33150.png';

const ManageProduct = () => {
    const [allNews, setAllNews] = useState([]);
    useEffect(() => {
        fetch('https://salty-basin-28502.herokuapp.com/newsList')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllNews(data)
            })
    }, [])

    const handleDeleteProduct = (productIndex, id) => {
        fetch(`https://salty-basin-28502.herokuapp.com/deleteNews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result.deleteCount);
                if (result.deleteCount === 1) {
                    document.getElementById(productIndex).style.display = 'none';
                }
            })
    }

    return (
        <div>
            {
                allNews.length === 0 && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            <table className="container">
                <thead>
                    <tr className="border-bottom">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allNews.map((news, index) => {
                            const { _id,img, title, author, category } = news
                            return (
                                <tr id={index} className="border-bottom">
                                    <td><img src={img} alt="" className="img-fluid" /></td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>{category}</td>
                                    <td><span><img className="btnImg" src={editBtn} alt="" /></span> <span onClick={() => handleDeleteProduct(index,_id)}><img className="btnImg" src={deleteBtn} alt="" /></span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;