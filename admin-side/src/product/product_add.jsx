

import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Product_add.css'; // Import external CSS

const Product_add = () => {
    const txtimage = useRef();
    const txtname = useRef();
    const txtprice = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var image = txtimage.current.files[0];
        var name = txtname.current.value;
        var price = txtprice.current.value;

        var params = new FormData();
        params.set('image', image);
        params.set('name', name);
        params.set('price', price);

        axios.post('http://localhost/projects/product_insert.php', params)
            .then(function (response) {
                if (response.data['status'] === 'yes') {
                    alert("Data Successfully Inserted.");
                } else {
                    alert("Data Failed.");
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };

    return (
        <div className="contact-form-container">
            <h1 className="form-title">Product Data Add Form</h1>
            <form className="contact-form" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" name="image" ref={txtimage} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Enter product name" ref={txtname} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" placeholder="Enter product price" ref={txtprice} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" value="ADD" id="form-submit-button" />
                </div>
            </form>
        </div>
    );
};

export default Product_add;
