import React, { Component } from 'react';
import '../style/main.css'
import '../js/counter'
class Counter extends Component {
  state = {}
  render() { 
    return (
    <>
      <body className="btn-holder">
        <h1 id="counter" className="counter">0</h1>
        <span>  
          <button style={{fontSize:"42px"}} className="btn reset">reset</button>
          <button style={{fontSize:"42px"}} className="btn increase">+</button>
          <button style={{fontSize:"42px"}} className="btn decrease">-</button>
        </span>
      </body> 
    </>
    ) ;
  }
}
 
export default Counter;