import React, { Component } from "react";
import "./Feed.css";
import {Link} from 'react-router-dom'
//import CanvasDraw from "react-canvas-draw";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state={
      caption: ''
    }
  }

  render() {
    
    return (
      
      <div className="feedall">
        <div className='logo'>DAYDOODLE</div>
        <div className='feednewdrawing'><Link to = '/canvas'>new drawing</Link></div>
      <div className='feedprofile'><Link to = '/user'>profile</Link></div>
      <div className='finishedcanvas'>
      
          </div>
         
      <div className='logout'><Link to = '/'>logout</Link></div>
      </div>
    );
  }
}

export default Feed;
