import React, { Component } from 'react';
import {Button, FormControl, FormGroup, Glyphicon, InputGroup} from 'react-bootstrap';

class Textbox extends Component{

    constructor(){
        super();
        this.state = {
            messages: [
                {
                    type: 0,
                    text: ""
                }
            ]
        };
    }

    handleChange(e){
        this.setState({
            messages: [
                {
                    type: 0,
                    text: e.target.value
                }
            ]})
    };

    handleClick(evt){
        evt.preventDefault();
        this.props.handlerFromParant(this.state.messages);
        this.setState({
            messages: [
                {
                    type: 0,
                    text: ""
                }
            ]
        });
    };

    keyPress(e){
        if(e.keyCode === 13){
            e.preventDefault();
            this.props.handlerFromParant(this.state.messages);
            this.setState({
                messages: [
                    {
                        type: 0,
                        text: ""
                    }
                ]
            });

        }
    }
    render(){
        return(
            <footer className="navbar-fixed-bottom">
                <div className="inputBox">
                    <FormGroup>
                        <InputGroup>
                            <FormControl value={this.state.messages[0].text} onChange={this.handleChange.bind(this)}
                                         onKeyDown={this.keyPress.bind(this)} type="text" placeholder="write something...."/>
                            <InputGroup.Button>
                                <Button onClick={this.handleClick.bind(this)} bsStyle="primary"><Glyphicon glyph="glyphicon glyphicon-send"> Send</Glyphicon></Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </div>
            </footer>
        )

    }
}

export default Textbox;
