import React from 'react';
import Card from './Card';
import {v4} from 'uuid';

const Matrix = (props) => {
  return (
    <div>
      {props.board.map((row, rowIndex) => {
        return (
          <ul className="gridList" key={v4()}>
            {
              row.map((item, colIndex)=> {
                return (
                  <Card
                    symbol={item.symbol}
                    flipped={item.flipped}
                    handleClick={props.handleClick}
                    uniquekey={item.key}
                    key={item.key}
                    xlocation={colIndex}
                    ylocation={rowIndex}
                    resolved={item.resolved}
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