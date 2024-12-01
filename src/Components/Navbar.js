import React from 'react';
import PropTypes from 'prop-types';
import Switch from './switch';

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg d-flex justify-content-between navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtills</a>
        <Switch mode={mode} toggleMode={toggleMode} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
