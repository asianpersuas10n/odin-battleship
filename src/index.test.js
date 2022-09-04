import { Ship, GameBoard, Computer } from './index';

test('Ship hit', () => {
  let newShip = Ship(5);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.hull).toEqual([]);
});

test('Ship isSunk', () => {
  let newShip = Ship(5);
  newShip.hull = [];
  newShip.isSunk();
  expect(newShip.isSunk).toBeTruthy();
});

test('Ship sunk', () => {
  let newShip = Ship(5);
  newShip.hull = ['x', 'x', 'x', 'x', 'x'];
  newShip.sunk = newShip.isSunk;
  expect(newShip.sunk).toBeTruthy();
});

test('Game Set Up', () => {
  let playerOneBoard = GameBoard(
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
    ]
  );
  expect(playerOneBoard.game).toEqual([
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  ]);
});

test('attack lands', () => {
  let playerOneBoard = GameBoard(
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
    ]
  );
  playerOneBoard.receiveAttack([0, 0]);
  expect(playerOneBoard.game).toEqual([
    ['x', 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  ]);
});

test('attack misses', () => {
  let playerOneBoard = GameBoard(
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
    ]
  );
  playerOneBoard.receiveAttack([0, 9]);
  expect(playerOneBoard.game).toEqual([
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 'm'],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  ]);
});

test('attack hits all ', () => {
  let playerOneBoard = GameBoard(
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
    ]
  );
  playerOneBoard.receiveAttack([0, 0]);
  playerOneBoard.receiveAttack([0, 1]);
  playerOneBoard.receiveAttack([0, 2]);
  playerOneBoard.receiveAttack([0, 3]);
  playerOneBoard.receiveAttack([0, 4]);
  playerOneBoard.receiveAttack([0, 5]);
  playerOneBoard.receiveAttack([0, 6]);
  playerOneBoard.receiveAttack([0, 7]);
  playerOneBoard.receiveAttack([1, 0]);
  playerOneBoard.receiveAttack([1, 1]);
  playerOneBoard.receiveAttack([1, 2]);
  playerOneBoard.receiveAttack([1, 3]);
  playerOneBoard.receiveAttack([9, 5]);
  playerOneBoard.receiveAttack([9, 6]);
  playerOneBoard.receiveAttack([9, 7]);
  playerOneBoard.receiveAttack([9, 8]);
  playerOneBoard.receiveAttack([9, 9]);
  expect(playerOneBoard.game).toEqual([
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 0, 0],
    ['x', 'x', 'x', 'x', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 'x', 'x', 'x', 'x', 'x'],
  ]);
});

test('totalships = 0 ', () => {
  let playerOneBoard = GameBoard(
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
    ]
  );
  playerOneBoard.receiveAttack([0, 0]);
  playerOneBoard.receiveAttack([0, 1]);
  playerOneBoard.receiveAttack([0, 2]);
  playerOneBoard.receiveAttack([0, 3]);
  playerOneBoard.receiveAttack([0, 4]);
  playerOneBoard.receiveAttack([0, 5]);
  playerOneBoard.receiveAttack([0, 6]);
  playerOneBoard.receiveAttack([0, 7]);
  playerOneBoard.receiveAttack([1, 0]);
  playerOneBoard.receiveAttack([1, 1]);
  playerOneBoard.receiveAttack([1, 2]);
  playerOneBoard.receiveAttack([1, 3]);
  playerOneBoard.receiveAttack([9, 5]);
  playerOneBoard.receiveAttack([9, 6]);
  playerOneBoard.receiveAttack([9, 7]);
  playerOneBoard.receiveAttack([9, 8]);
  playerOneBoard.receiveAttack([9, 9]);
  expect(playerOneBoard.totalShips).toEqual([]);
});

test('alreadyHit', () => {
  let computerPlayer = Computer();
  computerPlayer.randPick();
  expect(computerPlayer.alreadyHit[0]).toBeTruthy();
});

test('multiple alreadyHit', () => {
  let computerPlayer = Computer();
  computerPlayer.randPick();
  computerPlayer.randPick();
  computerPlayer.randPick();
  expect(computerPlayer.alreadyHit[2]).toBeTruthy();
});

test('computer choice', () => {
  let computerPlayer = Computer();
  computerPlayer.randPick();
  expect(computerPlayer.computerChoice[0]).toBeTruthy();
});

test('computer choice shifting', () => {
  let computerPlayer = Computer();
  computerPlayer.randPick();
  computerPlayer.randPick();
  expect(computerPlayer.computerChoice[1]).toBeFalsy();
});

test('possible on alignment change', () => {
  function possible(shipId, x, y, align, paths) {
    let shipLength = 0;
    if (shipId === 'shipone') {
      shipLength = 2;
    } else if (shipId === 'shiptwo' || shipId === 'shipthree') {
      shipLength = 3;
    } else if (shipId === 'shipfour') {
      shipLength = 4;
    } else {
      shipLength = 5;
    }

    if (align === 'r') {
      for (let i = 0; i < shipLength; i++) {
        if (paths.some((path) => path[0] === currentXYs[0] + i && path[1] === currentXYs[1])) {
          console.log(4);
          return false;
        }
      }
      console.log(1);
      return shipLength + Number(x) < 11;
    } else {
      for (let i = 0; i < shipLength; i++) {
        if (paths.some((path) => path[0] === x && path[1] === y - i)) {
          console.log(5);
          return false;
        }
      }
      console.log(2);
      return Number(y) - shipLength > -2;
    }
  }
  let bool = possible('shipfive', 3, 7, 'c', [
    [3, 4],
    [4, 4],
    [5, 4],
  ]);
  expect(bool).toBe(false);
});
