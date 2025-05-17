import React, { useState } from 'react';
import './NewMain.css'; // Optional: You can create a separate CSS file for styles

const NewMain = () => {
  const [activeTab, setActiveTab] = useState('London');

  const tabs = [
    { name: 'London', content: 'London is the capital city of England.' },
    { name: 'Paris', content: 'Paris is the capital of France.' },
    { name: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h2>Vertical Tabs</h2>
      <p>Click on the buttons inside the tabbed menu:</p>

      <div className="tab">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tablinks ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.name}
          className="tabcontent"
          style={{ display: activeTab === tab.name ? 'block' : 'none' }}
        >
          <h3>{tab.name}</h3>
          <p>{tab.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewMain;