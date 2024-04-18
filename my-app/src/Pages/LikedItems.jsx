import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard2 from "../ProductCard2";
import { Grid } from "@mui/material";
import Header from "../Header";


function LikedItems(props) {
    const [cartitems, setCartItems] = useState([]);

    useEffect(() => {
        addcart();
    }, []);

    async function addcart() {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        try {
            const res = await axios.post("/likeditems", config);
            if (res.status === 200) {
                console.log("Form submitted successfully!");
                console.log(res.data.message);
                setCartItems(res.data.message);
            } else {
                console.log("Error:", res.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
        <div>
            <Header />
            <div className="container1">
                <Grid container spacing={7} justify="center" className="cenalign" sx={{marginTop:"1rem"}}>
                    {cartitems.map((item, index) => {
                        return (
                            <Grid item xs={12} lg={2.5} key={index}>
                                <ProductCard2
                                    className="box"
                                    imagename={`data:image/jpeg;base64,${cartitems[index].imagex}`}
                                    pname={cartitems[index].prodname}
                                    price={cartitems[index].price}
                                    descr={cartitems[index].descr}
                                    id={index} 
                                />
                            </Grid>
                        );
                        
                    })}
                </Grid>
            </div>
        </div>
    );
}

export default LikedItems;
