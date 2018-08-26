import React from 'react';

const Select = (props) => {
  return(
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <select name={props.id} id={props.id} onChange={props.handleChange}>
        {props.options.map(option => <option key={option} value={option}>{option} pairs</option>)}
      </select>
    </div>
  )
};

export default Select;