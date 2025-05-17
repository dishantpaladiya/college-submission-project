// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './Review.css';

// const reviews = [
//   {
//     author: "Pelican Steve",
//     text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
//     image: 'https://www.istockphoto.com/photo/happy-man-resting-on-rooftop-during-sunset-gm1303647760-395038706', // Replace with the actual image path
//   },
//   {
//     author: "Max Conversion",
//     text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
//     image: 'https://www.istockphoto.com/photo/man-smiling-looking-at-camera-happy-celebrating-freedom-while-sitting-on-a-concrete-gm1257646498-368646905', // Replace with the actual image path
//   },
//   {
//     author: "3 Steve",
//     text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
//     image: 'https://www.istockphoto.com/photo/smiling-man-with-laptop-on-rooftop-gm628330656-111514891?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=adp_topbanner_media&utm_term=happy+man', // Replace with the actual image path
//   },
//   {
//     author: "4 Conversion",
//     text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
//     image: 'https://pixabay.com/photos/happy-man-adult-city-face-guy-1836445/', // Replace with the actual image path
//   },
// ];

// const Review = () => {
//   const options = {
//     loop: true,
//     nav: true,
//     dots: true,
//     autoplay: 5000,
//     responsive: {
//       0: { items: 2 },
//       600: { items: 2 },
//       1000: { items: 2 }
//     }
//   };

//   return (
//     <OwlCarousel className='owl-theme' {...options}>
//       {reviews.map((review, index) => (
//         <div className="review-card" key={index}>
//           <div className="quote">
//             <p>{review.text}</p>
//           </div>
//           <div className="author-info">
//             <img src={review.image} alt={`${review.author}`} className="author-image" />
//             <p className="author-name">
//               {review.author} - <span>LittleSnippets</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </OwlCarousel>
//   );
// };

// export default Review;


// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './Review.css';

// const reviews = [
//   {
//     author: "Pelican Steve",
//     text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
//     image: 'assets/images/r4.jpg', // Replace with the actual image path
//   },
//   {
//     author: "Max Conversion",
//     text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
//     image: 'assets/images/r1.jpg', // Replace with the actual image path
//   },
//   {
//     author: "3 Steve",
//     text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
//     image: 'assets/images/r2.jpg', // Replace with the actual image path
//   },
//   {
//     author: "4 Conversion",
//     text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
//     image: 'assets/images/r1.jpg', // Replace with the actual image path
//   },
// ];

// const Review = () => {
//   const options = {
//     loop: true,
//     nav: true,
//     dots: true,
//     autoplay: 5000,
//     responsive: {
//       0: { items: 1 },
//       600: { items: 2 },
//       1000: { items: 2 }
//     }
//   };

//   return (
//     <div className="main-review" id="reviews">
//       <div className="container">
//         <div className="section-title">
//           <div className="title">
//             <div className="small-sep">
//               <div className="sep-left"></div>
//               <div className="small-details">Customer Reviews</div>
//               <div className="sep-left"></div>
//             </div>
//           </div>
//         </div>

//         <div className="content">
//           <OwlCarousel className='owl-theme' {...options}>
//             {reviews.map((review, index) => (
//               <div className="review-card" key={index}>
//                 <div className="quote">
//                   <p>{review.text}</p>
//                 </div>
//                 <div className="author-info">
//                   <img src={review.image} alt={`${review.author}`} className="author-image" />
//                   <p className="author-name">
//                     {review.author} - <span>LittleSnippets</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </OwlCarousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './Review.css';

// const reviews = [
//   {
//     author: "Pelican Steve",
//     text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
//     image: 'assets/images/r4.jpg', 
//   },
//   {
//     author: "Max Conversion",
//     text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
//     image: 'assets/images/r1.jpg', 
//   }
// ];

// const Review = () => {
//   const options = {
//     loop: true,
//     nav: false,
//     dots: true,
//     autoplay: 5000,
//     responsive: {
//       0: { items: 1 },
//       600: { items: 2 },
//       1000: { items: 2 }
//     }
//   };

//   return (
//     <div className="review-container">
//       <OwlCarousel className="owl-theme" {...options}>
//         {reviews.map((review, index) => (
//           <div className="review-card" key={index}>
//             <div className="review-content">
//               <div className="quote">
//                 <p>{review.text}</p>
//                 <span className="quote-mark">❝</span>
//               </div>
//               <div className="author-info">
//                 <strong>{review.author}</strong> - <span>LittleSnippets</span>
//               </div>
//             </div>
//             <div className="review-image">
//               <img src={review.image} alt={review.author} />
//             </div>
//           </div>
//         ))}
//       </OwlCarousel>
//     </div>
//   );
// };

// export default Review;
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css';

const reviews = [
  {
    author: "Pelican Steve",
    text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has.",
    image: 'assets/images/r4.jpg', 
  },
  {
    author: "Max Conversion",
    text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
    image: 'assets/images/r1.jpg', 
  },
  {
    author: "Pelican Steve",
    text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried.",
    image: 'assets/images/r2.jpg', 
  },
  {
    author: "Max Conversion",
    text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
    image: 'assets/images/r1.jpg', 
  }
];

const Review = () => {
  const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 2 }
    }
  };

  return (
    <div className="review-container" id="reviews">
      <div className="container">
        <div className="section-title">
          <div className="title">
            <div className="small-sep">
              <div className="sep-left"></div>
              <div className="small-details">Customer Reviews</div>
              <div className="sep-left"></div>
            </div>
          </div>
        </div>

        <OwlCarousel className="owl-theme" {...options}>
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-content">
                <div className="quote">
                  <p>{review.text}</p>
                  <span className="quote-mark">❝</span>
                </div>
                <div className="author-info">
                  <strong>{review.author}</strong> - <span>LittleSnippets</span>
                </div>
              </div>
              <div className="review-image">
                <img src={review.image} alt={review.author} />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Review;