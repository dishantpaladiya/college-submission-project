import React from "react";
import Featurep from "./props/featurep";
import Featurep2 from "./props/featurep2";

const Features = () => {
    return (
        <>
            <div className="main-div" id="feture">
                <div className="container">
                    <div className="title">
                        <div className="small-sep">
                            <div className="sep-left">

                            </div>
                            <div className="small-detils">
                                You Will Love It.
                            </div>
                            <div className="sep-left">

                            </div>
                        </div>
                        <h2>
                            How It Works
                        </h2>
                    </div>
                    <div className="main-features">
                        <div className="fline">
                            <Featurep2 img="assets/images/f1.png" title="How To Use Controller" text="The majority have suffered alteration in some form."/>
                            
                            <Featurep2 img="assets/images/f2.png" title="How To Fly Drone" text="The majority have suffered alteration in some form"/>
                            
                            <Featurep2 img="assets/images/f3.png" title="How To Use Controller" text="The majority have suffered alteration in some form"/>
                        </div>
                        <div className="mline">
                            <div className="how-drone">
                                <div className="how-it">
                                    <div className="drone-media">
                                        <img src="assets/images/drone-2.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fline">
                        
                            <Featurep img="assets/images/f4.png" title="How To Use Battery" text="The majority have suffered alteration in some form, by injected humor,"/>

                            <Featurep img="assets/images/f5.png" title="How To Play Video" text="The majority have suffered alteration in some form, by injected humor,"/>

                            <Featurep img="assets/images/f1.png" title="How To Control Camera" text="The majority have suffered alteration in some form, by injected humor,"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;