import React, {useState, useEffect} from "react";
import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";

function Men() {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get('/getimagesm');
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
            <div className="container1">
                <Grid container spacing={7} justify="center" className="cenalign" sx={{marginTop:"1rem"}}>
                    {images.map((item, index) => {
                        return (
                            <Grid item xs={12} lg={2.5} key={index}>
                                <ProductCard
                                    className="box"
                                    imagename={`data:image/jpeg;base64,${item.imageData}`}
                                    // jquery olage js
                                    pname={item.prodname}
                                    price={item.price}
                                    descr={item.descr}
                                    id={item.key1}
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
export default Men;