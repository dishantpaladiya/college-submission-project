
// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import Modal from "react-modal";
// import axios from "axios";

// const Cart = () => {
//     const { items, cartTotal, emptyCart, removeItem } = useCart();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const getemail = localStorage.getItem('email');
//     const [formData, setFormData] = useState({ 
//         mobileNumber: '', 
//         email: getemail || '', 
//         address: '', 
//         cashOnDelivery: false 
//     });

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
//         const orderData = { 
//             ...formData, 
//             products: items, 
//             totalAmount: cartTotal 
//         };

//         if (formData.cashOnDelivery) {
//             try {
//                 const response = await axios.post('http://localhost/projects/order_insert.php', orderData, {
//                     headers: { 'Content-Type': 'application/json' }
//                 });

//                 if (response?.data?.status === "success") {
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
//             try {
//                 const response = await axios.post('http://localhost/projects/create_order.php', {
//                     amount: cartTotal * 100,
//                     currency: 'INR',
//                     receipt: `receipt#${Date.now()}`,
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
//         <div className="container t-data">
//             <h2 className="t-head">Products in Cart</h2>
//             {items.length === 0 ? (
//                 <p className="t-p">Your cart is empty.</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr classname="t-tr">
//                             <th classname="t-th">Image</th>
//                             <th classname="t-th">Product</th>
//                             <th classname="t-th">Price</th>
//                             <th classname="t-th">Quantity</th>
//                             <th classname="t-th">Total</th>
//                             <th classname="t-th">Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item) => (
//                             <tr key={item.id}>
//                                 <td classname="t-td"><img src={item.img} alt={item.name} width="50" /></td>
//                                 <td classname="t-td">{item.name}</td>
//                                 <td classname="t-td">₹{item.price}</td>
//                                 <td classname="t-td">{item.quantity}</td>
//                                 <td classname="t-td">₹{item.price * item.quantity}</td>
//                                 <td classname="t-td"><button onClick={() => removeItem(item.id)} className="t-btn">Remove</button></td>
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
//                 <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="t-c">
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
//                     <button type="submit">{formData.cashOnDelivery ? 'Confirm Order' : 'Proceed to Payment'}</button>
//                 </form>
//                 <button onClick={() => setModalIsOpen(false)}>Close</button>
//             </Modal>
//         </div>
//     );
// };

// export default Cart;


import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Modal from "react-modal";
import axios from "axios";
import "./Cart.css"; // Importing the CSS file for styles

const Cart = () => {
    const { items, cartTotal, emptyCart, removeItem } = useCart();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const getemail = localStorage.getItem('email');
    const [formData, setFormData] = useState({ 
        mobileNumber: '', 
        email: getemail || '', 
        address: '', 
        cashOnDelivery: false 
    });

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

        if (formData.cashOnDelivery) {
            try {
                const response = await axios.post('http://localhost/projects/order_insert.php', orderData, {
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response?.data?.status === "success") {
                    alert("Order placed successfully.");
                    emptyCart();
                    window.location.reload();
                } else {
                    alert("Order failed.");
                }
            } catch (error) {
                console.error("Order error!", error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost/projects/create_order.php', {
                    amount: cartTotal * 100,
                    currency: 'INR',
                    receipt: `receipt#${Date.now()}`,
                    payment_capture: 1
                });

                const { id: order_id } = response.data;

                const options = {
                    key: 'rzp_test_m6GVeQ8aj8dIrE',
                    amount: cartTotal * 100,
                    currency: 'INR',
                    name: 'Your Company Name',
                    description: 'Test Transaction',
                    order_id: order_id,
                    handler: async function (response) {
                        const paymentData = {
                            order_id: response.razorpay_order_id,
                            payment_id: response.razorpay_payment_id,
                            signature: response.razorpay_signature,
                            ...formData,
                            products: items,
                            totalAmount: cartTotal
                        };
                        await axios.post('http://localhost/projects/payment_success.php', paymentData);
                        alert('Payment Successful');
                        emptyCart();
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.mobileNumber
                    },
                    theme: { color: '#F37254' }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (error) {
                console.error("Payment error!", error);
            }
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-header">Products in Cart</h2>
            {items.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr className="cart-row">
                            <th className="cart-th">Image</th>
                            <th className="cart-th">Product</th>
                            <th className="cart-th">Price</th>
                            <th className="cart-th">Quantity</th>
                            <th className="cart-th">Total</th>
                            <th className="cart-th">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="cart-item-row">
                                <td className="cart-td"><img src={item.img} alt={item.name} className="cart-img" /></td>
                                <td className="cart-td">{item.name}</td>
                                <td className="cart-td">₹{item.price}</td>
                                <td className="cart-td">{item.quantity}</td>
                                <td className="cart-td">₹{item.price * item.quantity}</td>
                                <td className="cart-td"><button onClick={() => removeItem(item.id)} className="cart-btn">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="cart-footer">
                            <td colSpan="4">Total:</td>
                            <td>₹{cartTotal}</td>
                            <td>
                                <button className="cart-action-btn" onClick={handleClearCart}>Clear Cart</button>
                                <button className="cart-action-btn" onClick={() => setModalIsOpen(true)}>Order Now</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}
            <Modal 
    isOpen={modalIsOpen} 
    onRequestClose={() => setModalIsOpen(false)} 
    ariaHideApp={false} 
    className="cart-modal"
    overlayClassName="modal-overlay"
>
    <div className="modal-content">
        <h2 className="modal-header">Customer Details</h2>
        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="cart-form">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required disabled />
            
            <label>Mobile Number:</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required maxLength="10" pattern="\d{10}" />
            
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleInputChange} required className="cart-textarea"></textarea>
            
            <label className="checkbox-container">
                <input type="checkbox" name="cashOnDelivery" checked={formData.cashOnDelivery} onChange={handleInputChange} />
                Cash On Delivery
            </label>
            
            <button type="submit" className="cart-submit-btn">
                {formData.cashOnDelivery ? 'Confirm Order' : 'Proceed to Payment'}
            </button>
        </form>
        
        <button className="modal-close-btn" onClick={() => setModalIsOpen(false)}>Close</button>
    </div>
</Modal>

        </div>
    );
};

export default Cart;
