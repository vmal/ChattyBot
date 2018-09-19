import React, { Component } from 'react';
import TextBox from './component/textbox';
import MessageBox from './component/messagebox';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            messageParent: ''
        }
    }

    handleData(data) {
        this.setState({
            messageParent: data
        });
    }
  render() {
        console.log(this.state.messageParent);
    return (
      <div className="App">
        <MessageBox/>
        <TextBox handlerFromParant={this.handleData}/>
      </div>
    );
  }
}

export default App;
