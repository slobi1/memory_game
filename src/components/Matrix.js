import React from 'react';
import Card from './Card';
import {v4} from 'uuid';

const Matrix = (props) => {
  return (
    <div>
      {props.board.map(row => {
        return (
          <ul className="gridList" key={v4()}>
            {
              row.map(col => {
                return (
                  <Card symbol={col} flipped={true} handleClick={props.handleClick} key={v4()}/>
                )
              })
            }
          </ul>
        )
      })}
    </div>
  )
};

export default Matrix;