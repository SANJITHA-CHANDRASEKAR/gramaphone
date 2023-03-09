import React from "react";
import { Link } from "react-router-dom";
function Signup() {
      return (
        <div>
          
          <form action>
            <div className="c">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
              <div className="clearfix">
                <button type="button" className="bbtn"><Link to="/" className="play">BACK</Link></button>
                <button type="submit" className="signupbtn"><Link  to="/second" className="play">SIGN UP</Link></button>
              </div>
            </div>
          </form>
        </div>
      );
    }
export default Signup;