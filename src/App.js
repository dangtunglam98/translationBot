import React, {Component} from 'react';
import {Input , Button, InputGroup, InputGroupAddon, Alert} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
// import translation from './translateAPI';
// import Translate from '@google-cloud/translate';
//import { translation } from './translateAPI'

class App extends Component {
  state = { englishInput: '', trans: {} };

  updateInput = event => {
    console.log('event.target.value', event.target.value);
    this.setState({ englishInput: event.target.value})
  };

  viewState = () => {
    var joinedInput = this.state.trans({[this.state.englishInput]: 'Success'});
    this.setState({trans : joinedInput});

    // joinedOutput = this.state.viList.concat('Success');
    // this.setState({ viList: joinedOutput });var
    // this.setState({englishInput: ''});
  }

  render() {
    return (
      <div>
      <InputGroup>
        <Input onChange={this.updateInput} value={this.state.englishInput} />
        <InputGroupAddon addonType='append'><Button onClick={this.viewState}>Send!</Button></InputGroupAddon>
      </InputGroup>
      {
        this.state.trans.map((k,v) => 
        <div>
          <Alert color='primary'>User: {k}</Alert>
          <Alert color='danger'>Bot: {v}</Alert>
        </div>
        )
      }
      </div>
    );
    }
}

export default App;
