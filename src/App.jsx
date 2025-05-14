import { useState } from 'react';
import './App.css';

function App() {

  let [count,SetCount] = useState(0);

  function increment(){
    SetCount(count+1)
  }

  function decrement(){
    SetCount(count-1)
  }
  return (
    <>
      <div className='p-4'>
        <h1 className='text-green-600 font-bold my-4'>Counter APP</h1>
        <h1 className='text-orange-500 m-4'>{count}</h1>
        <button className="bg-green-600 p-4 rounded-lg m-4" onClick={increment}>Increment</button>
        <button className="bg-red-600 p-4 rounded-lg m-4" onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
