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
import axios from "axios";
// import TransitionGroupExample from "./TransitionGroupExample";

function Home() {
    // const [cartitems, setCartItems] = useState([])
    // const [arr, setArr] = useState([]);
    // const [img, setImg] = useState([]);

    // useEffect(() => {
    //     addcart();
    // }, []);

    // async function addcart() {
    //     const config = {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     };

    //     try {
    //         const res = await axios.post("/", config);
    //         if (res.status === 200) {
    //             console.log("Form submitted successfully!");
    //             setCartItems(res.data.message);
    //             setImg(res.data.images)
    //             // Extract item_no values and update arr
    //             const itemNos = res.data.message.map(item => item.key1);
    //             setArr(itemNos);
    //         } else {
    //             console.log("Error:", res.data);
    //         }
    //     } catch (error) {
    //         console.error("An error occurred:", error);
    //     }
    // }
    // console.log(arr);
    // console.log(img);
    const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get('/getimages');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }, []);

  return (
    <div>
      <Header />
      <Coverpage d={data}/>
      <Banners/>
      <div className="container1">
        <Grid container spacing={7} justify="center" className="cenalign">
          {images.map((item, index) => {
            console.log(item);
          return (
              <Grid item xs={12} lg={2.5} key={index}>
                <ProductCard
                  className="box"
                  imagename={`data:image/jpeg;base64,${item.imageData}`}
                  // jquery olage js
                  pname={item.prodname}
                  price={item.price} 
                  descr={item.descr}
                  id={item.item_no}
                />
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
