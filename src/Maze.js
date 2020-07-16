import React from "react"

import * as images from "./images"
import "./Maze.css"


class Maze extends React.Component {

   _entryAndExit(indexRow, indexCell, cell, maze){
    if(indexRow === 0){
      return <img src={indexCell === 1 ? images.stairsUp : images.wall} alt="" />
    } else if(indexRow === maze.length-1) {
      return <img src={indexCell === maze.length-2 ? images.stairsDown : images.wall} alt="" />
    } else {
      return <img src={cell.passable ? images.floor : images.wall} alt="" />
    }
  }

  render() {
    const { maze } = this.props
    return (
        <div className="Maze">
        {maze.tiles.map((row, indexRow, mazeLength) => (
          <div className="Maze-row">
            {row.map((cell, indexCell) => (
              this._entryAndExit(indexRow, indexCell, cell, mazeLength)
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Maze
