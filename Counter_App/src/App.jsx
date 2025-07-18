import { useState } from 'react';
import './App.css';

function App(){

  const [first, setfirst] = useState(0);
  
  const incval=()=>{
    setfirst(first+1)
  }

  const decval=()=>{
    setfirst(first-1)
  }

  return(
    <div className="App">
      <h2>COUNTER</h2>
      <button onClick={incval}>+</button>
      <h2>{first}</h2>
      <button onClick={decval}>-</button>
    </div>
  );

}
export default App;