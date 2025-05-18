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
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const content = ['Hello1', 'helll2'];
  const pending = ['1', '2'];
  const [show, setShow] = useState(false);
  const [feedback, setFeedbackShow] = useState(false);

  let navigate = useNavigate();


  const { id } = useParams();

  const toggleFeedback = () => setFeedbackShow(prev => !prev);
  const toggleSubmitted = () => setShow(prev => !prev);

  let GiveFeedback = () => {
      navigate(`/${id}/feedback`)
  }


  return (
    <>
    <div className='relative flex items-center bg-red-400  rounded-lg'>
      <h1 className='absolute left-1/2 transform -translate-x-1/2'>Company</h1>
      <h1 className='ml-auto rounded-[100px] bg-green-600 p-2 m-1'>{id}</h1>
    </div>

    <div className="p-4 space-y-6 max-w-md mx-auto">
      
      <h1 className="text-2xl py-4 font-bold border-b border-b-1 ">Feedback Review</h1>
      <div className=''>
       <div>
          <div 
            onClick={toggleFeedback}
            className="border-b p-2"
          >
            Feedback
          </div>

          {feedback && (
            <div>
              {content.map((data, index) => (
                <div key={index} className="m-2 flex justify-between">
                  <div className='mb-4' >{data}</div>
                  <div>
                    <button 
                    onClick={()=>GiveFeedback()}
                    className="mr-2 bg-green-400 text-white px-2 py-1 rounded">Give Feedback</button>
                    <button className="bg-red-400 text-white px-3 py-1 rounded">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          )}

       

        <div 
        onClick={toggleSubmitted}
        className='border-b p-2'>
          Submitted Feedback
        </div>
        {show && (
            <div>
              {pending.map((data, index) => (
                <div key={index} className="mb-2">
                  <div key={index}>{data}</div>
                  <button className="mr-2 bg-green-500 text-white px-3 py-1 rounded">Give Feedback</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Decline</button>
                  </div>
              ))}
            </div>
          )}

         </div>
      

     {/* <div
        onClick={toggleFeedback}
        className="cursor-pointer font-medium text-blue-500"
      >
        Feedback Listed
      </div>
       {/*  
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
                className=" bg-blue-100 rounded p-4"
                layout
              >
                {data}
                <span className=' p-2 rounded-lg m-2 bg-green-600'>Give Feedback</span>
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
      </AnimatePresence> */}

      {/* <div className="space-y-2">
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
        </div>*/}
      
      </div>
      </div>
    </>
  );
};

export default Counter;
