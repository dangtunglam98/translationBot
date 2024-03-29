import React, {Component} from 'react';
import {Input , Button, InputGroup, InputGroupAddon, Alert} from 'reactstrap';
import './App.css';

class App extends Component {
  state = { englishInput: '', engList : [], viList: []};
  constructor(props){
    super(props);
    this.translateText = this.translateText.bind(this);
  }

  updateInput = event => {
    console.log('event.target.value', event.target.value);
    this.setState({ englishInput: event.target.value})
  };

  viewState = () => {
    var joinedInput = this.state.engList.concat(this.state.englishInput);
    this.setState({engList : joinedInput});
    this.translateText(this.state.englishInput);
    this.setState({englishInput: ''});
  }

  translateText = (text) => {
    var googleTranslate = require('google-translate')('AIzaSyACh23Bh3U3vL-Zb7MXqpvf-HhDdian-6E');
    if(text === ""){
      var joinedOutput = this.state.viList.concat('Please enter some text (Bạn hãy nhập gì đó đi)');
      this.setState({viList : joinedOutput});
    } else {
    googleTranslate.translate(text, 'en', 'vi', (err, translation) => {
      var joinedOutput = this.state.viList.concat(translation.translatedText);
      this.setState({viList : joinedOutput});
    });
  }

}

  render() {
    return (
      <div>
      <InputGroup>
        <Input onChange={this.updateInput} value={this.state.englishInput} />
        <InputGroupAddon addonType='append'><Button onClick={this.viewState}>Send!</Button></InputGroupAddon>
      </InputGroup>
      {
        this.state.engList.map((engInput, viOutput) => 
          <div>
            <div className='user'>
              <Alert color='primary'>
                User: {engInput}
              </Alert>
            </div>
            <div className='bot'>
              <Alert color='success'>
                Bot: {this.state.viList[viOutput]};
              </Alert>
            </div>
          </div>
          )
      }

       
      </div>
    );
    }
}

export default App;
