import React from "react";
import Aboutp from "./props/about";

const About = () => {
    return (
        <>
            <div className="about-main" id="about">
                <div className="contant">
                    <div className="img">
                        <a href="#">
                            <img src="assets/images/mainabout1.jpg" alt="main-banner" />
                        </a>
                    </div>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="about-inner">
                            <div className="title">
                                <div className="small-sep">
                                    <div className="sep-left">

                                    </div>
                                    <div className="small-detils">
                                        About quality
                                    </div>
                                    <div className="sep-left">

                                    </div>
                                </div>
                                <h2>
                                    We're about Quality and Trust.
                                </h2>
                            </div>
                        </div>
                        <div className="section-inner">
                            <div className="section-row">
                                <Aboutp icon="assets/images/a1.png" head="How To Use Battery"
                                    description="Always use the recommended battery, charge it fully before flying, and avoid overcharging. Store in a cool, dry place and disconnect after use to prolong lifespan. Safety first!. " />

                                <Aboutp icon="assets/images/a2.png" head="How To Use Controller"
                                    description="Familiarize yourself with joystick functions, buttons, and modes. Ensure proper pairing with the drone, maintain a stable grip, and practice smooth movements for precise control. " />

                                <Aboutp icon="assets/images/a3.png" head="How To Fly Drone"
                                    description="Start in an open area, calibrate sensors, and take off slowly. Maintain steady altitude, avoid obstacles, and use gentle controls. Practice basic maneuvers before advanced flights.  " />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;