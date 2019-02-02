import React, { Component } from 'react';
import Square from './Square';
import ProblemGenerator from '../classes/ProblemGenerator.js';
import ACTION_TYPES from '../classes/ActionTypes';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    let actionType = ACTION_TYPES.MUL;
    let initData = this.initBoardData(actionType);
    this.state = {
      boardData: initData[0],
      solutions: initData[1],
      actionType: actionType
    };

    console.log("prompt" , initData[2]);
    this.props.setPrompt(initData[2]);
    
  }

  initBoardData(action) {
    let g = new ProblemGenerator(action, 2, 10);
    let probs = [];
    let sols = [];
    let solCounts = {};
    let maxCount = 0;
    let target = 0;
    for (let y = 0; y < this.props.rows; y++) {
      let probRow = [];
      let solRow = [];
      for (let x = 0; x < this.props.cols; x++) {
        let problem = g.generate();
        probRow.push(problem.displayString);
        solRow.push(problem.solution);
        solCounts[problem.solution] = solCounts[problem.solution] === undefined ? 1 : solCounts[problem.solution] + 1;
        if (solCounts[problem.solution] > maxCount) {
          maxCount = solCounts[problem.solution];
          target = problem.solution;
        }
      }
      probs.push(probRow);
      sols.push(solRow);
    }
    
    let promptString = "";
    // TODO: Randomly generate prompt string types
    //       Mixed action types individual problems
    if (action === ACTION_TYPES.ADD)
      promptString = `Sums to ${target}`;
    else if (action === ACTION_TYPES.SUB)
      promptString = `A - B = ${target}`;
    else if (action === ACTION_TYPES.MUL)
      promptString = `A x B = ${target}`;
    else if (action === ACTION_TYPES.DIV)
      promptString = `A / B = ${target}`;
    else if (action === ACTION_TYPES.MOD)
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
