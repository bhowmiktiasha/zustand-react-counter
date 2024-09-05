import './App.css';
import React from 'react';
import useStore from './store';

function App() {
  const { count, increase, decrease, reset } = useStore();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Zustand Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increase} style={{ margin: '5px' }}>
          Increase
        </button>
        <button onClick={decrease} style={{ margin: '5px' }}>
          Decrease
        </button>
        <button onClick={reset} style={{ margin: '5px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
