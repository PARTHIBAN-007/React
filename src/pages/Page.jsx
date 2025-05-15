import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Hello = () => {

    let [input,setInput] = useState("");


    let navigate = useNavigate();

    
    let handlechange = (e) =>{
        setInput(e.target.value)
    }

    let handlenavigate = () =>{
        navigate(`/main/${input}`)
    } 

    
  return (
    <>
        <h1>{name}</h1>
        <input placeholder='Input for Navigation' onChange={handlechange}></input>
        
        <button onClick={handlenavigate}> Navigate</button>

    </>
  )
}

export default Hello;