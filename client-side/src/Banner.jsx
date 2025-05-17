import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/projects/banner_view.php')
      .then(response => setAlldata(response.data))
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <>
      {
        alldata.length === 1 ? <div className="main-banner" style={{overflow :"hidden"}} id='alldata?.[0]?'>
          <div className="contant">
            <div className="img">
              <a href="#">
                <img src={`http://localhost/projects/assets/images/${alldata?.[0]?.image}`} alt="main-alldata?.[0]?" />
              </a>
            </div>
            <div className="container">
              <div className="text">
                <a href="#">
                  <p className="discount">{alldata?.[0]?.details}</p>
                </a>
                <span>{alldata?.[0]?.paragraph}</span>
              </div>
            </div>
          </div>
        </div> :
          <Slider {...settings}>
            {alldata?.map(item => (
              <div className="main-banner" key={item.id} id='item'>
                <div className="contant">
                  <div className="img">
                    <a href="#">
                      <img src={`http://localhost/projects/assets/images/${item.image}`} alt="main-item" />
                    </a>
                  </div>
                  <div className="container">
                    <div className="text">
                      <a href="#">
                        <p className="discount">{item.details}</p>
                      </a>
                      <span>{item.paragraph}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
      }
    </>
  );
};

export default Banner;
