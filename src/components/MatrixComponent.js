import React from 'react';
import Card from './CardComponent';
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
                    cardsFlipped={props.cardsFlipped}
                    enableGame={props.enableGame}
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