import React, { createContext } from 'react'
import { useState } from 'react'
import Reset from './Reset'
const Counter = () => {

    let [count,setCount] = useState(0);
      
    
    console.log(count)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
   return (
    <>
        
        <countcontext.Provider value={{count,setCount}}>
        <div>{count}</div>
        
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        <Reset />
       </countcontext.Provider >
        
    </>
  )
}

export default Counter

