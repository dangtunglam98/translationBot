import React, {Component} from 'react';
import {Input , Button, InputGroup, InputGroupAddon, Alert} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
// import translation from './translateAPI';
// import Translate from '@google-cloud/translate';
//import { translation } from './translateAPI'

class App extends Component {
  state = { englishInput: '', engList : [], viList: []};

  updateInput = event => {
    console.log('event.target.value', event.target.value);
    this.setState({ englishInput: event.target.value})
  };

  viewState = () => {
    var joined = this.state.engList.concat(this.state.englishInput);
    this.setState({engList : joined});
  }

  render() {
    return (
      <div>
      <InputGroup>
        <Input onChange={this.updateInput} />
        <InputGroupAddon addonType='append'><Button onClick={this.viewState}>Send!</Button></InputGroupAddon>
      </InputGroup>
      {
        this.state.engList.map((engInput) => 
          <Alert color='primary'>
            User: {engInput}
          </Alert>
        )
      }
      </div>
    );
    }
}

export default App;
