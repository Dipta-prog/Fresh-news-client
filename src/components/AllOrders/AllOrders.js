import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-57391.herokuapp.com/allUserOrderedProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleChange = (id) => {
        const updatedOrderStatus = document.getElementById(id).value;
        const obj = {updatedOrderStatus};
        console.log(document.getElementById(id).value);
        fetch(`https://arcane-savannah-57391.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data=>{
            console.log('updated',data);
        })
    }

    // console.log(products[0]._id);
    return (
        <div>
            <h3 className="mb-2 ml-2">Order List</h3>
            <div className="card shadow">
                <table className="container">
                    <thead>
                        <tr className="border-bottom">
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr id={index} className="border-bottom">
                                        <td>{product.UserName}</td>
                                        <td>{product.buyerEmail}</td>
                                        <td>{product.serviceName}</td>
                                        <td>{product.paymentMethod}</td>
                                        <td>
                                            <select id={product._id} onChange={()=>handleChange(product._id)}>
                                                <option value="" selected disabled hidden>{product.orderStatus}</option>
                                                <option value="Pending">Pending</option>
                                                <option value="On going">On going</option>
                                                <option value="Done">Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* <select onChange={handleChange}>
                <option value="" selected disabled hidden>Choose here</option>
                <option value="Pending">Pending</option>
                <option value="On going">On going</option>
                <option value="Done">Done</option>
            </select> */}
        </div>
    );
};

export default AllOrders;