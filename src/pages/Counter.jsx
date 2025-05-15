import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
const Counter = () => {

    let [count,setCount] = useState(0);

    let value = useParams()
    
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
   return (
    <>
        <h1>{value.id}</h1>
        <div>{count}</div>

        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        
    </>
  )
}

export default Counter