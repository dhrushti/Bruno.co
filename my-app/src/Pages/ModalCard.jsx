import React from "react";
import prodinfo from "../ProductInfo";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import axios from "axios";

function ModalCard() {
    const handleClick = (carty) => {
     
        console.log(carty);
        // Make a POST request to your backend endpoint
        axios.post('/cart', {carty})
          .then(response => {
            console.log(response.data);
            // Handle successful response here
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle error here
          });
      };
    return (
        <div className="parent12">
            <div className="left1">
                <img src="../../assets/Productimgs/z1.jpg" />
            </div>
            <div className="right1">
                <p className="category1">
                    {prodinfo[0].category}
                </p> 
                <p>
                    {prodinfo[0].Pname}
                </p>
                <p>
                    {prodinfo[0].price}
                </p>
                <p>
                    {prodinfo[0].descr}
                </p>
                <button onClick={() => handleClick(prodinfo.key)} style={{ width: '14rem', background: 'black', color: 'white', padding: '7px', marginTop: '0.8rem' }}>
                    <LocalMallOutlinedIcon sx={{ fontSize: '19px', paddingBottom: '3px' }} />
                    Add
                </button>

            </div>


        </div>



    );
}

export default ModalCard;