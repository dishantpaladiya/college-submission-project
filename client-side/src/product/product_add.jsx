import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Product_add = () => {
    const txtimage = useRef();
    const txtname = useRef();
    const txtprice = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var image = txtimage.current.files[0]; // Correctly refer to the image
        var name = txtname.current.value; // Correctly refer to name
        var price = txtprice.current.value; // Correctly refer to price
        
        console.log(image);

        var params = new FormData();
        params.set('image', image);
        params.set('name', name);
        params.set('price', price);
    
        console.log(params);
        axios.post('http://localhost/projects/product_insert.php', params)
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data['status'] === 'yes') {
                    alert("Data Successfully Inserted.");
                    navigate('/viewdata');
                   
                } else {
                    alert("Data Failed.");
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };
    
    return (
        <>
        <h1>product data add form</h1>
            <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <table border="2" cellPadding="7" cellSpacing="7" >
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="image">Image:</label>
                            </td>
                            <td>
                                <input type="file" name="image" ref={txtimage} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">name:</label>
                            </td>
                            <td>
                                <input type="text" name="name" placeholder="Enter product name" ref={txtname} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">price:</label>
                            </td>
                            <td>
                                <input type="text" name="price" placeholder="Enter product price" ref={txtprice} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" name="submit" value="SUBMIT" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default Product_add;
