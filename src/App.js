import './App.css';
import { useState } from 'react';

function App() {
  const[counter,setCounter]= useState(0);
  function incrementCounter(){
    setCounter(counter+1)
  }
  function decrementCounter(){
    setCounter(counter-1)
  }
  function resetCounter(){
    setCounter(0)
  }
  return (
    <div style={{
      width: '500px',
      background: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      padding: '50px',
      marginTop: '100px',
      marginLeft:'500px'
    }} 
    className="App">
      <header className="App-header">
        <h4>Counter Application</h4>
        <h1>{counter}</h1>
        <button 
        style={{
          background: 'green',
          color: 'white',
          border: '1px solid green',
          padding: '10px',
          margin: '10px'
        }}
        onClick={incrementCounter}>Increment</button>
        <button
        style={{
          background: 'red',
          color: 'white',
          border: '1px solid red',
          padding: '10px',
          margin: '10px'
        }}
        onClick={decrementCounter}>Decrement</button>
        <button
        style={{
          background: 'blue',
          color: 'white',
          border: '1px solid blue',
          padding: '10px',
          margin: '10px'
        }}
        onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
