import React from 'react';
import './component.css';
// import Component1 from './Component1';

const Component2 = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {/* {hasError && errorMessage ?
        <p data-testid="error-message">{errorMessage}</p> : null} */}
    </div>
  );
};

export default Component2;
