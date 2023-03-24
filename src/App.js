import { useState } from 'react';
import AllRifle from './Components/AllRifle/AllRifle';
import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease=()=>{
    setCount(count+1);
}
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllRifle countIncrease={countIncrease} ></AllRifle>
    </div>
  );
}

export default App;
