import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectComponent = (props) => {
  return(
    <div>
      <label htmlFor={props.id}>{props.title}</label><br/>
      <Select name={props.id} id={props.id} onChange={props.handleChange} value={props.value}>
        {props.options.map(option => <MenuItem key={option} value={option}>{option} pairs</MenuItem>)}
      </Select>
    </div>
  )
};

export default SelectComponent;