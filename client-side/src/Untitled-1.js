
// // import React from "react";
// // import { useCart } from "react-use-cart";

// // const Cart = () => {
// //   const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart(); // Access cart functions including cart total and empty cart

// //   return (
// //     <div>
// //       <h2 className="c-head">Cart</h2>
// //       {items.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <ul className="c-ul">
// //             {items.map((item) => (
// //               <li key={item.id} className="c-li">
// //                 <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '10px' }}  className="c-img"/>
// //                 {item.name} x {item.quantity} = ₹{item.price * item.quantity}
// //                 <div className="c-btn">
// //                   <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
// //                   <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
// //                   <button onClick={() => removeItem(item.id)} className="c-remove"> Remove</button>
// //                   <div className="c-pending"> pending</div>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>

// //           <div>
// //             <h3>Total:₹{cartTotal}</h3>
// //             <button onClick={() => emptyCart()} className="btn btn-danger">
// //               clear Cart
// //             </button>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;
// import React from "react";
// import { useCart } from "react-use-cart";

// const Cart = () => {
//   const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart(); // Access cart functions including cart total and empty cart

//   return (
//     <div className="container">
//       <h2 className="c-head">product's that you add to cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <table className="c-table">
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item) => (
//               <tr key={item.id} className="c-tr">
//                 <td classname="c-col">
//                   <img src={item.img} alt={item.name} className="c-img"/>
//                 </td>
//                 <td classname="c-col">{item.name}</td>
//                 <td classname="c-col">₹{item.price}</td>
//                 <td classname="c-col">
//                   <div className="c-btn">
//                     <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
//                     <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
//                     <span className="c-quantity">{item.quantity}</span>
//                   </div>
//                 </td>
//                 <td classname="c-col">₹{item.price * item.quantity}</td>
//                 <td classname="c-col">
//                   <button onClick={() => removeItem(item.id)} className="c-remove"> Remove</button>
//                 </td>
//                 <td classname="c-col">
//                   <div className="c-pending"> pending</div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4">Total:</td>
//               <td classname="c-col">₹{cartTotal}</td>
//               <td classname="c-col">
//                 <button onClick={() => emptyCart()} className="btn btn-danger c-clear-btn  degine">
//                   clear Cart
//                 </button>
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import { useCart } from "react-use-cart";

// const Cart = () => {
//     const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart(); // Access cart functions including cart total and empty cart

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     return (
//         <div className="container">
//             {/* <h2 className="c-head">Products that you added to cart</h2> */}
//             <div className="title c-title">
//                 <div className="small-sep">
//                     <div className="sep-left"></div>
//                     <div className="small-detils c-head">Products that you added to cart</div>
//                     <div className="sep-left"></div>
//                 </div>
//             </div>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table className="c-table">
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Image</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Product</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Price</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Quantity</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Total</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Remove</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px'  }}>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id} className="c-tr">
//                                 <td classname="c-col" style={{ border: '1px solid #ddd', padding: '10px'  }}>
//                                     <img src={item.img} alt={item.name} className="c-img" />
//                                 </td>
//                                 <td classname="c-col" style={{ border: '1px solid #ddd', padding: '10px' ,textAlign:'center' }}>{item.name}</td>
//                                 <td classname="c-col" style={{ border: '1px solid #ddd' , padding: '10px',textAlign:'center' }}>₹{item.price}</td>
//                                 <td classname="c-col" style={{ border: '1px solid #ddd', padding: '10px' ,textAlign:'center' }}>
//                                     <div className="c-btn">
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
//                                         <span className="c-quantity">{item.quantity}</span>
//                                     </div>
//                                 </td>
//                                 <td classname="c-col" style={{ border: '1px solid #ddd', padding: '10px' ,textAlign:'center' }}>₹{item.price * item.quantity}</td>
//                                 <td className="c-removw" style={{ border: '1px solid #ddd' }}>
//                                     <button onClick={() => removeItem(item.id)} className="c-remove">Remove</button>
//                                 </td>
//                                 <td classname="c-col" style={{ border: '1px solid #ddd', padding: '10px' ,textAlign:'center' }}>
//                                     <div className="c-pending">Pending</div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td >₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart} className="btn btn-danger c-clear-btn  degine">
//                                     Clear Cart
//                                 </button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Cart;

// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";
// import './Cart.css';


// const Cart = () => {
//     const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [formData, setFormData] = useState({ mobileNumber: '', email: '', address: '', cashOnDelivery: false });
//     const [orderStatus, setOrderStatus] = useState('');

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };
//     const totalAmountdata = items.reduce((acc, item) => acc + item.itemTotal, 0);


//     const handlePayment = async () => {
        
//         const orderData = {
//             ...formData,
//             products: items,
//             totalAmount: totalAmountdata
//         };
    
//         const formDatasend = new FormData();
//         formDatasend.append('products', JSON.stringify(orderData.products)); // Convert products array to JSON string
//         formDatasend.append('mobileNumber', orderData.mobileNumber);
//         formDatasend.append('email', orderData.email);
//         formDatasend.append('address', orderData.address);
//         formDatasend.append('cashOnDelivery', orderData.cashOnDelivery ? 1 : 0); // Convert boolean to integer
//         formDatasend.append('totalAmount', orderData.totalAmount);
    
//         try {
//             const response = await axios.post('http://localhost/projects/order_insert.php', formDatasend , {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log("esponse.data",response.data);
            
//             if (response?.data?.status) {
//                 alert("Data Successfully Inserted.");
//                 localStorage.removeItem('react-use-cart')
//                 window.location.reload();
//             } else {
//                 alert("Data Failed.");
//             }
//         } catch (error) {
//             console.error("There was an error!", error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="title c-title">
//                 <div className="small-sep">
//                     <div className="sep-left"></div>
//                     <div className="small-detils c-head">Products that you added to cart</div>
//                     <div className="sep-left"></div>
//                 </div>
//             </div>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table className="c-table">
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Image</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Remove</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id} className="c-tr">
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
//                                     <img src={item.img} alt={item.name} className="c-img" />
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.name}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-btn">
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
//                                         <span className="c-quantity">{item.quantity}</span>
//                                     </div>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price * item.quantity}</td>
//                                 <td className="c-removw" style={{ border: '1px solid #ddd' }}>
//                                      <button onClick={() => removeItem(item.id)} className="c-remove">Remove</button>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-pending">{orderStatus || 'Pending'}</div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td>₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart} className="btn btn-danger c-clear-btn degine">
//                                     Clear Cart
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => setModalIsOpen(true)} className="btn btn-primary degine ">
//                                     Order Now
//                                 </button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}

