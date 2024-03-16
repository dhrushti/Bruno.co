import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";
import Header from "../Header";
import Footer from "../Footer";
// import BrushIcon from '@mui/icons-material/Brush';
// import PaletteIcon from '@mui/icons-material/Palette';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// function Shop(props){
//     const featureStyle = {
//         paddingTop: '10rem', 
//         paddingBottom: '3rem',
//         margin: '5rem', 
//         borderRadius: '1rem',
//       };

//   const icons = [<PsychologyIcon fontSize="large" sx={{fontSize: '8rem'}} />, <BrushIcon fontSize="large" sx={{fontSize: '8rem'}} />, <PaletteIcon fontSize="large" sx={{fontSize: '8rem'}} />, <QueryStatsIcon fontSize="large" sx={{fontSize: '8rem'}} />]
//     return(
//         <div id="features" className="text-center" style={featureStyle}>
//           <div className="container">
//             <div className="col-md-10 col-md-offset-1 section-title">
//               <h2>Features</h2>
//             </div>
//             <div className="row">
//               {props.data
//                 ? props.data.map((d, i) => (
//                     <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                       {" "}
//                       {icons[i]}
//                       {/* <QueryStatsIcon fontSize="large" sx={{fontSize: '8rem'}} /> */}
//                       <h3>{d.title}</h3>
//                       <p>{d.text}</p>
//                     </div>
//                   ))
//                 : "Loading..."}
//             </div>
//           </div>
//         </div>
//       );

// }
function Shop(props) {
  return (
    <div>
    <Header />
    <div className="container1">
      <Grid container spacing={7} justify="center" className="cenalign " >
      {props.name==='men'&&
              <img  src="../img/coverb.webp" className="container" />  
            }
            {
              props.name==='kids' &&
              <img  src="../img/banner5.jpg" width='500' style={{marginTop:'3.5rem',borderRadius:'10px'}}/>
            }
        {props.arr.map((items, index) => {
          return (
            <Grid item xs={12} lg={2.5}>
 
            

              <ProductCard
                className="box"
                imagename={props.arr[index].ImgName}
                pname={props.arr[index].Pname}
                price={props.arr[index].price}
                descr={props.arr[index].descr}
                id={index} 
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
      <Footer />
    </div>
  );
}
export default Shop;