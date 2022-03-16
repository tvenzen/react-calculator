import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import Calculator from './Calculator'





class OperationButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonValue: props.buttonValue
    }
  }

  render(){
    return <button> { this.props.buttonValue } </button>
  }
}



function App() {
  return (
    <div className="App">
       
    <Calculator />
      
    </div>
  );
}



export default App;
