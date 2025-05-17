
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import './style2.css'; // Ensure you import the CSS file

const Banner_edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const txtimage = useRef();
  const txtdetails = useRef();
  const txtparagraph = useRef();

  useEffect(() => {
    const params = new FormData();
    params.set('id', id);

    axios.post('http://localhost/projects/banner_fetch.php', params)
      .then(function (response) {
        if (response.data) {
          txtdetails.current.value = response.data['details'];
          txtparagraph.current.value = response.data['paragraph'];
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
    const details = txtdetails.current.value;
    const paragraph = txtparagraph.current.value;

    const params = new FormData();
    if (imageFile) {
      params.append('image', imageFile);
    }
    params.append('details', details);
    params.append('paragraph', paragraph);
    params.append('id', id);

    axios.post('http://localhost/projects/banner_edit.php', params)
      .then(function (response) {
        console.log(response);
        if (response.data['status'] === 'yes') {
          alert("Data Successfully Edited.");
          navigate('/bviewdata');
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
          <input type="text" name="details" placeholder="Enter Product Name" ref={txtdetails} />
          <input type="text" name="paragraph" placeholder="Enter Product Price" ref={txtparagraph} />
          <input type="submit" name="submit" value="UPDATE" />
        </form>
      </div>
    </>
  );
}

export default Banner_edit;
