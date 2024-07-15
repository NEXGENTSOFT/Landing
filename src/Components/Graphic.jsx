import React from 'react';
import './../Styles/Graphics.css';

const Graficas = () => {
  return (
    <div className="graficas-container">
      <div className="graficas-skill-box">
        <span className="graficas-title">Python</span>
        <div className="graficas-skill-bar">
          <span className="graficas-skill-per graficas-html" style={{ width: '90%' }}>
            <span className="graficas-tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="graficas-skill-box">
        <span className="graficas-title">JavaScript</span>
        <div className="graficas-skill-bar">
          <span className="graficas-skill-per graficas-css" style={{ width: '80%' }}>
            <span className="graficas-tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="graficas-skill-box">
        <span className="graficas-title">Java</span>
        <div className="graficas-skill-bar">
          <span className="graficas-skill-per graficas-javascript" style={{ width: '70%' }}>
            <span className="graficas-tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="graficas-skill-box">
        <span className="graficas-title">Flutter</span>
        <div className="graficas-skill-bar">
          <span className="graficas-skill-per graficas-javascript" style={{ width: '100%' }}>
            <span className="graficas-tooltip">100%</span>
          </span>
        </div>
      </div>

      <div className="graficas-skill-box">
        <span className="graficas-title">React</span>
        <div className="graficas-skill-bar">
          <span className="graficas-skill-per graficas-nodejs" style={{ width: '100%' }}>
            <span className="graficas-tooltip">100%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Graficas;
