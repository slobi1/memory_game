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
              row.map(item => {
                return (
                  <Card
                    symbol={item.symbol}
                    flipped={item.flipped}
                    handleClick={props.handleClick}
                    key={item.key}
                  />
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