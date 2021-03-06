import React from 'react';

const Card = (props) => {
  return (
    <li className={(props.flipped ? 'flipped' : ' ') + ' ' +(props.resolved ? 'resolved': ' ')}
        onClick={
          () => {
            if (props.enableGame && !props.flipped && props.cardsFlipped < 2) {
              props.handleClick(props)
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