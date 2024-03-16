// import React, { useState, useEffect } from "react";
// import { Features } from "../components/features";
// import About from "../components/About"
// // import { Services } from "./services";
// import { Gallery } from "../components/gallery";
// import { Testimonials } from "../components/testimonials";
// import { Team } from "../components/Team";
// import { Contact } from "../components/contact";
// import JsonData from "../data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "../App.css"
// import styled from 'styled-components'
// import Header from "../Header";

// const PortFolio = styled.div`
//     width: 100%;
//     margin-bottom: 6%;
//     margin-top: 80px;
// `;
// const Poster = styled.img`
//     width: 100%;
//     height: 100%;
//     border-bottom: 1px solid black;
   
// `;

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });


// const Landingpage = () => {
//   const [landingPageData, setLandingPageData] = useState({});


//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <div> 
//       <Header data={landingPageData.Header}/>
//       <About data={landingPageData.About} />
//       <Features data={landingPageData.Features} />
//       <Gallery data={landingPageData.Gallery} />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} />

//     </div>
//   );
// }
// export default Landingpage;