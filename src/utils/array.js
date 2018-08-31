import shuffle from "lodash/shuffle";
import {v4} from 'uuid';

class GenerateNewItem {
  constructor(symbol) {
    this.symbol = symbol;
    this.key = v4();
    this.flipped = true;
    this.resolved = false;
  }
}

export function getShuffled(difficulty, columns) {
  let board = [];
  let symbols = [];
  let collection = [
    'fa-truck-monster',
    'fa-apple-alt',
    'fa-atom-alt',
    'fa-bus-school',
    'fa-graduation-cap',
    'fa-laptop-code',
    'fa-poop',
    'fa-theater-masks',
    'fa-oil-can',
    'fa-diploma'
  ];

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