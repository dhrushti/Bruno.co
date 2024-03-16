import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard1 from "../Productcard1";
import prodinfo from "../ProductInfo";
import { Grid } from "@mui/material";
function Cartitems(props) {
    const arr = []; // Assuming arr contains keys to be checked
const arr1 = [];
for (var i = 0; i < prodinfo.length; i++) {
    if (arr.includes(prodinfo[i].key)) {
        arr1.push(prodinfo[i]);
    }
}

    const [cartitems, setCartItems] = useState([]);
   
    useEffect(() => {
        addcart();
    
    }, []);
    async function addcart() {
        // e.preventDefault();

        // Retrieve form data



        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        try {
            // Make POST request
            const res = await axios.post("/cartitems", config);
            if (res.status === 200) {
                console.log("Form submitted successfully!");
                // Redirect user if needed

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
            {cartitems.map((item, index) => (
                // <div key={index}>
                //     <h1>{item.item_no}</h1>
                // </div>
                arr.push(item.item_no)
            ))}
            {props.arr.map((items, index) => {
                return (
                    <Grid item xs={12} lg={2.5}>



                        <Productcard1
                            className="box"
                            imagename={props.arr[index].ImgName}
                            pname={props.arr[index].Pname}
                            price={props.arr[index].price}
                            descr={props.arr[index].descr}
                            id={index}
                        />
                    </Grid>
                );})}
           
        </div>
    );
}
export default Cartitems;
