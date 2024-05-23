import React, { useState } from 'react';
import Title from '@/app/components/ui/Title';
import "./Tabs.css"
import ButtonArrow from './ui/ButtonArrow';


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabContent = tabs[activeTab].content;

  return (
    <div className='tabs__container'>
      <Title text={"Servicios"}/>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === activeTab ? 'active' : ''}`}>
          <div className='tab__Service'>
            <h3>{tabs[activeTab].label}</h3>
            <div className='tab_buttons'>
              <a href={tabs[activeTab].link}>
                <ButtonArrow text={"Consultar"}/>
              </a>
            </div>
          </div>
          <div className='tab__image'>
            <img src={tabs[activeTab].image} alt="nexus servicios" />
          </div>
        </div>
        <div className={`tab-pane ${activeTab === activeTab ? 'active' : ''}`}>
          <div className='tab__image'>
            <img src="/Peeling.webp" alt="logo nexus marketing" />
          </div>
          <div className='tab__Service'>
            <h3>Entregables</h3>
            <div className='span__box'>
              <span className='span__content'>{tabs[activeTab].content1}</span>
              <span className='span__content'>{tabs[activeTab].content2}</span>
              <span className='span__content'>{tabs[activeTab].content3}</span>
              <span className='span__content'>{tabs[activeTab].content4}</span>
              <span className='span__content'>{tabs[activeTab].content5}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

