import React from 'react';

const Card = (props) => {
  return (
    <li className={(props.flipped ? 'flipped' : '')}
        onClick={props.handleClick}>
      {props.symbol}
    </li>
  )
};

export default Card;