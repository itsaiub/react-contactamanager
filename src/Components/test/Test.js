import React, { Component } from 'react'

class Test extends Component {

  componentDidMount() {
    console.log('ComponentDidMount');
  }

  componentWillMount() {
    console.log('ComponentWillMount');
    
  }

  render() {
    console.log('render');
    
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}
export default Test;
