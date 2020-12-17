import React, { Component } from "react";
import "./Register.css";
//import {Link} from 'react-router-dom'
import axios from 'axios'




class Register extends Component {
  constructor(props) {
    super();
  }

handleAuthTrue = () => {

}
handleAuthFalse = () => {
   
}

handleSubmit = (e) => {
    e.preventDefault()
    console.log('user is logged in')
    console.log(e)
   console.log(e.target[0].value)

 axios.post("https://drawingapp-capstone.herokuapp.com/register", {
     method: "POST",
     credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
      {username:e.target[0].value, password:e.target[1].value})
    })

      .then((response) => response.json())
      .then((output) => this.setState({ registerJson: output }));
      
}


  render() {
    console.log(this.props.data);
    return (
      <div className="register">
<div className='registerforms'>
<form onSubmit={this.handleSubmit}>
  <label>
    create username:
    <input type="text" name="username" />
  </label>


  <label>
    create password:
    <input type="text" name="password" />
  </label>
    <button type='text'  className='submit'>submit </button>
</form>
</div>
      </div>
    );
  }
}

export default Register;
