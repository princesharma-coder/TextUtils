import React from 'react';
import './Switchfunc.css';

export default function Switch({ mode, toggleMode }) {
  return (
    <div className="theme-switch-wrapper">
      <label className={`${mode === 'light' ? 'light' : 'dark'} theme-switch`}>
        <input 
          onChange={(e) => {
            e.preventDefault();
            toggleMode();
          }}
          checked={mode === 'dark'}
          type="checkbox" 
          className="theme-switch__checkbox" 
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds" />
          <div className="theme-switch__stars-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
            </svg>
          </div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
