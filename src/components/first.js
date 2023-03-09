import React from "react";
import { Link } from "react-router-dom";

function FirstPage()
{
      return (
        <div>
          <ul >
            <li title="This web page was created on 8,Nov 2022">ABOUT US</li>
            <li title="For any queries contact ADMIN">HELP</li>
            <li title="Feel free to send your feedback to admin@gmail.com"><Link className="fbk" to='/feedback'>FEEDBACK</Link></li>
          </ul>
          <pre style={{ marginLeft: 100 }}>GRAMA{"\n"}{"    "}PHONE</pre>
          <pre className="b">"Where words leave off,{"\n"}{"            "}Music begins.."</pre>
          <button className="playbut"><Link className="but" to='/signup'>PLAY</Link></button>
        </div>
      );
}
 

  export default FirstPage;