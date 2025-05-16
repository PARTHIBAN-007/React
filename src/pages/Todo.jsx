


import React, { useState } from 'react'

export const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const addTodo = () => {
        if (inputData.trim()) {
            if (isEditing) {
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = inputData;
                setTodos(updatedTodos);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setTodos([...todos, inputData]);
            }
            setInputData('');
    }
    } 

    const startEdit = (index) => {
        setInputData(todos[index]);
        setEditIndex(index);
        setIsEditing(true);
    };
    
    const deleteTodo = (index) =>{
        const NewTodos = todos.filter((_,i)=> i!=index);
        setTodos(NewTodos)
        if (isEditing&&index===editIndex){
            setIsEditing(false);
            setInputData("")
        }
    }

 

  return (
    <>
        <h1 className='m-4'>Counter App</h1>
        <div className='display-flex justify-items-center my-6 '>
            <div className=''>
                <input value={inputData}
                onChange={(e)=>setInputData(e.target.value)}
                placeholder='Input Value' className='rounded-lg border-2 border-indigo-600'></input>
                <button  onClick = {addTodo} className='mx-4 bg-green-400 rounded-lg px-4 py-2'>{isEditing? "Save" : "Add"}</button>
            </div>
            <ul className='m-6'>
                {todos.map((dataitem,index)=>(
                    <li key ={index} className='p-2'>
                        <div className='flex items-center gap-4'>
                            
                            <span>{dataitem}</span>
                            <button onClick = {()=>startEdit(index)} className='bg-green-600 px-2 rounded-lg'>Edit</button>
                            <button  onClick={()=>deleteTodo(index)}className='bg-red-600 px-2 rounded-lg'>Delete</button>
                        </div>
                    </li>
                ))}
                
            </ul>
        </div>
    </>
  )
}





// import React, { useState } from 'react';

// export const Todo = () => {
//   const [inputData, setInputData] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     if (inputData.trim()) {
//       setTodos([...todos, inputData]);
//       setInputData('');
//     }
//   };

//   return (
//     <>
//       <h1 className='m-4 text-xl font-bold'>Todo App</h1>
//       <div className='flex flex-col items-center my-6'>
//         <div className='flex gap-2'>
//           <input
//             value={inputData}
//             onChange={(e) => setInputData(e.target.value)}
//             placeholder='Input Value'
//             className='rounded-lg border-2 border-indigo-600 px-2 py-1'
//           />
//           <button
//             onClick={addTodo}
//             className='bg-green-500 text-white rounded-lg px-4 py-1'
//           >
//             Add
//           </button>
//         </div>

//         <ul className='m-6 w-full max-w-md'>
//           {todos.map((dataitem, index) => (
//             <li
//               key={index}
//               className='p-2 border-b flex items-center justify-between'
//             >
//               <span>{dataitem}</span>
//               <div className='flex gap-2'>
//                 <button className='bg-yellow-500 text-white px-2 py-1 rounded'>
//                   Edit
//                 </button>
//                 <button className='bg-red-500 text-white px-2 py-1 rounded'>
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };