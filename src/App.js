import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     age: 21
  //   }
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }

  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button  onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    age: state.age
  }
};

const MapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({
      type: 'AGE_UP', value: 1
    }),
    onAgeDown: () => dispatch({
      type: 'AGE_DOWN', value: 1
    }),

  }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
