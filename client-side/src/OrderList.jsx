// import { useEffect, useState } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import axios from "axios";

// const OrderList = () => {
//     const [data, setData] = useState([])
//     const getemail = localStorage.getItem('email')





//     useEffect(() => {
//         fetchGetApi()
//     }, [])

//     const fetchGetApi = async () => {
//         const response = await axios.get('http://localhost/projects/order_view.php')
//         const filterdata = response?.data?.filter(x => x.email === getemail) || []
//         setData(filterdata);
//     }
//     return (
//         <>
//             <Header />
//             <div style={{ padding: "20px 0" }}>
//                 <div style={{ maxHeight: "300px", overflow: "auto" }} className="container">
//                     {data?.length === 0 ? (
//                         <p>Your Order is empty.</p>
//                     ) : (
//                         <table className="c-table">
//                             <thead>
//                                 <tr>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>ID</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Mobile Number</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Address</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data?.map((item) => (
//                                     <tr key={item.id} className="c-tr">
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.id}</td>

//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
//                                             <div style={{ display: 'flex', gap: "20px" }}>
//                                                 {
//                                                     JSON.parse(item?.products)?.map(x =>
//                                                         <img src={x.img} alt={x.name} className="c-img" />
//                                                     )
//                                                 }
//                                             </div>
//                                         </td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.email}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.mobileNumber}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.totalAmount}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.address}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                             Pending
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default OrderList;

// import { useEffect, useState } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import axios from "axios";

// const OrderList = () => {
//     const [data, setData] = useState([]);
//     const getemail = localStorage.getItem('email');

//     useEffect(() => {
//         fetchGetApi();
//     }, []);

//     const fetchGetApi = async () => {
//         try {
//             const response = await axios.get('http://localhost/projects/order_view.php');
//             console.log("API Response:", response.data);
//             const filterdata = response?.data?.filter(x => x.email === getemail) || [];
//             setData(filterdata);
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div style={{ padding: "20px 0" }}>
//                 <div style={{ maxHeight: "300px", overflow: "auto" }} className="container">
//                     {data?.length === 0 ? (
//                         <p>Your Order is empty.</p>
//                     ) : (
//                         <table className="c-table">
//                             <thead>
//                                 <tr>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>ID</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Mobile Number</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Address</th>
//                                     <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                  {data?.map((item) => (
//                                     <tr key={item.id} className="c-tr">
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.id}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
//                                             <div style={{ display: 'flex', gap: "20px" }}>
//                                                 {(() => {
//                                                     let products = [];
//                                                     try {
//                                                         products = typeof item.products === 'string' ? JSON.parse(item.products) : item.products;
//                                                     } catch (e) {
//                                                         console.error("Error parsing products JSON", e);
//                                                     }
//                                                     return Array.isArray(products) ? products.map((x, index) => (
//                                                         <img key={index} src={x.img} alt={x.name} className="c-img" />
//                                                     )) : null;
//                                                 })()}
//                                             </div>
//                                         </td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.email}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.mobileNumber}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.totalAmount}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.address}</td>
//                                         <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                                             Pending
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default OrderList;
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const OrderList = () => {
    const [data, setData] = useState([]);
    const getemail = localStorage.getItem('email');

    useEffect(() => {
        fetchGetApi();
    }, []);

    const fetchGetApi = async () => {
        try {
            const response = await axios.get('http://localhost/projects/order_view.php');
            console.log("API Response:", response.data);
            const filterdata = response?.data?.filter(x => x.email === getemail) || [];
            setData(filterdata);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    return (
        <>
            <Header />
            <div style={{ padding: "20px 0" }}>
                <div style={{ maxHeight: "300px", overflow: "auto" }} className="container">
                    {data?.length === 0 ? (
                        <p>Your Order is empty.</p>
                    ) : (
                        <table className="c-table">
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>ID</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Mobile Number</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Address</th>
                                    <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item.id} className="c-tr">
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.id}</td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px' }}>
                                            <div style={{ display: 'flex', gap: "20px" }}>
                                                {(() => {
                                                    try {
                                                        const parsedProducts = typeof item.products === 'string' ? JSON.parse(item.products) : item.products;
                                                        return Array.isArray(parsedProducts) 
                                                            ? parsedProducts.map(x => <img key={x.img} src={x.img} alt={x.name} className="c-img" />)
                                                            : <p>Invalid product data</p>;
                                                    } catch (error) {
                                                        console.error("JSON parse error for item", item, error);
                                                        return <p>Invalid product data</p>;
                                                    }
                                                })()}
                                            </div>
                                        </td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.email}</td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.mobileNumber}</td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>₹{item.totalAmount}</td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.address}</td>
                                        <td className="c-col" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                            Pending
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OrderList;
