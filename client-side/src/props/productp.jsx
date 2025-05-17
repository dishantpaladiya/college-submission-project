
// import React from "react";
// import { useCart } from "react-use-cart";

// const Productp = (props) => {
//   const { addItem } = useCart(); // Access addItem function

//   const handleAddToCart = () => {
//     // Add confirmation dialog before adding to cart
//     const isConfirmed = window.confirm('Are you sure you want to add this item to the cart?');
    
//     if (isConfirmed) {
//       addItem({
//         id: props.id, // Ensure each product has a unique id
//         name: props.dec, // Product name (description)
//         price: props.price, // Product price (should be a number)
//         img: props.img, // Product image (optional if needed in cart)
//         quantity: 1, // Default quantity of 1
//       });
//     }
//   };

//   return (
//     <>
//       <div className="col-lg-3 col-md-6 col-sm-12 featured-item">
//         <div className="item-inner">
//           <div className="i-block">
//             <a href="#">
//               <img src={props.img} alt={props.dec} />
//             </a>
//             <div className="new">
//               <p>{props.title}</p>
//             </div>
//             <div className="s-icon">
//               <a href="#">
//                 {/* <i className="fas fa-search"></i> */}
//                 {/* <i className="fas fa-shopping-cart"></i> */}
//               </a>
//             </div>
//           </div>
//           <div className="about-p">
//             <div className="p-name">
//               <a href="#">{props.dec}</a>
//             </div>
//             <div className="p-price">
//               <p>{props.price}.00$</p>
//             </div>
//             <div className="p-item">
//               <button className="btn-add" onClick={handleAddToCart}>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Productp;
import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Productp = (props) => {
  const { addItem } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLogin") === "yes";

    if (!isLoggedIn) {
      alert("Please log in to add items to your cart.");
      navigate("/login"); // Redirect to login page
      return;
    }

    const isConfirmed = window.confirm("Are you sure you want to add this item to the cart?");
    
    if (isConfirmed) {
      addItem({
        id: props.id,
        name: props.dec,
        price: props.price,
        img: props.img,
        quantity: 1,
      });
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 featured-item">
      <div className="item-inner">
        <div className="i-block">
          <a href="#">
            <img src={props.img} alt={props.dec} />
          </a>
          <div className="new">
            <p>{props.title}</p>
          </div>
        </div>
        <div className="about-p">
          <div className="p-name">
            <a href="#">{props.dec}</a>
          </div>
          <div className="p-price">
            <p>{props.price}.00₹</p>
          </div>
          <div className="p-item">
            <button className="btn-add" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productp;
