import React, { Component } from 'react'
import ChildTwoClass from './ChildTwoClass'

class ChildOneClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: props.counter,
      parentFlag: props.parentFlag
    }
  }
  

  render() {
    console.log(this.state);
    const { counter, parentFlag } = this.props
    
    return (
      <>
        <div className={ parentFlag? 'box active' : 'box' }>ChildOne : {counter}</div>
        <ChildTwoClass counter = {counter}  />
      </>
    )
  }
}

export default ChildOneClass