import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import Header from './components/Header';

class App extends Component {
  ARROWUP = 38;
  ARROWDOWN = 40;
  ARROWLEFT = 37;
  ARROWRIGHT = 39;
  SPACE = 32;
  ACTION_TYPES = ["+", "-", "/", "*", "%"];

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
      showAction: false
    };
    
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.setPrompt = this.setPrompt.bind(this);
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
    if (e.keyCode === this.ARROWUP && this.canMoveUp()) 
      py -= 1;
    else if (e.keyCode === this.ARROWDOWN && this.canMoveDown())
      py += 1;
    else if (e.keyCode === this.ARROWLEFT && this.canMoveLeft())
      px -= 1;
    else if (e.keyCode == this.ARROWRIGHT && this.canMoveRight())
      px += 1;
    else if (e.keyCode == this.SPACE) 
      this.animatePlayer();
    
    this.setState({
      playerX: px,
      playerY: py
    });
  }

  checkSolution(posValue, solution) {
 
  }

  setPrompt(newPrompt){
    this.setState({prompt: newPrompt});
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
          setPrompt={this.setPrompt}
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