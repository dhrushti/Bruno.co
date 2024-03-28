import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard1 from "../Productcard1";
import prodinfo from "../ProductInfo";
import { Grid } from "@mui/material";
import Header from "../Header";


function Cartitems(props) {
    const [cartitems, setCartItems] = useState([]);
    const [arr, setArr] = useState([]);

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
            const res = await axios.post("/cartitems", config);
            if (res.status === 200) {
                console.log("Form submitted successfully!");
                setCartItems(res.data.message);
                // Extract item_no values and update arr
                const itemNos = res.data.message.map(item => item.item_no);
                setArr(itemNos);
            } else {
                console.log("Error:", res.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    console.log(arr);

    return (
        <div>
            <Header />
            <div className="container1">
                <Grid container spacing={7} justify="center" className="cenalign">
                    {prodinfo.map((item, index) => {
                        if(arr.includes(index)){
                        return (
                            <Grid item xs={12} lg={2.5} key={index}>
                                <Productcard1
                                    className="box"
                                    imagename={prodinfo[index].ImgName}
                                    pname={prodinfo[index].Pname}
                                    price={prodinfo[index].price}
                                    descr={prodinfo[index].descr}
                                    id={index} />
                            </Grid>
                        );
                        }
                    })}
                </Grid>
            </div>
        </div>
    );
}

export default Cartitems;
