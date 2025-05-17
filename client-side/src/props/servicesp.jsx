import React from "react";

const Servicesp = (props) => {
    return (
        <>
            <div className="col brand-item">
                <div className="b-img">
                    <a href="#">
                        <img src={props.img} alt="imag2" />
                    </a>
                    <div className="b-text">
                       {props.text}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Servicesp;