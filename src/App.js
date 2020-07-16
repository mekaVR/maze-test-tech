import React from "react"

import Maze from "./Maze"
import generateMaze from "./generateMaze"

import "./App.css"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 10,
      height: 10,
      players: []
    }
  }


  componentDidMount(){
    let hauteur = this.state.height
    let largeur = this.state.width
    largeur = prompt('entrez une largeur')
    hauteur = prompt('entrez une hauteur')
    this.setState({width: largeur, height: hauteur})
  }

  _defineMazeSize(width, height) {
    const maze = generateMaze({width, height})
    return maze
  }

  render(){
    const {width, height} =this.state
    return (
    <div className="App">
      <Maze maze={this._defineMazeSize(width, height)}/>
    </div>
    )
  }
}

