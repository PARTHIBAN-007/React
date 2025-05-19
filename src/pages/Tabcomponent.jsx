import React, { useState } from 'react';

const Tabcomponent = () => {
  const initialData = {
    Value1: {
      Name: 'Value1',
      Performance: '',
      Feedback: '',
    },
    Value2: {
      Name: 'Value2',
      Performance: '',
      Feedback: '',
    },
    Value3: {
      Name: 'Value3',
      Performance: '',
      Feedback: '',
    },
    Value4: {
      Name: 'Value4',
      Performance: '',
      Feedback: '',
    },
    Value5: {
      Name: 'Value5',
      Performance: '',
      Feedback: '',
    },
  };

  const [tabData, setTabData] = useState(initialData);
  const [activeTab, setActiveTab] = useState('Value1');
  const [colors,setColor] = useState([]);

  const handleChange = (field, value) => {
    setTabData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value,
      },
    }));
  };

  const colorTab = (index)=>{
    console.log(index);
    
    let newcolors = [...colors,index]
    console.log(newcolors);
    
    setColor(newcolors)
  }

  return (
    <>
    <h1>Swiggy Feedback</h1>
    <div className=" flex justify-center p-4 ">
        <div className="flex flex-col gap-2">
          {Object.keys(tabData).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-4 rounded ${
              colors.includes(key) ? 'bg-green-400' : 'bg-white-400'
            }`}

            >
              {key}
            </button>
          ))}
        </div>

      <div className="mx-6 border p-4 rounded shadow space-y-4">
        <div>
          <strong>Name:</strong> {tabData[activeTab].Name}
        </div>
        <div>
          <label className="block text-sm mb-1">Performance:</label>
          <input
            type="text"
            value={tabData[activeTab].Performance}
            onChange={e => handleChange('Performance', e.target.value)}
            className="w-full px-6 py-4 border rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm mb-1">Feedback:</label>
          <input
            type="text"
            value={tabData[activeTab].Feedback}
            onChange={e => handleChange('Feedback', e.target.value)}
            className="w-full px-6 py-4 border rounded"
          />
        </div>
        <button onClick = {()=>{colorTab(activeTab)}} className='bg-green-200 rounded-lg px-3' >Submit</button>
      </div>

      
    </div>
    <div>
    <button className="bg-green-400 p-2 rounded-lg "onClick={()=>{console.log(tabData)}}>Submit</button>
    </div>
    </>
  );
};

export default Tabcomponent;


