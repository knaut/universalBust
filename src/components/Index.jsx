// React components
import React from 'react';
import * as actions from '../Actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Store from '../Store.js';

const store = Store.store;

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators( actions, dispatch) }
}

class Counter extends React.Component {
  
  
  render() {
    return(
      <div>
        <div id='counter'>{this.props.counter}</div>
      </div>
    )
  }
}

var ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class Increment extends React.Component {
  handleIncrement() {
    store.dispatch( actions.increment() );
  }

  render() {
    return (
      <button onClick={this.handleIncrement.bind(this)} className='increment'>
        <span>Increment</span>
      </button>
    )
  }
}

class Decrement extends React.Component {
  handleDecrement() {
    store.dispatch( actions.decrement() );
  }
  render() {
    return (
      <button onClick={this.handleDecrement} className='decrement'>
        <span>Decrement</span>
      </button>
    )
  }
}

class Index extends React.Component {
  render() {
    return(
      <div>
        <span className='red'>This is a good test</span>
        <ConnectedCounter/>
        <Increment/>
        <Decrement/>
      </div>
    )
  }
}

export default Index;