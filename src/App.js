import React, {Component} from 'react';
import {Input , Button, InputGroup, InputGroupAddon} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import translation from './translateAPI';
// import Translate from '@google-cloud/translate';
//import { translation } from './translateAPI'

class App extends Component {
  state = { englishInput: ''};

  updateInput = event => {
    console.log('event.target.value', event.target.value);
    this.setState({ englishInput: event.target.value})
  };

  viewState = () => {
    translation();
  }

  render() {
    return (
      <div>
      <InputGroup>
        <Input onChange={this.updateInput} />
        <InputGroupAddon addonType='append'><Button onClick={this.viewState}>Send!</Button></InputGroupAddon>
      </InputGroup>
      </div>
    );
    }
}

export default App;
