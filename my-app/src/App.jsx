import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Bestseller from './Pages/Bestseller';
import Shop from './Pages/Shop';
import prodinfo from "./ProductInfo";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cartitems from "./Pages/Cartitems";
function App() {

  const [msg,setMsg]=useState("");
  useEffect(()=>{
    fetch("http://localhost:8000/xyz")
    .then((res)=>res.json())
    .then((data)=>setMsg(data.msg));
  },[]);

  var men = [], women = [], kids = [];
  for (var i = 0; i < prodinfo.length; i++) {
    if (prodinfo[i].category === "men") {
      men.push(prodinfo[i])
    }
    else if (prodinfo[i].category === "women") {
      women.push(prodinfo[i])
    }
    else if (prodinfo[i].category === "kids") {
      kids.push(prodinfo[i])
    }
  }
  return (
    <div className="App">
      <h1>{msg}</h1>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route exact path="/bestseller" element={<Bestseller />} />
          <Route exact path="/men" element={<Shop arr={men} name="men" />} />
          <Route exact path="/women" element={<Shop arr={women} name='women' />} />
          <Route exact path="/kids" element={<Shop arr={kids} name='kids' />} />
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/cartitems" element={<Cartitems/>}/>
        </Routes>
      </BrowserRouter> 

    </div>
  );

}

export default App;