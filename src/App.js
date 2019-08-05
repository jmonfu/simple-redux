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
        <div className="header">
          <div className="age">
            Your age: <span>{this.props.age}</span>
          </div>
          <button className="ageUp" onClick={this.props.onAgeUp}>
            Age UP
          </button>
          <button className="ageDown" onClick={this.props.onAgeDown}>
            Age Down
          </button>
        </div>
        <hr />
        <div>History</div>
        <div>
          <ul>
          {
            this.props.history.map(el => (
              <li onClick={() => this.props.onDelItem(el.id)} className="historyItem" key={el.id}>
                {el.age}
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
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
    onDelItem: (id) => dispatch({
      type: 'DEL_ITEM', key: id
    })
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
