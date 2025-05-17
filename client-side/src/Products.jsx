
import React, { useEffect, useState } from "react";
import Productp from "./props/productp";
import axios from "axios";

const Products = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => { 
    Fetchdata();
  }, []);

  const Fetchdata = () => {
    axios.get('http://localhost/projects/product_view.php').then(function (response) {
      setAlldata(response.data);
    });
  }

  return (
    <>
      <div className="main-product" id="collection">
        <div className="container">
          <div className="section-title">
            <div className="title">
              <div className="small-sep">
                <div className="sep-left"></div>
                <div className="small-detils">featured collection</div>
                <div className="sep-left"></div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="row">
              {alldata.map((obj) => (
                <Productp
                  key={obj.id} // Ensure a unique key for each product
                  id={obj.id} // Pass id for addItem
                  img={"assets/images/" + obj.image} // Pass image path
                  title="New"
                  dec={obj.name} // Pass product description
                  price={Number(obj.price)} // Convert price to a number
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
