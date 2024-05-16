import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Bestseller from './Pages/Bestseller';
import prodinfo from "./ProductInfo";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cartitems from "./Pages/Cartitems";
import AddProductForm from "./AddProductForm";
import Adminlogin from "./Pages/Adminlogin";
import AdminPage from "./Pages/AdminPage";
import UserDetailsAd from "./Pages/UserDetailsAd";
import LikedItems from "./Pages/LikedItems";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import About from "./Pages/About";
function App() {

  

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
  
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
 
          <Route exact path="/bestseller" element={<Bestseller />} />
          <Route exact path="/men" element={<Men/>} />
          <Route exact path="/women" element={<Women/>} />
          <Route exact path="/kids" element={<Kids />} />
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/cartitems" element={<Cartitems/>}/>
          <Route exact path="/addproductcard" element={<AddProductForm/>}/>
          <Route exact path="/admin123" element={<Adminlogin/>}/>
          <Route exact path="/adminpage" element={<AdminPage/>}/>
          <Route exact path="/userdetails" element={<UserDetailsAd/>}/>
          <Route exact path="/likeditems" element={<LikedItems/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> 

    </div>
  );

}

export default App;