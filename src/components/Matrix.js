import React from 'react';
import Card from './Card';

const Matrix = (props) => {
  return (
    <div>
      <ul className="gridList">
        <Card symbol={'A'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'A'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'B'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'B'} flipped={true} handleClick={props.handleClick}/>
      </ul>
      <ul className="gridList">
        <Card symbol={'C'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'C'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'D'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'D'} flipped={true} handleClick={props.handleClick}/>
      </ul>
      <ul className="gridList">
        <Card symbol={'E'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'E'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'F'} flipped={true} handleClick={props.handleClick}/>
        <Card symbol={'F'} flipped={true} handleClick={props.handleClick}/>
      </ul>
    </div>
  )
};

export default Matrix;