import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Homepage from './Homepage';
import Feed from './Feed';
import Canvas from './Canvas';
import User from './User'
import Register from './Register'
import Login from './Login'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeJson: null,
      registerJson: null,
      loginJson: null,
      feedJson: null,
      userJson: null,
      canvasJson: null
    };
  }
  componentDidMount() {
   

    // fetch("https://drawingapp-capstone.herokuapp.com/register", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => this.setState({ registerJson: output }));

    // fetch("https://drawingapp-capstone.herokuapp.com/login", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => this.setState({ loginJson: output }));
      
    // fetch("https://drawingapp-capstone.herokuapp.com/feed", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => this.setState({ feedJson: output }));
    // fetch("https://drawingapp-capstone.herokuapp.com/user", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => this.setState({ userJson: output }));
    // fetch("https://drawingapp-capstone.herokuapp.com/canvas", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => this.setState({ canvasJson: output }));
  }
  
  
  render () {
    return (
    <div className="App">
      <div>
     <BrowserRouter>
     <Switch>
       
      
      <Route path='/register'>
      <Register data={this.state.registerJson} />
      </Route>
      <Route path='/login'>
      <Login data={this.state.loginJson}/>
      </Route>
      <Route path='/feed'>
      <Feed data={this.state.feedJson}/>
      </Route>
      <Route path='/user'>
      <User data={this.state.userJson}/>
      </Route>
      <Route path='/canvas'>
      <Canvas data={this.state.canvasJson}/>
      </Route>
      <Route path='/'>
      <Homepage />
      </Route>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
    
  );
}
}

export default App;

