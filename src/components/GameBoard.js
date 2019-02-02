import React, { Component } from 'react';
import Square from './Square';
import ProblemGenerator from '../classes/ProblemGenerator.js';
import ACTION_TYPES from '../classes/ActionTypes';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    let actionType = ACTION_TYPES.ADD;
    let lower = 2;
    let upper = 10;
    let generator = new ProblemGenerator(actionType, lower, upper); 
    let initData = this.initBoardData(generator);
    this.state = {
      boardData: initData[0],
      solutions: initData[1],
      actionType: actionType,
      lowerBound: lower, 
      upperBound: upper,
      generator: generator
    };

    this.props.setPrompt(initData[2]); 
  }

  initBoardData(generator) {
    let probs = [];
    let sols = [];

    let target = generator.getRandom(2*generator.lowerBound, 2*generator.upperBound)
    for (let y = 0; y < this.props.rows; y++) {
      let probRow = [];
      let solRow = [];
      for (let x = 0; x < this.props.cols; x++) {
        let problem = generator.generate(target);
        probRow.push(problem.displayString);
        solRow.push(problem.solution);
      }
      probs.push(probRow);
      sols.push(solRow);
    }
    
    let promptString = "";
    // TODO: Randomly generate prompt string types
    if (generator.actionType === ACTION_TYPES.ADD)
      promptString = `Sums to ${target}`;
    else if (generator.actionType === ACTION_TYPES.SUB)
      promptString = `A - B = ${target}`;
    else if (generator.actionType === ACTION_TYPES.MUL)
      promptString = `A x B = ${target}`;
    else if (generator.actionType === ACTION_TYPES.DIV)
      promptString = `A / B = ${target}`;
    else if (generator.actionType === ACTION_TYPES.MOD)
      promptString = `A MOD B = ${target}`;
    
    return ([probs, sols, promptString]);
  }

  updateBoardData(x, y, value) {
    const newData = [...this.state.boardData];
    newData[x][y] = value;
    this.setState({ boardData: newData });
  }

  isPlayerPosition(x, y) {
    return this.props.playerX === x && this.props.playerY === y;
  }

  buildBoard(rows, cols) {
    let result = [];
    for (let y = 0; y < rows; y++) {
      let row = [];
      for (let x = 0; x < cols; x++) {
        row.push(
          <Square
            key={`${y}-${x}`}
            row={y}
            col={x}
            value={this.state.boardData[y][x]}
            isPlayerPosition={this.isPlayerPosition(x, y)}
            showAction={this.props.showAction}
          >
          </Square>);
      }
      result.push(row);
    }
    
    return result;
  }


  render() {
    return (
      <div className="board-main">
        {this.buildBoard(this.props.rows, this.props.cols)}
      </div>
    );
  }
}

export default GameBoard;
