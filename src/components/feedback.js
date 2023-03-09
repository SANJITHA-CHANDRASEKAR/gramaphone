 import React from "react";
import { Link } from "react-router-dom";
 function msg(){
  alert("Your Feedback form has been submitted successfully!!")
}
 
 function Download() {
      return (
        <div>
          <div align="center">
            <h1>GRAMAPHONE FEEDBACK</h1>
          </div>
          <div className="feed">
            <form action>
              <label htmlFor="fname" style={{fontWeight: 'bold'}}>NAME:</label>
              <input type="text" id="fname" name="fname" placeholder="Enter your name" required />
              <label htmlFor="lname" style={{fontWeight: 'bold'}}>MAIL ID:</label>
              <input type="text" id="lname" name="lname" placeholder="Enter your mail-id" required />
              <label htmlFor="feed" style={{fontWeight: 'bold'}}>FEEDBACK:</label>
              <textarea rows={7} cols={84} name="comment" required placeholder={"ENTER feedback.."} />
              <input className="sub" type="submit" defaultValue="submit" onClick={msg} />
            </form>
          </div>
          <button className="backbut"><Link to="/" className="but">Back</Link></button>
        </div>
      );
    }
export default Download;