//             {/* Modal for Order Now */}
//             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//                 <h2>Order Details</h2>
//                 <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} style={{ display: 'grid', gap: '10px' }}>
//                     <div>
//                         <label>Mobile Number:</label>
//                         <input type="text" name="mobileNumber" value={formData.mobile} onChange={handleInputChange} required />
//                     </div>
//                     <div>
//                         <label>Email:</label>
//                         <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
//                     </div>
//                     <div>
//                         <label>Address:</label>
//                         <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
//                     </div>
//                     <div>
//                         <label>
//                             <input type="checkbox" name="cashOnDelivery" checked={formData.cashOnDelivery} onChange={handleInputChange} />
//                             Cash On Delivery
//                         </label>
//                     </div>
//                     <button type="submit">Save</button>
//                 </form>
//                 <button onClick={() => setModalIsOpen(false)}>Close</button>
//             </Modal>
//         </div>
//     );
// };

// export default Cart;

// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";


// const Cart = () => {
//     const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [formData, setFormData] = useState({ mobileNumber: '', email: '', address: '', cashOnDelivery: false });
//     const [orderStatus, setOrderStatus] = useState('');

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const totalAmountdata = items.reduce((acc, item) => acc + item.itemTotal, 0);

//     const handlePayment = async () => {
//         const orderData = {
//             ...formData,
//             products: items,
//             totalAmount: totalAmountdata
//         };

