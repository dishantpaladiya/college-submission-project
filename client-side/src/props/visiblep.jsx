import React from "react";

const Visiblep = (props) => {
    return (
        <>
            <div class="r-item">
                <div class="t-contant">
                    <div class="a-review">
                        <span class="r-icon">
                            <i class="fa-solid fa-jet-fighter-up"></i> 
                        </span>
                        <h4>
                            {props.title}
                        </h4>
                    </div>
                    <div class="c-review">
                        <p>
                            {props.text}
                        </p>
                        <a href="#" className="icons">learn more<i class="fa-solid fa-arrow-right"></i></a>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Visiblep;