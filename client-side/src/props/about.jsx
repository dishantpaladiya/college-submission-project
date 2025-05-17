import React from "react";

const Aboutp = (props) => {
    return (
        <>
            <div className="section-col">
                <div className="section-text">
                    <div className="sec-box">
                        <div className="sec-icon">
                            {/* {props.icon} */}
                            <img src={props.icon} alt="" />
                        </div>
                        <div className="sec-head">
                            <h4>{props.head}</h4>
                        </div>
                        <div className="sec-text">
                            <p>{props.description} </p>
                            <a href="#">
                                read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutp;