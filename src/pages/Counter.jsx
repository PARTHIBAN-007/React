// import React from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom';
// const Counter = () => {

//     let [count,setCount] = useState(0);
//     let content = ["Hello1","helll2"]
//     let pending = ["1","2"]
//     let [show,setShow] = useState(false);
//     let [feedback,setfeedbackShow] = useState(false);

//     let value = useParams()
    
//     function increment(){
//         setCount(count+1)
//     }
//     function decrement(){
//         setCount(count-1)
//     }
//    return (
//     <>
//         <h1>Feedback Review</h1>
//         <ul>
//             <div onClick={()=>{setfeedbackShow(!feedback)}}>Feedback Listed</div>
//             { feedback && content.map((data,index)=>(
//                 <li>{data}</li>
//             ))}

//             <div onClick={()=>{setShow(!show)}}>Feedback submitted</div>

//              { show && pending.map((dta,index)=>(
//                 <li>{dta}</li>
//             ))}

            
            


//         </ul>

//         <h1>{value.id}</h1>
//         <div>{count}</div>

//         <button onClick={increment}> Increment</button>
//         <button onClick={decrement}> Decrement</button>
        
//     </>
//   )
// }

// export default Counter

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Counter = () => {
  const [count, setCount] = useState(0);
  const content = ['Hello1', 'helll2'];
  const pending = ['1', '2'];
  const [show, setShow] = useState(false);
  const [feedback, setFeedbackShow] = useState(false);

  const { id } = useParams();

  const toggleFeedback = () => setFeedbackShow(prev => !prev);
  const toggleSubmitted = () => setShow(prev => !prev);

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Feedback Review</h1>

      <div
        onClick={toggleFeedback}
        className="cursor-pointer font-medium text-blue-500"
      >
        Feedback Listed
      </div>
      <AnimatePresence>
        {feedback && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pl-4 space-y-1"
          >
            {content.map((data, index) => (
              <motion.li
                key={index}
                className="bg-blue-100 rounded p-4"
                layout
              >
                {data}
                <span className='p-2 rounded-lg m-2  bg-green-600'>Give Feedback</span>
              <span className='p-2 rounded-lg m-2  bg-red-600'>Negelect Feedback</span>
              </motion.li>
              
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div
        onClick={toggleSubmitted}
        className="cursor-pointer font-medium text-green-500"
      >
        Feedback Submitted
      </div>
      <AnimatePresence>
        {show && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pl-4 space-y-1"
          >
            {pending.map((dta, index) => (
              <motion.li
                key={index}
                className="bg-green-100 rounded p-2"
                layout
              >
                {dta}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Route ID: {id}</h2>
        <div className="text-xl">Counter: {count}</div>
        <div className="space-x-2">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
