import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import Visible from "./Visible";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Review from "./review";
import Fnq from "./fnq";
import Video from "./video";
import Parallux from "./parllux";
// import Team from "./team";

const Body = ()=>{
    return(
        <>
            <Banner/>
            <Features/>
            <Products/>
            <Visible/>  
            <About/>
            <Video/>
            <Review />
            <Parallux/>
            <Fnq/>
            {/* <Team/> */}
            <Services/>
        </>
    );
}

export default Body;