

import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import './Product_add.css'; // Import external CSS

const Banner_add = () => {
    const txtimage = useRef();
    const txtdetails = useRef();
    const txtparagraph = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var image = txtimage.current.files[0];
        var details = txtdetails.current.value;
        var paragraph = txtparagraph.current.value;

        var params = new FormData();
        params.set('image', image);
        params.set('details', details);
        params.set('paragraph', paragraph);

        axios.post('http://localhost/projects/banner_insert.php', params)
            .then(function (response) {
                if (response.data['status'] === 'yes') {
                    alert("Data Successfully Inserted.");
                    navigate('/bviewdata');
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
                    <label htmlFor="name">details:</label>
                    <input type="text" name="name" placeholder="Enter product name" ref={txtdetails} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">paragraph:</label>
                    <input type="text" name="price" placeholder="Enter product price" ref={txtparagraph} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" value="ADD" id="form-submit-button" />
                </div>
            </form>
        </div>
    );
};

export default Banner_add;
