import React, { Component } from 'react';
import ChildThree from './functional/ChildThree';

class ChildTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 555 * 2,
    };
  }

  componentDidMount() {
    console.log(this.state.a, 'a');
  }

  render() {
    const { counter, handleCounter } = this.props;

    return (
      <>
        <div className='box'>ChildTwo : {counter}</div>
        <ChildThree />
      </>
    );
  }
}

export default ChildTwo;