//         const formDatasend = new FormData();
//         formDatasend.append('products', JSON.stringify(orderData.products));
//         formDatasend.append('mobileNumber', orderData.mobileNumber);
//         formDatasend.append('email', orderData.email);
//         formDatasend.append('address', orderData.address);
//         formDatasend.append('cashOnDelivery', orderData.cashOnDelivery ? 1 : 0);
//         formDatasend.append('totalAmount', orderData.totalAmount);

//         try {
//             const response = await axios.post('http://localhost/projects/order_insert.php', formDatasend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log("response.data", response.data);

//             if (response?.data?.status) {
//                 alert("Data Successfully Inserted.");
//                 localStorage.removeItem('react-use-cart');
//                 window.location.reload();
//             } else {
//                 alert("Data Failed.");
//             }
//         } catch (error) {
//             console.error("There was an error!", error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="title c-title">
//                 <div className="small-sep">
//                     <div className="sep-left"></div>
//                     <div className="small-detils c-head">Products that you added to cart</div>
//                     <div className="sep-left"></div>
//                 </div>
//             </div>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table className="c-table">
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Image</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Remove</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id} className="c-tr">
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
//                                     <img src={item.img} alt={item.name} className="c-img" />
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.name}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-btn">
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
//                                         <span className="c-quantity">{item.quantity}</span>
//                                     </div>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price * item.quantity}</td>
//                                 <td className="c-removw" style={{ border: '1px solid #ddd' }}>
//                                      <button onClick={() => removeItem(item.id)} className="c-remove">Remove</button>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-pending">{orderStatus || 'Pending'}</div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td>₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart} className="btn btn-danger c-clear-btn degine">
//                                     Clear Cart
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => setModalIsOpen(true)} className="btn btn-primary degine ">
//                                     Order Now
//                                 </button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}

//             {/* Modal for Order Now */}
//             {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//                 <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
//                     <h2 style={{ textAlign: 'center' }}>Customer Details</h2>
//                     <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} style={{ display: 'grid', gap: '10px' }}>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number:</label>
//                             <input 
//                                 type="text" 
//                                 name="mobileNumber" 
//                                 value={formData.mobileNumber} 
//                                 onChange={handleInputChange} 
//                                 required 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                             <input 
//                                 type="email" 
//                                 name="email" 
//                                 value={formData.email} 
//                                 onChange={handleInputChange} 
//                                 required 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//                             <input 
//                                 type="text" 
//                                 name="address" 
//                                 value={formData.address} 
//                                 onChange={handleInputChange} 
//                                 required 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'flex', alignItems: 'center' }}>
//                                 <input 
//                                     type="checkbox" 
//                                     name="cashOnDelivery" 
//                                     checked={formData.cashOnDelivery} 
//                                     onChange={handleInputChange} 
//                                     style={{ marginRight: '10px' }} 
//                                 />
//                                 Cash On Delivery
//                             </label>
//                         </div>
//                         <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                             Save
//                         </button>
//                     </form>
//                     <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                         Close
//                     </button>
//                 </div>
//             </Modal> */}

// {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ textAlign: 'center' }}>Customer Details</h2>
//         <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} style={{ display: 'grid', gap: '10px' }}>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number:</label>
//                 <input 
//                     type="number" 
//                     name="mobileNumber" 
//                     value={formData.mobileNumber} 
//                     onChange={handleInputChange} 
//                     required 
//                     maxLength="10" 
//                     minLength="10" 
//                     pattern="[0-9]{10}" 
//                     title="Please enter a 10 digit mobile number" 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                 <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleInputChange} 
//                     required 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//                 <input 
//                     type="text" 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleInputChange} 
//                     required 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'flex', alignItems: 'center' }}>
//                     <input 
//                         type="checkbox" 
//                         name="cashOnDelivery" 
//                         checked={true} 
//                         disabled 
//                         style={{ marginRight: '10px' }} 
//                     />
//                     Cash On Delivery (Only available payment method)
//                 </label>
//             </div>
//             <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                 Save
//             </button>
//         </form>
//         <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//             Close
//         </button>
//     </div>
// </Modal> */}

