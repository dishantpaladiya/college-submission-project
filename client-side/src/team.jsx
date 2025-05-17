

import React, { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './team.css'; // Import the CSS file

const Team = () => {

    useEffect(() => {
  
      const swiper = new Swiper(".team-swiper", {
  
        slidesPerView: 4, // Change this to 4 to display 4 blocks
  
        spaceBetween: 30,
  
        pagination: {
  
          el: ".swiper-pagination",
  
          clickable: true,
  
        },
  
        breakpoints: {
  
          200: {
  
            slidesPerView: 1,
  
            spaceBetween: 20,
  
          },
  
          750: {
  
            slidesPerView: 2,
  
            spaceBetween: 30,
  
          },
  
          1024: {
  
            slidesPerView: 3, // You can keep this as 3 for larger screens
  
            spaceBetween: 30,
  
          },
  
          1100: {
  
            slidesPerView: 4, // Change this to 4 for larger screens
  
            spaceBetween: 30,
  
          },
  
        },
  
      });
  
    }, []);

  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <p className="text-blk section-head-text">Our Team</p>
        <p className="text-blk section-subhead-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <div className="responsive-container-block">
          <div className="swiper team-swiper">
            <div className="swiper-wrapper">
              {/* Repeat this block for each team member */}
              <div className="swiper-slide">
                <div className="card">
                  <div className="img-wrapper">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png" alt="Team Member" />
                  </div>
                  <div className="card-content">
                    <p className="text-blk name">Roger Rubin</p>
                    <p className="text-blk position">Lorem ipsum</p>
                    <p className="text-blk testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <div className="img-wrapper">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png" alt="Team Member" />
                  </div>
                  <div className="card-content">
                    <p className="text-blk name">Roger Rubin</p>
                    <p className="text-blk position">Lorem ipsum</p>
                    <p className="text-blk testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <div className="img-wrapper">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png" alt="Team Member" />
                  </div>
                  <div className="card-content">
                    <p className="text-blk name">Roger Rubin</p>
                    <p className="text-blk position">Lorem ipsum</p>
                    <p className="text-blk testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <div className="img-wrapper">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png" alt="Team Member" />
                  </div>
                  <div className="card-content">
                    <p className="text-blk name">Roger Rubin</p>
                    <p className="text-blk position">Lorem ipsum</p>
                    <p className="text-blk testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              {/* Add more swiper-slide blocks as needed */}
            </div>
            <div className="swiper-pagination container-block"></div>
          </div>
        </div>

        {/* Repeat the above block for additional team members as needed */}
        
      </div>
    </div>
  );
};

export default Team;