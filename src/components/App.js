import React, { Component } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import ButtonsController from './ButtonsController';
import DisplayBoard from './DisplayBoard';

let externalData = []

setInterval(() => {
  const index = externalData.length;
  const newObj = { id: index, title: `message nr ${index}`, body: `this is message number ${index}` };
  externalData.push(newObj);
}, 3000);

class App extends Component {
  intervalIndex = null;
  state = {
    messages: [...externalData]
  }

  componentDidMount() {
    this.intervalIndex = setInterval(this.checkExternalSource, 2000);
  }

  checkExternalSource = () => {
    if (this.state.messages.length !== externalData.length) {
      this.setState({
        messages: [...externalData]
      })
    }
  }

  handleReset = () => {
    externalData = [];
    this.setState({
      messages: [],
    })
  }

  render() {
    return (
      <div className="App">
        <DisplayData
          numberOfElements={this.state.messages.length}
        />
        <ButtonsController
          clickReset={this.handleReset}
        />
        <DisplayBoard
          messages={this.state.messages}
        />

      </div>
    );
  }
}

export default App;