// <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ textAlign: 'center' }}>Customer Details</h2>
//         <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} style={{ display: 'grid', gap: '10px' }}>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number:</label>
//                 <input 
//                     type="text" 
//                     name="mobileNumber" 
//                     value={formData.mobileNumber} 
//                     onChange={(e) => {
//                         // Allow only digits and limit to 10 characters
//                         const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
//                         handleInputChange({ target: { name: 'mobileNumber', value } });
//                     }} 
//                     required 
//                     maxLength="10" 
//                     pattern="\d{10}" 
//                     title="Please enter a 10 digit mobile number" 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                 <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleInputChange} 
//                     required 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//                 <input 
//                     type="text" 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleInputChange} 
//                     required 
//                     style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                 />
//             </div>
//             <div>
//                 <label style={{ display: 'flex', alignItems: 'center' }}>
//                     <input 
//                         type="checkbox" 
//                         name="cashOnDelivery" 
//                         checked={true} 
//                         disabled 
//                         style={{ marginRight: '10px' }} 
//                     />
//                     Cash On Delivery (Only available payment method)
//                 </label>
//             </div>
//             <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                 Save
//             </button>
//         </form>
//         <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//             Close
//         </button>
//     </div>
// </Modal>
//         </div>
//     );
// };

// export default Cart;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";

// const Cart = () => {
//     const { items, addItem, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const getemail = localStorage.getItem('email')
//     const [formData, setFormData] = useState({ mobileNumber: '', email: getemail, address: '', cashOnDelivery: false });
//     const [orderStatus, setOrderStatus] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const totalAmountdata = items.reduce((acc, item) => acc + item.itemTotal, 0);

//     const handlePayment = async () => {
//         // Check if COD is selected
//         if (!formData.cashOnDelivery) {
//             setErrorMessage("Please select Cash on Delivery to proceed.");
//             return;
//         }

//         const orderData = {
//             ...formData,
//             products: items,
//             totalAmount: totalAmountdata
//         };

//         const formDatasend = new FormData();
//         formDatasend.append('products', JSON.stringify(orderData.products));
//         formDatasend.append('mobileNumber', orderData.mobileNumber);
//         formDatasend.append('email', orderData.email);
//         formDatasend.append('address', orderData.address);
//         formDatasend.append('cashOnDelivery', orderData.cashOnDelivery ? 1 : 0);
//         formDatasend.append('totalAmount', orderData.totalAmount);

//         try {
//             const response = await axios.post('http://localhost/projects/order_insert.php', formDatasend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log("response.data", response.data);

//             if (response?.data?.status) {
//                 alert("Data Successfully Inserted.");
//                 localStorage.removeItem('react-use-cart');
//                 window.location.reload();
//             } else {
//                 alert("Data Failed.");
//             }
//         } catch (error) {
//             console.error("There was an error!", error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="title c-title">
//                 <div className="small-sep">
//                     <div className="sep-left"></div>
//                     <div className="small-detils c-head">Products that you added to cart</div>
//                     <div className="sep-left"></div>
//                 </div>
//             </div>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table className="c-table">
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Image</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Remove</th>
//                             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id} className="c-tr">
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
//                                     <img src={item.img} alt={item.name} className="c-img" />
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.name}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price}</td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-btn">
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="c-add">+</button>
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="c-minus">-</button>
//                                         <span className="c-quantity">{item.quantity}</span>
//                                     </div>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.price * item.quantity}</td>
//                                 <td className="c-removw" style={{ border: '1px solid #ddd' }}>
//                                      <button onClick={() => removeItem(item.id)} className="c-remove">Remove</button>
//                                 </td>
//                                 <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                     <div className="c-pending">{orderStatus || 'Pending'}</div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td>₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart} className="btn btn-danger c-clear-btn degine">
//                                     Clear Cart
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => setModalIsOpen(true)} className="btn btn-primary degine ">
//                                     Order Now
//                                 </button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}

