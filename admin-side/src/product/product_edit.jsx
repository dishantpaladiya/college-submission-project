
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style2.css'; // Ensure you import the CSS file

const Product_edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const txtimage = useRef();
  const txtname = useRef();
  const txtprice = useRef();

  useEffect(() => {
    const params = new FormData();
    params.set('id', id);

    axios.post('http://localhost/projects/product_fetch.php', params)
      .then(function (response) {
        if (response.data) {
          txtname.current.value = response.data['name'];
          txtprice.current.value = response.data['price'];
          axios.get(`http://localhost/projects/assets/images/${response.data['images']}`)
            .then(function (response) {
              txtimage.current.value = response.data;
            })
            .catch(function (error) {
              console.log("Error fetching image", error);
            });
        }
      })
      .catch(function (error) {
        console.log("Error fetching data", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageFile = txtimage.current.files[0];
    const name = txtname.current.value;
    const price = txtprice.current.value;

    const params = new FormData();
    if (imageFile) {
      params.append('image', imageFile);
    }
    params.append('name', name);
    params.append('price', price);
    params.append('id', id);

    axios.post('http://localhost/projects/product_edit.php', params)
      .then(function (response) {
        console.log(response);
        if (response.data['status'] === 'yes') {
          alert("Data Successfully Edited.");
          navigate('/viewdata');
        } else {
          alert("Data Edit Failed.");
        }
      })
      .catch(function (error) {
        console.error("Error during submission:", error);
      });
  };

  return (
    <>
      <h1>Product Data Edit Form</h1>
      <div className="form-container">
        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="image" ref={txtimage} />
          <input type="text" name="name" placeholder="Enter Product Name" ref={txtname} />
          <input type="text" name="price" placeholder="Enter Product Price" ref={txtprice} />
          <input type="submit" name="submit" value="UPDATE" />
        </form>
      </div>
    </>
  );
}

export default Product_edit;
