import React from 'react'
import { useContext } from 'react';
import { countcontext } from './Counter' 
const Reset = () => {

    let {count,setCount} = useContext(countcontext);
    console.log(count)

    function resetcount(){
        setCount(0)
    }



  return (
    <div>
    <button  onClick = {resetcount} className='bg-red-600 px-2 rounded-lg'>Reset {count}</button>
    </div>
  )
}

export default Reset