//             {/* Modal for Order Now */}
//             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//                 <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
//                     <h2 style={{ textAlign: 'center' }}>Customer Details</h2>
//                     <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} style={{ display: 'grid', gap: '10px' }}>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                             <input 
//                                 type="email" 
//                                 name="email" 
//                                 disabled
//                                 value={formData.email} 
//                                 onChange={handleInputChange} 
//                                 required 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number:</label>
//                             <input 
//                                 type="text" 
//                                 name="mobileNumber" 
//                                 value={formData.mobileNumber} 
//                                 onChange={(e) => {
//                                     // Allow only digits and limit to 10 characters
//                                     const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
//                                     handleInputChange({ target: { name: 'mobileNumber', value } });
//                                 }} 
//                                 required 
//                                 maxLength="10" 
//                                 pattern="\d{10}" 
//                                 title="Please enter a 10 digit mobile number" 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//                             <input 
//                                 type="text" 
//                                 name="address" 
//                                 value={formData.address} 
//                                 onChange={handleInputChange} 
//                                 required 
//                                 style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
//                             />
//                         </div>
//                         <div>
//                             <label style={{ display: 'flex', alignItems: 'center' }}>
//                                 <input 
//                                     type="checkbox" 
//                                     name="cashOnDelivery" 
//                                     checked={formData.cashOnDelivery} 
//                                     onChange={handleInputChange} 
//                                     style={{ marginRight: '10px' }} 
//                                 />
//                                 Cash On Delivery
//                             </label>
//                         </div>
//                         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                         <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                             Save
//                         </button>
//                     </form>
//                     <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                         Close
//                     </button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default Cart;

import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Modal from "react-modal";
import axios from "axios";

