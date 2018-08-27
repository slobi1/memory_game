import shuffle from "lodash/shuffle";
import {v4} from 'uuid';

function GenerateNewItem(symbol) {
  this.symbol = symbol;
  this.key = v4();
  this.flipped = false;
  this.resolved = false;
}

export function getShuffled(difficulty, columns) {
  let board = [];
  let symbols = [];
  let collection = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let i=0; i<difficulty; i++) {
    let char = collection.shift();
    symbols.push(new GenerateNewItem(char));
    symbols.push(new GenerateNewItem(char));
  }

  let shuffledBoard = shuffle(symbols);
  let index = 0;
  let rows = 0;

  // Make matrix based on number of columns
  shuffledBoard.forEach(symbol => {
    if (index === 0) {
      board.push([]);
    }

    board[rows].push(symbol);
    index++;

    if (index === columns) {
      index = 0;
      rows++;
    }
  });

  return board;
}