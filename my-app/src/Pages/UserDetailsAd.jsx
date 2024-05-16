import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import BTable from "./BTable";


function UserDetailsAd(props) {
    const [cartitems, setCartItems] = useState([]);
    const [names, setNames] = useState([]);
    const [emails, setEmails] = useState([]);

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
            const res = await axios.post("/userdetails", config);
            if (res.status === 200) {
                console.log("Form submitted successfully!");
                setCartItems(res.data.message);
                console.log(cartitems);
                // Extract item_no values and update arr
                const name1 = res.data.message.map(item => item.name);
                const email1 = res.data.message.map(item => item.email);
                
                setNames(name1);
                setEmails(email1);
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
            

            <BTable fname={names} fmail={emails}/>
            
        </div>
    );
}

export default UserDetailsAd;
