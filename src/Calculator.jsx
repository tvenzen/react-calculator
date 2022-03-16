import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'

/*
function Calculator(){
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [operationValue, setOperationValue] = useState("+")
  
  function handleSumbit(){
    let newTotal = 0
    if (operationValue == '+'){
      newTotal = Number(firstValue) + Number(secondValue)
      setTotalValue(newTotal)
    }
    else if(operationValue == '-'){
      newTotal = Number(firstValue) - Number(secondValue)
      setTotalValue(newTotal)
    }
    else if (operationValue == 'x'){
      newTotal = Number(firstValue) * Number(secondValue)
      setTotalValue(newTotal)
    }
    else if(operationValue == '/'){
      newTotal = Number(firstValue) / Number(secondValue)
      setTotalValue(newTotal)
    }
  }

  function handleClear(){
    setFirstValue(0)
    setSecondValue(0)
    setTotalValue(0)
  }

  return (
    <>
      
        <input type="number" name="firstInput" value={firstValue} onChange = {(event) => setFirstValue(event.target.value)} />
        <p>{operationValue}</p>
        <input type="number" name="secondInput" value={secondValue} onChange = {(event) => setSecondValue(event.target.value)} />
        <input name="total" value={totalValue} readOnly></input>

        <button onClick={(event) => setOperationValue('+')}> + </button>
        <button onClick={(event) => setOperationValue('-')}> - </button>
        <button onClick={(event) => setOperationValue('x')}> x </button>
        <button onClick={(event) => setOperationValue('/')}> / </button>
        <button onClick={handleClear}> Clear </button>
        <button onClick={handleSumbit}> Calculate </button>
        
    </>
  
  )
}
*/

function Calculator(props){
    const [total, setTotal] = useState(0);
    const [firstInput, setFirstInput] = useState();
    const [secondInput, setSecondInput] = useState();
    const [operation, setOperation] = useState("+");
    const [firstSelected, setFirstSelected] = useState(false)
    const [secondSelected, setSecondSelected] = useState(false)

    function handleFocus(event, inputSelected){
      if (inputSelected == 'first'){
        setFirstSelected(true)
        setSecondSelected(false)
        setFirstInput(event.target.value)
      }
      else if(inputSelected == 'second'){
        setSecondSelected(true)
        setFirstSelected(false)
        setSecondInput(event.target.value)
      }

    }
  
    function handleButtonInput(buttonValue){
      let newInput = ""

      if (firstSelected == true){
        newInput = firstInput + buttonValue
        setFirstInput(newInput)
      }
      else if(secondSelected == true){
        newInput = secondInput + buttonValue
        setSecondInput(newInput)
      }
    }

    function handleClear(){
      setFirstInput("")
      setSecondInput("")
      setTotal("")
    }
  
    function handleCalculate(){
      let newTotal = 0;
      if (operation == '+'){
        newTotal = Number(firstInput) + Number(secondInput)
        setTotal(newTotal)
      }
      else if (operation == '-'){
        newTotal = Number(firstInput) - Number(secondInput)
        setTotal(newTotal)
      }
      else if (operation == '*'){
        newTotal = Number(firstInput) * Number(secondInput)
        setTotal(newTotal)
      }
      else if (operation == '/'){
        newTotal = Number(firstInput) / Number(secondInput)
        setTotal(newTotal)
      }
      else{
        alert("Error: Please choose a valid operation. Ex('+', '-')")
      }
  
    }

    
    return ( 
      <>
        <div class="calculatorHolder">

          <div class="display">

            <input type="number" class="displayInput" onClick={(event) => handleFocus(event, "first")} value={firstInput} id="firstInput"/> 
            <br />
            <p> {operation} </p>
            <br />
            <input type="number" class="displayInput"onClick={(event) => handleFocus(event,'second')} value={secondInput} id="secondInput"/>
            <br />
            <p> = </p>
            <br />
            <input type="number" class="displayInput" value={total} id="calcInput" readOnly/>

          </div>

          <div class="buttonHolder">
            <div class="setOfNumericalButtons">
              <div class="numericalButtonHolder">
  
                <button type="button" onClick={() => handleButtonInput("1")} > 1 </button>
                <button type="button" onClick={() => handleButtonInput("2")} > 2 </button>
                <button type="button" onClick={() => handleButtonInput("3")}> 3 </button>
  
              </div>
  
              <div class="numericalButtonHolder">
  
                <button type="button" onClick={() => handleButtonInput("4")}> 4 </button>
                <button type="button" onClick={() => handleButtonInput("5")}> 5 </button>
                <button type="button" onClick={() => handleButtonInput("6")}> 6 </button>
  
              </div>
  
              <div class="numericalButtonHolder">
  
                <button type="button" onClick={() => handleButtonInput("7")}> 7 </button>
                <button type="button" onClick={() => handleButtonInput("8")}> 8 </button>
                <button type="button" onClick={() => handleButtonInput("9")}> 9 </button>
  
              </div>

              <div class="numericalButtonHolder">
  
                <button type="button" onClick={handleClear}> Clear </button>
                <button type="button"onClick={() => handleButtonInput("0")} > 0 </button>
                <button type="button" onClick={handleCalculate}> Enter </button>
  
              </div>

            </div>
  
            <div class="operationalButtonHolder">
  
              <button type="button" onClick={(event) => setOperation('+')}> + </button>
              <button type="button" onClick={(event) => setOperation('-')}> - </button>
              <button type="button" onClick={(event) => setOperation('*')}> x </button>
              <button type="button" onClick={(event) => setOperation('/')}> / </button>
  
            </div>

          </div>
        </div>
      </>
      ) 
  } 

  export default Calculator;