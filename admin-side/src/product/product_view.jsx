

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css';  // Import the external CSS

const Product_view = () => {
    const [alldata, setAlldata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Fetchdata();
    }, []);

    const Fetchdata = () => {
        axios.get('http://localhost/projects/product_get.php').then(function (response) {
            setAlldata(response.data);
        });
    };

    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");

        var params = new FormData();
        params.set('id', id);
        axios.post('http://localhost/projects/product_delete.php', params).then(function (response) {
            if (response.data['status'] === 'yes') {
                alert("Delete Success.");
                Fetchdata();
            }
            else {
                alert("Delete Fail.");
            }
        });
    };

    const handleEdit = (e) => {
        var id = e.target.getAttribute("data-id");
        navigate(`/edit/${id}`);
    };

    return (
        <>
            <h1>Product Details</h1>
            <div className="table-container">
                <table className="tablebr">
                    <thead>
                        <tr className="tabledata">
                            <th>Index</th>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alldata.map((obj, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.id}</td>
                                <td>{obj.image}</td>
                                <td>{obj.name}</td>
                                <td>{obj.price}</td>
                                <td>
                                    <button onClick={handleDelete} data-id={obj.id}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={handleEdit} data-id={obj.id}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="add">
                <Link to="/productadd">
                    <button>Add Data</button>
                </Link>
            </div>
            
        </>
    );
}

export default Product_view;
