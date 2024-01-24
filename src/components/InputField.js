import React from 'react';
import './InputField.css';
const InputField = ({ name, label, value, placeholder, type, onChange }) => {
    return (
      <div className='divClass'>
        <label className='labelClass' htmlFor={name}>{label}</label>
        <input className='inputClass'
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default InputField;