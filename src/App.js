import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { projectValue: 0 }
  // }

  state = { projectValue: "This is my porfolio, please enjoy my projects. :)"}
  // inc () {
  //   this.state.projectValue
  // }

  inc = () => {

  }

  render() {
    return (
      <div>
      <h1> Parker Jones Portfolio </h1>
      <p>
        {this.state.projectValue}
      </p>
      <button onClick={this.inc}> Casino Jones </button>
      <button onClick={this.inc}> About Me </button>
      </div>
    )
  }
}

export default App;


// logical component starts with class 
// render function makes display writing JSX
// state storage can store values
// 