import React, { Component } from 'react';
import TextBox from './component/textbox';
import axios from 'axios';
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
        let temp = {
            msg: text[0].text
        };
        console.log('temp: ',temp);
        axios.post('http://localhost:5000/getReply',{temp})
            .then(res =>{
                console.log('res.data: ',res.data);
                this.setState({
                    messages: this.state.messages.concat([{
                        text: res.data,
                        type: 1,
                    }])
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleNewBotMessage(text){

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
