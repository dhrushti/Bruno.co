import React, { useEffect, useState } from "react";
import axios from "axios";

function Cartitems(props) {
    const [cartitems, setCartItems] = useState([]);
    useEffect(()=>{
        addcart();
    },[]);
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
                <div key={index}>
                    <h1>{item.item_no}</h1>
                </div>
            ))}
        </div>   
    );
}
export default Cartitems;