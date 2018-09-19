import React, { Component } from 'react';
import {Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';

class Textbox extends Component{

    constructor(){
        super();
        this.state = {
            message: ''
        };
    }

    handleChange(e){
        this.setState({message: e.target.value})
    };

    handleClick(evt){
        evt.preventDefault();
        console.log('handleClick: ',this.state.message);
        this.props.handlerFromParant(this.state.message);
        this.setState({
            message: ''
        });
    };

    keyPress(e){
        if(e.keyCode === 13){
            e.preventDefault();
            console.log('handleClick: ',this.state.message);
            this.props.handlerFromParant(this.state.message);
            this.setState({
                message: ''
            });
        }
    }
    render(){
        return(
            <footer className="navbar-fixed-bottom">
                <div className="inputBox">
                    <FormGroup>
                        <InputGroup>
                            <FormControl value={this.state.message} onChange={this.handleChange.bind(this)}
                                         onKeyDown={this.keyPress.bind(this)} type="text" placeholder="write something...."/>
                            <InputGroup.Button>
                                <Button onClick={this.handleClick.bind(this)} bsStyle="primary">Send Message</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </div>
            </footer>
        )

    }
}

export default Textbox;
