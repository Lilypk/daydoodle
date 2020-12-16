import React, { Component } from "react";
import "./User.css";
import {Link} from 'react-router-dom'
class User extends Component {
  constructor(props) {
    super();
  }

  render() {
   
    return (
      <div className="user">
        <div className='logo'>DAYDOODLE</div>
        <div className='feednewdrawing'><Link to = '/canvas'>new drawing</Link></div>
          <div className='newdrawingfeed'>
          
      <div className='feed'><Link to = '/feed'>feed</Link></div>
</div>
<div className='logout'><Link to = '/'>logout</Link></div> 
      </div>
    );
  }
}

export default User;