import React from "react";
import { Link } from "react-router-dom";
import arr from "../pic/arr.jpg";
import siddhu from "../pic/siddhu.jpeg";
import yess from "../pic/yess.jpeg";
import arj from "../pic/arj.jpeg";


 function SecondPage() {
      return (
        <div>
          
          
          <h1 className="pick">Pick yours...</h1>
          <br /><br />
          <div className="main">
            <div className="img1">
              <Link to="/third" className="but"><img src={arr} id="arr" alt="" /></Link>
              <h2>TAMIL</h2>
            </div>
            <div className="img2">
            <Link to="/third" className="but"><img src={siddhu} id="siddhu" alt="" /></Link>
              
              <h2>TELUGU</h2>
            </div>
            <div className="img3">
            <Link to="/third" className="but"><img src={yess} id="yess" alt="" /></Link>
              <h2>MALAYALAM</h2>
            </div>
            <div className="img4">
            <Link to="/third" className="but"><img src={arj} id="arj" alt="" /></Link>
              
              <h2>HINDI</h2>
            </div>
          </div>
          <button className="backbut"><Link to="/" className="but">Back</Link></button>
        </div>
      );
    }
 export default SecondPage;