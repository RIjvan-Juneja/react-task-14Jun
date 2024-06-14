import React, { Component } from 'react'
import ChildOneClass from './ChildOneClass'

class ParentClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentFlag: false,
      counter: 0,
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({ parentFlag: true, counter: prevState.counter + 1 }))
    // console.log(this.state.counter);
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ parentFlag: false }), 300)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter === 0) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { parentFlag, counter } = this.state
    return (
      <>
        <div className={parentFlag ? 'box active' : 'box'} onClick={this.handleClick}>
          <h2>Parent : {this.state.counter}</h2>
        </div>
        <ChildOneClass counter={counter} parentFlag={parentFlag} />
      </>
    )
  }
}

export default ParentClass