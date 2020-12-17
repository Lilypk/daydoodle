import React, { Component } from "react";
import "./Canvas.css";
//import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import {Link} from 'react-router-dom'

// canvasdraw default props 
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffc600",
      width: 600,
      height: 600,
      brushRadius: 4,
      lazyRadius: 8,
      caption: "",
      drawings: [],
    };
  }
  componentDidMount() {
    // change the color randomly every 2 seconds
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 2000);
    // fetch from /canvas 
    fetch("https://drawingapp-capstone.herokuapp.com/canvas")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
    // a loop to go through the returned string, using JSON.parse 
    // to turn the string into an object 
        for (let i=0; i < data.length; i++) {
          console.log(data[i])
            data[i]=JSON.parse(JSON.stringify(data[i]))
        }
        this.setState({ drawings: data })
      })
      
      
  }
    // getSaveData returns the drawing's save-data as a stringified object
    
  canvasString = (e) => {
    e.preventDefault();
    console.log(this.state.caption);
    console.log(localStorage.getItem("savedDrawing"))
    let canvasDrawing = {
      caption: this.state.caption,
      drawing: this.saveableCanvas.getSaveData(),
    };
    fetch("https://drawingapp-capstone.herokuapp.com/canvas", {
      method: "POST",
      body: JSON.stringify(canvasDrawing),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
    
    // under construction 
  handleDelete = (_id, e) => {
    console.log(_id);
    fetch("https://drawingapp-capstone.herokuapp.com/canvas" + _id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        <div className="logo"><Link to = '/'>DAYDOODLE</Link></div>

        <div className="canvas">
        {/* changable brush radius */}
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={(e) =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          {/* changable lazy radius */}
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={(e) =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          {/* clear drawing */}
          <button
            className="clear"
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          {/* drawing canvas component */}
          <CanvasDraw
            ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
          />
          {/* setItem sets the value of the specified local storage item
          save drawing using getSaveData */}
       <button
       className='save'
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          {/* in the form- caption, post button 
          which onClick takes my canvasString method  */}
          <form>
            <label>
              caption:
              <input
                onChange={(e) => this.setState({ caption: e.target.value })}
                type="text"
                name="caption"
                value={this.state.caption}
              />
            </label>
            
            <button
              onClick={(e) => this.canvasString(e)}
              type="submit"
              className="post"
            >
              post
            </button>
          </form>
         {/* map through captions
         second canvasDraw component- loads saved drawing */}
          <div>
            {this.state.drawings.map((drawing, i) => (
              <div key={i}>
                <h1>caption: </h1> {drawing.caption}
                <div>
                  <CanvasDraw
                    disabled
                    hideGrid
                    ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                    saveData={drawing.drawing}
                  />
                </div>
              </div>
            ))}
            {/* <button
              className="delete"
              label="Delete"
              onClick={(e) => this.handleDelete(canvasDraw._id, e)}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;
