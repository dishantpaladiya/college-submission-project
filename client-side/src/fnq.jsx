// import React, { useState } from 'react';
// import './fnq.css'; // Import the CSS file

// const Fnq = () => {
//     // State to track which question is expanded
//     const [expandedQuestion, setExpandedQuestion] = useState(null);

//     // Function to handle question click
//     const handleQuestionClick = (index) => {
//         // Toggle the question; if it's already expanded, collapse it
//         setExpandedQuestion(expandedQuestion === index ? null : index);
//     };

//     return (
//         <div className="faq-block">
//             <div className="faq-image">
//                 <img src="assets/images/m.jpg" alt="Drone" />
//             </div>
//             <div className="faq-content">
//                 <h2>QUESTIONS & ANSWERS</h2>
//                 <h1>POPULAR QUESTIONS ABOUT OUR DRONE LINEUP</h1>
//                 <div className="faq-item">
//                     <h3 onClick={() => handleQuestionClick(0)} style={{ cursor: 'pointer' }}>
//                         DO YOU OFFER CORPORATE DISCOUNTS?
//                     </h3>
//                     {expandedQuestion === 0 && (
//                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <h3 onClick={() => handleQuestionClick(1)} style={{ cursor: 'pointer' }}>
//                         WHAT IS THE PRODUCT WARRANTY?
//                     </h3>
//                     {expandedQuestion === 1 && (
//                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <h3 onClick={() => handleQuestionClick(2)} style={{ cursor: 'pointer' }}>
//                         CAN I TEST THE DRONE I LIKE?
//                     </h3>
//                     {expandedQuestion === 2 && (
//                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Fnq;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fnq.css";

const Fnq = () => {
    const [faqData, setFaqData] = useState([]);
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = () => {
        axios.get("http://localhost/projects/fnq_view.php")
            .then(response => {
                setFaqData(response.data);
            })
            .catch(error => {
                console.error("Error fetching FAQ data:", error);
            });
    };

    const handleQuestionClick = (id) => {
        setExpandedQuestion(expandedQuestion === id ? null : id);
    };

    return (
        <div className="faq-block">
            <div className="faq-image">
                <img src="assets/images/m.jpg" alt="Drone" />
            </div>
            <div className="faq-content">
                <h2>QUESTIONS & ANSWERS</h2>
                <h1>POPULAR QUESTIONS ABOUT OUR DRONE LINEUP</h1>
                {faqData.map((item) => (
                    <div className="faq-item" key={item.id}>
                        <h3 onClick={() => handleQuestionClick(item.id)} style={{ cursor: "pointer" }}>
                            {item.que}
                        </h3>
                        {expandedQuestion === item.id && <p>{item.ans}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fnq;
