import React from "react";
import { TextField } from "@mui/material";
export const Coverpage = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"  style={{marginTop:'6rem',height:'40rem'}}>
            
          <div className="container">
            <div className="row" style={{justifyContent:'space-around'}}>
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.d.Header? props.d.Header.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.d.Header? props.d.Header.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{
                    color:'white',
                    border:'2px solid white',

              
                  }}
                >
                  Explore   &#8594;
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