const Cart = () => {
    const { items, cartTotal, emptyCart, removeItem } = useCart(); // Destructure removeItem here
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({ mobileNumber: '', email: '', address: '', cashOnDelivery: false });

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear the cart?')) {
            emptyCart();
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handlePayment = async () => {
        const orderData = {
            ...formData,
            products: items,
            totalAmount: cartTotal
        };

        try {
            // Create an order on the server
            const response = await axios.post('http://localhost/projects/create_order.php', {
                amount: cartTotal * 100, // Amount in paise
                currency: 'INR',
                receipt: 'receipt#1',
                payment_capture: 1
            });

            const { id: order_id } = response.data;

            // Initialize Razorpay
            const options = {
                key: 'rzp_test_m6GVeQ8aj8dIrE', // Enter the Key ID generated from the Razorpay Dashboard
                amount: cartTotal * 100, // Amount in paise
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Test Transaction',
                order_id: order_id, // This is the order_id created in your server
                handler: async function (response) {
                    // Handle successful payment
                    const paymentData = {
                        order_id: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                        ...orderData
                    };

                    // Send payment details to your server
                    await axios.post('http://localhost/projects/payment_success.php', paymentData);
                    alert('Payment Successful');
                    emptyCart();
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.mobileNumber
                },
                theme: {
                    color: '#F37254'
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    return (
        <div className="container">
            <div className="title c-title">
                <div className="small-sep">
                    <div className="sep-left"></div>
                    <div className="small-detils c-head">Products that you added to cart</div>
                    <div className="sep-left"></div>
                </div>
            </div>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="c-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.img} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>₹{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>₹{item.price * item.quantity}</td>
                                <td><button onClick={() => removeItem(item.id)}>Remove</button></td> {/* Use removeItem here */}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Total:</td>
                            <td>₹{cartTotal}</td>
                            <td>
                                <button onClick={handleClearCart}>Clear Cart</button>
                                <button onClick={() => setModalIsOpen(true)}>Order Now</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}

            {/* Modal for Order Now */}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
                <h2>Customer Details</h2>
                <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>Mobile Number:</label>
                        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="cashOnDelivery" checked={formData.cashOnDelivery} onChange={handleInputChange} />
                            Cash On Delivery
                        </label>
                    </div>
                    <button type="submit">Proceed to Payment</button>
                </form>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default Cart;

// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";

// const Cart = () => {
//     const { items, cartTotal, emptyCart, removeItem, updateItemQuantity } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const getemail = localStorage.getItem('email');
//     const [formData, setFormData] = useState({ mobileNumber: '', email: getemail || '', address: '', cashOnDelivery: false });
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handlePayment = async () => {
//         if (formData.cashOnDelivery) {
//             // Process Cash on Delivery order
//             const orderData = { ...formData, products: items, totalAmount: cartTotal };
//             const formDatasend = new FormData();
//             formDatasend.append('products', JSON.stringify(orderData.products));
//             formDatasend.append('mobileNumber', orderData.mobileNumber);
//             formDatasend.append('email', orderData.email);
//             formDatasend.append('address', orderData.address);
//             formDatasend.append('cashOnDelivery', 1);
//             formDatasend.append('totalAmount', orderData.totalAmount);
            
//             try {
//                 const response = await axios.post('http://localhost/projects/order_insert.php', formDatasend, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 if (response?.data?.status) {
//                     alert("Order placed successfully.");
//                     emptyCart();
//                     window.location.reload();
//                 } else {
//                     alert("Order failed.");
//                 }
//             } catch (error) {
//                 console.error("Order error!", error);
//             }
//         } else {
//             // Process Online Payment with Razorpay
//             try {
//                 const response = await axios.post('http://localhost/projects/create_order.php', {
//                     amount: cartTotal * 100,
//                     currency: 'INR',
//                     receipt: 'receipt#1',
//                     payment_capture: 1
//                 });

//                 const { id: order_id } = response.data;

//                 const options = {
//                     key: 'rzp_test_m6GVeQ8aj8dIrE',
//                     amount: cartTotal * 100,
//                     currency: 'INR',
//                     name: 'Your Company Name',
//                     description: 'Test Transaction',
//                     order_id: order_id,
//                     handler: async function (response) {
//                         const paymentData = {
//                             order_id: response.razorpay_order_id,
//                             payment_id: response.razorpay_payment_id,
//                             signature: response.razorpay_signature,
//                             ...formData,
//                             products: items,
//                             totalAmount: cartTotal
//                         };
//                         await axios.post('http://localhost/projects/payment_success.php', paymentData);
//                         alert('Payment Successful');
//                         emptyCart();
//                     },
//                     prefill: {
//                         name: formData.name,
//                         email: formData.email,
//                         contact: formData.mobileNumber
//                     },
//                     theme: { color: '#F37254' }
//                 };

//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//             } catch (error) {
//                 console.error("Payment error!", error);
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Products in Cart</h2>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Product</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id}>
//                                 <td><img src={item.img} alt={item.name} width="50" /></td>
//                                 <td>{item.name}</td>
//                                 <td>₹{item.price}</td>
//                                 <td>{item.quantity}</td>
//                                 <td>₹{item.price * item.quantity}</td>
//                                 <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td>₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart}>Clear Cart</button>
//                                 <button onClick={() => setModalIsOpen(true)}>Order Now</button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}

//             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//                 <h2>Customer Details</h2>
//                 <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} required disabled />
//                     <label>Mobile Number:</label>
//                     <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required maxLength="10" pattern="\d{10}" />
//                     <label>Address:</label>
//                     <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
//                     <label>
//                         <input type="checkbox" name="cashOnDelivery" checked={formData.cashOnDelivery} onChange={handleInputChange} />
//                         Cash On Delivery
//                     </label>
//                     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                     <button type="submit">{formData.cashOnDelivery ? 'Confirm Order' : 'Proceed to Payment'}</button>
//                 </form>
//                 <button onClick={() => setModalIsOpen(false)}>Close</button>
//             </Modal>
//         </div>
//     );
// };

// export default Cart;

// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";

// const Cart = () => {
//     const { items, cartTotal, emptyCart, removeItem, updateItemQuantity } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const getemail = localStorage.getItem('email');
//     const [formData, setFormData] = useState({ mobileNumber: '', email: getemail || '', address: '', cashOnDelivery: false });
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleClearCart = () => {
//         if (window.confirm('Are you sure you want to clear the cart?')) {
//             emptyCart();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handlePayment = async () => {
//         if (formData.cashOnDelivery) {
//             const orderData = { ...formData, products: items, totalAmount: cartTotal };
//             const formDatasend = new FormData();
//             formDatasend.append('products', JSON.stringify(orderData.products));
//             formDatasend.append('mobileNumber', orderData.mobileNumber);
//             formDatasend.append('email', orderData.email);
//             formDatasend.append('address', orderData.address);
//             formDatasend.append('cashOnDelivery', 1);
//             formDatasend.append('totalAmount', orderData.totalAmount);
            
//             try {
//                 const response = await axios.post('http://localhost/projects/order_insert.php', formDatasend, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 if (response?.data?.status) {
//                     alert("Order placed successfully.");
//                     emptyCart();
//                     setTimeout(() => {
//                         window.location.reload();
//                     }, 1000);
//                 } else {
//                     alert("Order failed.");
//                 }
//             } catch (error) {
//                 console.error("Order error!", error);
//             }
//         } else {
//             try {
//                 const response = await axios.post('http://localhost/projects/create_order.php', {
//                     amount: cartTotal * 100,
//                     currency: 'INR',
//                     receipt: 'receipt#1',
//                     payment_capture: 1
//                 });

//                 const { id: order_id } = response.data;

//                 const options = {
//                     key: 'rzp_test_m6GVeQ8aj8dIrE',
//                     amount: cartTotal * 100,
//                     currency: 'INR',
//                     name: 'Your Company Name',
//                     description: 'Test Transaction',
//                     order_id: order_id,
//                     handler: async function (response) {
//                         const paymentData = {
//                             order_id: response.razorpay_order_id,
//                             payment_id: response.razorpay_payment_id,
//                             signature: response.razorpay_signature,
//                             ...formData,
//                             products: items,
//                             totalAmount: cartTotal
//                         };
//                         await axios.post('http://localhost/projects/payment_success.php', paymentData);
//                         alert('Payment Successful');
//                         emptyCart();
//                         setTimeout(() => {
//                             window.location.reload();
//                         }, 1000);
//                     },
//                     prefill: {
//                         name: formData.name,
//                         email: formData.email,
//                         contact: formData.mobileNumber
//                     },
//                     theme: { color: '#F37254' }
//                 };

//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//             } catch (error) {
//                 console.error("Payment error!", error);
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Products in Cart</h2>
//             {items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Product</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id}>
//                                 <td><img src={item.img} alt={item.name} width="50" /></td>
//                                 <td>{item.name}</td>
//                                 <td>₹{item.price}</td>
//                                 <td>{item.quantity}</td>
//                                 <td>₹{item.price * item.quantity}</td>
//                                 <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td colSpan="4">Total:</td>
//                             <td>₹{cartTotal}</td>
//                             <td>
//                                 <button onClick={handleClearCart}>Clear Cart</button>
//                                 <button onClick={() => setModalIsOpen(true)}>Order Now</button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             )}

//             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//                 <h2>Customer Details</h2>
//                 <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} required disabled />
//                     <label>Mobile Number:</label>
//                     <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required maxLength="10" pattern="\d{10}" />
//                     <label>Address:</label>
//                     <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
//                     <label>
//                         <input type="checkbox" name="cashOnDelivery" checked={formData.cashOnDelivery} onChange={handleInputChange} />
//                         Cash On Delivery
//                     </label>
//                     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                     <button type="submit">{formData.cashOnDelivery ? 'Confirm Order' : 'Proceed to Payment'}</button>
//                 </form>
//                 <button onClick={() => setModalIsOpen(false)}>Close</button>
//             </Modal>
//         </div>
//     );
// };

// export default Cart;