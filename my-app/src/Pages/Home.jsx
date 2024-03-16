import React, { useEffect, useState } from "react";
import Header from "../Header";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
import { Grid } from "@mui/material";
import prodinfo from "../ProductInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainslide from "../Mainslide";
import { Coverpage } from "./Coverpage";
import data from "../data/data.json";
import Banners from "./Banners";
// import TransitionGroupExample from "./TransitionGroupExample";

function Home() {
  // const [backendData ,setBackendData]=useState([{}])
  // useEffect(()=>{
  //   fetch('/api').then(
  //     s=>s
  //   ).then(
  //     data=>{
  //       setBackendData(data)
  //     }
  //   )
  // },[])
  return (
    <div>
    
        {/* <p>{data}</p>  */}
    
        <Header />
        {/* <TransitionGroupExample/> */}
        <Coverpage d={data}/>
        <Banners/>
        <div className="container1">
         <Grid container spacing={7} justify="center" className="cenalign">
            {prodinfo.map((items, index) => {
              return (
                <Grid item xs={12} lg={2.5}>
                  <ProductCard
                    className="box"
                    imagename={prodinfo[index].ImgName}
                    pname={prodinfo[index].Pname}
                    price={prodinfo[index].price}
                    descr={prodinfo[index].descr}
                    id={index} />
                </Grid>
              );
            })}   
          </Grid>
        </div>        
        <Mainslide/>
        <Footer />
    </div>
  );
}
export default Home;
