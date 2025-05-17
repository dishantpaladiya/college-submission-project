import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    <h1>product data edit form</h1>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        <table className="tabledata" style={{ border: "3px solid black",padding:"10px"}}>
          <tbody>
            <tr style={{ border: "3px solid black",padding:"10px"}}>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <label htmlFor="image">Image:</label>
              </td>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <input type="file" name="image" ref={txtimage} />
              </td>
            </tr >
            <tr style={{ border: "3px solid black",padding:"10px"}}>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <label htmlFor="name">name:</label>
              </td>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <input type="text" name="name" placeholder="Enter Your name" ref={txtname} />
              </td>
            </tr>
            <tr style={{ border: "3px solid black",padding:"10px"}}>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <label htmlFor="price">price:</label>
              </td>
              <td style={{ border: "3px solid black",padding:"10px"}}>
                <input type="text" name="price" placeholder="Enter Your price" ref={txtprice} />
              </td>
            </tr>
            <tr style={{ border: "3px solid black",padding:"10px"}}>
              <td colSpan="2" style={{ border: "3px solid black",padding:"10px"}}>
                <input type="submit" name="submit" value="SUBMIT" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Product_edit;
