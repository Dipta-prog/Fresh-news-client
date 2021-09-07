import React from 'react';
import './Admin.css';
import { useState } from 'react';
import axios from 'axios';
import ManageProduct from '../ManageProduct/ManageProduct';
import Navbar from '../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faListOl, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrders from '../AllOrders/AllOrders';

const Admin = () => {
    const [manageServices, setManageServices] = useState(false);
    const [addService, setAddService] = useState(true);
    const [makeAdmin, setMakeAdmin] = useState(false);
    const [orderList, setOrderList] = useState(false);
    const [fileSelected, setFileSelected] = useState(true);
    const [addProductAllData, setAddProductAllData] = useState({
        title: '',
        img: '',
        description: '',
        author: '',
        category: ''
    });

    const handleClickForManageServices = () => {
        setManageServices(true);
        setAddService(false)
        setMakeAdmin(false)
        setOrderList(false)
    }
    const handleClickForAddService = () => {
        setManageServices(false)
        setAddService(true)
        setMakeAdmin(false)
        setOrderList(false)
    }
    const handleClickForMakeAdmin = () => {
        setManageServices(false)
        setAddService(false)
        setMakeAdmin(true)
        setOrderList(false)
    }
    const handleClickForOrderList = () => {
        setManageServices(false)
        setAddService(false)
        setMakeAdmin(false)
        setOrderList(true)
    }

    const handleImgUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', '07e3f5810f445d3150142c8ea40f5780');
        imgData.append('image', event.target.files[0]);
        setFileSelected(false);


        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response.data.status);
                const tempInfo = { ...addProductAllData };
                tempInfo.img = (response.data.data.display_url);
                setAddProductAllData(tempInfo);
                console.log("imagebb server res:", response.data.status)
                if (response.data.status === 200) {
                    setFileSelected(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleBlur = (event) => {
        if (event.target.name === 'title') {
            const tempInfo = { ...addProductAllData };
            tempInfo.title = (event.target.value);
            setAddProductAllData(tempInfo);
        }
        if (event.target.name === 'author') {
            const tempInfo = { ...addProductAllData };
            tempInfo.author = (event.target.value);
            setAddProductAllData(tempInfo);
        }
        if (event.target.name === 'description') {
            const tempInfo = { ...addProductAllData };
            tempInfo.description = (event.target.value);
            setAddProductAllData(tempInfo);
        }
    }

    const handleAddProduct = (event) => {
        event.preventDefault();
        // console.log("submit data",addProductAllData)
        // console.log("Input targets",event.target[0].value)
        // console.log("Input targets",event.target[1].value)
        // console.log("Input targets",event.target[2].value)
        // console.log("Input targets",event.target[3].value)
        // console.log("Input targets",event.target[4].value)


        if (fileSelected) {
            const url = 'http://localhost:5092/addNews';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addProductAllData)
            })
                .then(res => {
                    console.log('server side response', res.status);
                    if (res.status === 200) {
                        event.target[0].value = '';
                        event.target[1].value = '';
                        event.target[2].value = '';
                        event.target[3].value = '';
                        event.target[4].value = '';
                        setAddProductAllData({
                            title: '',
                            img: '',
                            description: '',
                            author: '',
                            category: ''
                        });
                    }
                });
        }

    }

    const handleChange = (e) => {
        // console.log(document.getElementById(id).value);
        console.log(e.target.value);

        const tempInfo = { ...addProductAllData };
        tempInfo.category = (e.target.value);
        setAddProductAllData(tempInfo);
    }


    return (
        <div><Navbar></Navbar>
            <div className="container-fluid">
                {/* side menu */}
                <div className="row">
                    <div className="col-md-3 menu-div bg-light">
                        <div className="d-flex justify-content-center">
                            <div className=" menu-container">
                                <p id="addProducts" onClick={handleClickForAddService} className={`row menu ${addService ? 'bg-success' : ''}`}> <FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add News</p>
                                <p id="manageProducts" onClick={handleClickForManageServices} className={`row menu ${manageServices ? 'bg-success' : ''}`}> <FontAwesomeIcon className="icon" icon={faThLarge} /> Manage News</p>
                                <p id="editProducts" onClick={handleClickForMakeAdmin} className={`row menu ${makeAdmin ? 'bg-success' : ''}`}> <FontAwesomeIcon className="icon" icon={faUserPlus} /> Make Admin</p>
                                {/* <p id="editProducts" onClick={handleClickForOrderList} className="row menu"> <FontAwesomeIcon className="icon" icon={faListOl} /> Order List</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        {/* add product */}
                        {addService && <div>
                            <form onSubmit={handleAddProduct}>
                                <h3>Add Products</h3>
                                <div className="card shadow card-width">
                                    <form onSubmit={handleAddProduct}></form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="pl-3 pr-3 pt-2">
                                                <h5>News Title</h5>
                                                <input required onBlur={handleBlur} className="form-control" type="text" name="title" placeholder="Enter News Title" />
                                            </div>
                                            <div className="pl-3 pr-3 pt-2">
                                                <h5>Author</h5>
                                                <input required onBlur={handleBlur} className="form-control" type="text" name="author" placeholder="Enter Author Name" />
                                            </div>
                                            <div className="mt-3 pl-3 pr-3 pb-3">
                                                <h5>Select Category</h5>
                                                <select required onChange={handleChange}>
                                                    <option value="" selected disabled hidden>{addProductAllData.category ? addProductAllData.category : "Select"}</option>
                                                    {/* <option value="All">All</option> */}
                                                    <option value="International">International</option>
                                                    <option value="Business">Business</option>
                                                    <option value="Sports">Sports</option>
                                                    <option value="Lifestyle">Lifestyle</option>
                                                    <option value="Opinion">Opinion</option>
                                                    <option value="Gear-up">Gear-up</option>
                                                    <option value="Supplement">Supplement</option>
                                                    <option value="Cerita">Cerita</option>
                                                </select>
                                            </div>
                                            {/* <div className="mt-3 pl-3 pr-3 pb-3">
                                                <h5>Service Price</h5>
                                                <input required onBlur={handleBlur} className="form-control" type="text" name="servicePrice" placeholder="Enter Price" />
                                            </div> */}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pl-3 pr-3 pt-2">
                                                <h5>Description</h5>
                                                <textarea required row="10" col="10" onBlur={handleBlur} className="form-control" type="text" name="description" placeholder="News description" ></textarea>
                                            </div>
                                            <div className="mt-3 pl-3 pr-3 pb-3">
                                                <h5>Add Photo</h5>
                                                <input onChange={handleImgUpload} type="file" name="productImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3 d-flex float-right">Save</button>
                            </form>
                        </div>}

                        {/* manage product */}
                        {manageServices && <div>
                            <ManageProduct></ManageProduct>
                        </div>}

                        {/* make admin */}
                        {makeAdmin && <div>
                            <MakeAdmin></MakeAdmin>
                        </div>}

                        {/* all orders list */}
                        {orderList && <div>
                            {/* <h1>All orders list</h1>
                            <AllOrders></AllOrders> */}
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;