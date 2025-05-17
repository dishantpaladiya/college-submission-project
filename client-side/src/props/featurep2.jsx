import React from "react";

const Featurep2 = (props) => {
    return (
        <>
            <div className="wt-box">
                <div className="right-icon">
                    <div className="icon-md">
                        <span className="icon-sell">
                            <img src={props.img} ></img>
                        </span>
                    </div>
                    <div className="icon-content right">
                        <div className="box-title">
                            <h4>{props.title}</h4>
                        </div>
                        <div className="box-content">
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featurep2;