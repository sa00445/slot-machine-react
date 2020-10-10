import React from 'react';
import Slot from './Slot.Component';

function App() {
  return (
    <div className="App">
      <Slot one={(Math.floor(Math.random()*3) + 1)} two={(Math.floor(Math.random()*3) + 1)} three={(Math.floor(Math.random()*3) + 1)}/>
      <Slot one={(Math.floor(Math.random()*3) + 1)} two={(Math.floor(Math.random()*3) + 1)} three={(Math.floor(Math.random()*3) + 1)}/>
      <Slot one={(Math.floor(Math.random()*3) + 1)} two={(Math.floor(Math.random()*3) + 1)} three={(Math.floor(Math.random()*3) + 1)}/>
    </div>
  );
}

export default App;
