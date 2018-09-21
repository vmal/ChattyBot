import React, { Component } from 'react';
import './messagebox.css';
class MessageBox extends Component{
    getConversations(messages){
        if(messages === undefined){
            return;
        }

        const listItems = messages.map((message, index) => {

            let bubbleDirection = '';
            if(message.type === 0){
                bubbleDirection = 'me';
            }
            else
                bubbleDirection = 'him';
            return (
                <div key={index}>
                        <li className={bubbleDirection}>
                            {message.text}
                        </li>
                </div>

            );
        });
        return listItems;
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render(){
        const chatList = this.getConversations(this.props.messageContent);
        return(
            <div>
                <ul>
                    {chatList}
                </ul>
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

export default MessageBox;

