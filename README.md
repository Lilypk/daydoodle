#DAYDOODLE 

## Description 

This is a project where I built a full stack application using Express on the back end and React on the front end. The purpose of this application is to have fun drawing pictures and see what others drew.

## Example

The example below is from Src/Canvas.js and shows my Canvas component. 

        <CanvasDraw
            ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
        />

## Features

I first did a fetch call on my data so I could populate our page with information. I then set up my components and used the routes for each component so they would all have a landing page. 

## Technologies

For this project, I used Express and React. 

### Installing 

To set up this project you will first need to fork my repo by clicking on Fork in the top right corner and choosing where to fork to. Then you will click Clone or Download and copy the url. Next open your terminal and change to the directory you wish to work on the project. Here you will run the command 'git clone' followed by pasting the url you just copied. Hit enter. You can now change to the project directory. Run the command npm start and this will bring you to the project in your chrome. 

## Authors

https://github.com/Lilypk/drawingappreact

Lily Klopcic: Lilypk


