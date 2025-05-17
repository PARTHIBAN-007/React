import React, { useState, useEffect } from 'react';

const DynamicTabs = () => {
  const tabsCount = 6; // Change this number to increase/decrease tabs

  // Initialize tab inputs state based on tabsCount
  const [tabInputs, setTabInputs] = useState(
    Array(tabsCount).fill(null).map(() => ({ input1: '', input2: '' }))
  );
  const [activeTab, setActiveTab] = useState(0);

  // If tabsCount changes dynamically later, sync state (optional)
  useEffect(() => {
    setTabInputs(prev => {
      if (prev.length === tabsCount) return prev;
      if (prev.length < tabsCount) {
        // Add new empty tabs if increasing
        return [...prev, ...Array(tabsCount - prev.length).fill(null).map(() => ({ input1: '', input2: '' }))];
      }
      // If decreasing tabsCount, slice the array
      return prev.slice(0, tabsCount);
    });
    if (activeTab >= tabsCount) setActiveTab(0);
  }, [tabsCount]);

  const handleInputChange = (field, value) => {
    const updatedTabs = [...tabInputs];
    updatedTabs[activeTab] = {
      ...updatedTabs[activeTab],
      [field]: value,
    };
    setTabInputs(updatedTabs);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex space-x-2 mb-4">
        {Array.from({ length: tabsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-3 py-1 rounded ${
              activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="border p-4 rounded space-y-4 shadow">
        <input
          type="text"
          placeholder={`Tab ${activeTab + 1} - Input 1`}
          value={tabInputs[activeTab].input1}
          onChange={(e) => handleInputChange('input1', e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder={`Tab ${activeTab + 1} - Input 2`}
          value={tabInputs[activeTab].input2}
          onChange={(e) => handleInputChange('input2', e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default DynamicTabs;
