import React, { Component } from "react";
import "./Homepage.css";
import {Link} from 'react-router-dom'
class Homepage extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="login">
          <div className='homepageall'>
        <div className='daydoodle'>DAYDOODLE</div>
        <div>"THE NO JUDGEMENT SITE FOR DOODLES"</div>
        <div className='homepageloginsignup'>
        <div className='login'><Link to = '/canvas'>let's draw</Link></div>
        {/* <div className='signup'><Link to ='/register'>signup</Link></div> */}
        </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
