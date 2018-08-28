import React from 'react';

const Card = (props) => {
  return (
    <li className={(props.flipped ? 'flipped' : ' ') + ' ' +(props.resolved ? 'resolved': ' ')}
        onClick={
          () => {
            if (props.enableGame) {
              props.handleClick(props.uniquekey, props.xlocation, props.ylocation, props.symbol)
            }
          }
        }
        xlocation={props.xlocation}
        ylocation={props.ylocation}
        uniquekey={props.uniquekey}>
      <i className={"fas " + props.symbol}></i>
    </li>
  )
};

export default Card;