import React, { Component } from 'react';
import TextBox from './component/textbox';
import MessageBox from './component/messagebox';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
        this.state = {
            messages: [
                {
                    type: 1,
                    text: "Hello! How are you doing today?"
                }
            ]
        }
    }

    handleNewUserMessage(text){
        this.setState({
            messages: this.state.messages.concat([{
                text: text[0].text,
                type: 0,
            }])
        });
    }


    handleNewBotMessage(text){
        this.setState({
            messages: this.state.messages.concat([{
                text: text,
                type: 1,
            }])
        });
    }

    render() {
    return (
      <div className="App">
          <div className="messageBox">
            <MessageBox messageContent={this.state.messages}/>
          </div>
          <TextBox handlerFromParant={this.handleNewUserMessage}/>
      </div>
    );
  }
}

export default App;
