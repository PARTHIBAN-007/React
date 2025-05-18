import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';


import { useNavigate } from 'react-router-dom';

const Hello = () => {

    const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/userdata')
      .then(res => setFeedback(res.data))
      .catch(err => console.error(err));
  }, []);
    let navigate = useNavigate();

  

    let handlenavigate = (person) =>{
        navigate(`/main/${person}`)
    } 

    
  return (
    <div>
      <h1>Feedback Data</h1>
      {feedback.map((item, index) => (
        <div key={index}>
          <h3 onClick={()=>{handlenavigate(item.username)}}>{item.username}</h3>
          
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Hello;