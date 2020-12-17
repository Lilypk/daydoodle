import React, { Component } from "react";
import "./Login.css";
//import {Link} from 'react-router-dom'
import axios from 'axios'




axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super();
  }
 
    
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('user is logged in')
        console.log(e)
       console.log(e.target[0].value)
    
     axios.post("https://drawingapp-capstone.herokuapp.com/login", {
        //  method: "POST",
         credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
          {username:e.target[0].value, password:e.target[1].value})
        })
    
          .then((response) => response.json())
          .then((output) => this.setState({ loginJson: output }));
        
    }
    
    

  render() {
    console.log(this.props.data);
    return (
      <div className="login">
          <div className='loginforms'>
          <form onSubmit={this.handleSubmit}>
  <label>
    username:
    <input type="text" name="username" />
  </label>


  <label>
    password:
    <input type="text" name="password" />
  </label>
    <button type='text'  className='submit'>submit </button>
</form>
</div>
      </div>
    );
  }
}

export default Login;
