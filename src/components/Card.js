import React from 'react';

const Card = (props) => {
  return (
    <li className={(props.flipped ? 'flipped' : '')}
        onClick={() => props.handleClick(props.uniquekey, props.xlocation, props.ylocation)}
        xlocation={props.xlocation}
        ylocation={props.ylocation}
        uniquekey={props.uniquekey}>
      {props.symbol}
    </li>
  )
};

export default Card;