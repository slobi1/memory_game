import React from 'react';
import Card from './Card';

const Matrix = (props) => {
  return (
    <div>
      <ul className="gridList">
        <Card symbol={'A'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'A'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'B'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'B'} flipped={false} handleClick={props.handleClick}/>
      </ul>
      <ul className="gridList">
        <Card symbol={'C'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'C'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'D'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'D'} flipped={false} handleClick={props.handleClick}/>
      </ul>
      <ul className="gridList">
        <Card symbol={'E'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'E'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'F'} flipped={false} handleClick={props.handleClick}/>
        <Card symbol={'F'} flipped={false} handleClick={props.handleClick}/>
      </ul>
    </div>
  )
};

export default Matrix;