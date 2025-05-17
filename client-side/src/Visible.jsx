import React from "react";
import Visiblep from "./props/visiblep";


const Visible = () => {
    return (
        <>
            <div className="r-main main">
                <div className="container">
                    <div className="r-space">
                        <div className="title">
                            <div className="small-sep">
                                <div className="sep-left"></div>
                                <div className="small-detils">CREATE A HIGHLY VISIBLE</div>
                                <div className="sep-left"></div>
                            </div>
                        </div>
                        <div className="r-inner">
                            <div className="r-inner">
                            <Visiblep title="Pre flight" text="Perform checks on battery, propellers, and GPS calibration. Ensure firmware is updated and weather is suitable." />

                           <Visiblep title="in the air" text="Maintain line of sight, use bright LED indicators, and avoid no-fly zones. Fly responsibly" />
                          <Visiblep title="on the ground" text="Land on a clear, stable surface. Power down safely, inspect for damage, and store properly for the next flight." /> 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Visible;
