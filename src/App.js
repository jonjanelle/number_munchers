import React, { Component } from 'react';
import './App.css';
import KeyCode from './KeyCode';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);
    //needs to be 5x5, css is fixed.
    this.state = {
      score: 0, 
      rows: 5,
      cols: 5, 
      playerX: 0, 
      playerY: 0,
      prompt: "",
      feedback: "",
      image: "./images/player.png",
      actionImage: '', 
      showAction: false,
      levelSolutions: null, 
      levelTarget: 0
    };
    
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onLevelStart = this.onLevelStart.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  canMoveUp() {
    return this.state.playerY > 0;
  }
  canMoveDown() {
    return this.state.playerY < this.state.rows-1;
  }
  canMoveLeft() {
    return this.state.playerX > 0;
  }
  canMoveRight() {
    return this.state.playerX < this.state.cols-1;
  }

  onKeyPressed(e) { 
    let px = this.state.playerX;
    let py = this.state.playerY;
    if (e.keyCode === KeyCode.ArrowUp && this.canMoveUp()) 
      py -= 1;
    else if (e.keyCode === KeyCode.ArrowDown && this.canMoveDown())
      py += 1;
    else if (e.keyCode === KeyCode.ArrowLeft && this.canMoveLeft())
      px -= 1;
    else if (e.keyCode === KeyCode.ArrowRight && this.canMoveRight())
      px += 1;
    else if (e.keyCode === KeyCode.Space)  {
      this.animatePlayer();
      this.checkSolution()
    }
    
    this.setState({
      playerX: px,
      playerY: py
    });
  }

  checkSolution(posValue, target) {
    if (posValue === target) {
      
      // remove value, add target to score
    } else {
      // value remains, subtract minimum operand from score
    }
  }

  onLevelStart(roundPrompt, solutions) {
    this.setState({prompt: roundPrompt, solutions: solutions});
  }

  animatePlayer() {
    this.setState({
      showAction: true
    });
    setTimeout(function() {
        this.setState({showAction: false});
      }.bind(this), 300);
  }

  render() {
    return (
      <div className="App">
        <Header
          prompt={this.state.prompt}
          feedback={this.state.feedback}
        >
        </Header>
        <GameBoard
          playerX={this.state.playerX}
          playerY={this.state.playerY}
          rows={this.state.rows}
          cols={this.state.cols}
          showAction={this.state.showAction}  
          onLevelStart={this.onLevelStart}
        >
        </GameBoard>
        <Footer
          score={this.state.score}
        ></Footer>
      </div>
    );
  }
}

export default App;