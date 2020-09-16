import React, { Component } from 'react';
import './App.scss';
import Input from'./Components/Input';
import Validation from './Components/ValidationComponent';
import Char from './Components/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHangler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  splitCharactersHandler = (index) => {

    const splitText = this.state.userInput.split('');
    splitText.splice(index, 1);
    const updatedText = splitText.join('');
    this.setState({
      userInput: updatedText
    })
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.splitCharactersHandler(index)}/>
    })

    return (
      <div className="App">
        <Input change={this.inputChangedHangler} input={this.state.userInput}/>
        <Validation userInput={this.state.userInput.length} />  
        {charList}
      </div>
    );
  }
}

export default App;
