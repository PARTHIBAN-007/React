import { useState } from 'react';
import './App.css';

function App() {
  let [listdata, setlistdata] = useState(["Data1", "world", "Data3"]);

  return (
    <>
      <h1>Hello World</h1>
      <div className='p-4'>
        <input placeholder='Input some Value' className='rounded-lg border-2' />
        <button className='m-2'>Add</button>

        <ol>
          {listdata.map((data, index) => (
            <li key={index} className='my-2'>
              <div className='flex items-center gap-4'>
                <span>{data}</span>
                <button className='bg-blue-500 text-white px-2 rounded'>Edit</button>
                <button className='bg-red-500 text-white px-2 rounded'>Delete</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
