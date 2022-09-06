import css from './style.css';
import { dragAndDrop, domManip, createBoards, win } from './dom';

let player;
let computer;
let turn;
let pWin;
let cWin;

function Ship(length) {
  let hull = [];
  let sunk = false;

  const hit = () => {
    hull.shift();
  };

  const isSunk = () => {
    if (!hull.length) {
      return true;
    }
  };

  for (let i = 1; i <= length; i++) {
    hull.push(1);
  }

  return { hull, hit, isSunk, sunk };
}

function GameBoard(shipOneLoc, shipTwoLoc, shipThreeLoc, shipFourLoc, shipFiveLoc) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let totalShips = [1, 1, 1, 1, 1];

  let bool = false;

  let shipOne = {
    location: shipOneLoc,
    ship: Ship(2),
  };

  let shipTwo = {
    location: shipTwoLoc,
    ship: Ship(3),
  };

  let shipThree = {
    location: shipThreeLoc,
    ship: Ship(3),
  };

  let shipFour = {
    location: shipFourLoc,
    ship: Ship(4),
  };

  let shipFive = {
    location: shipFiveLoc,
    ship: Ship(5),
  };

  let ships = [shipOne, shipTwo, shipThree, shipFour, shipFive];

  ships.forEach((x) => {
    x.location.forEach((y) => {
      board[y[0]][y[1]] = 1;
    });
  });

  function receiveAttack(coor) {
    ships.forEach((x) => {
      if (x.location.find((y) => y[0] === coor[0] && y[1] === coor[1]) !== undefined) {
        bool = true;
        board[coor[0]][coor[1]] = 'x';
        x.ship.hit();
        x.ship.sunk = x.ship.isSunk();
        if (x.ship.sunk) {
          totalShips.shift();
        }
        return;
      }
    });
    if (!bool) {
      board[coor[0]][coor[1]] = 'm';
    }
  }

  return { board, totalShips, receiveAttack };
}

function Player(name) {
  if (name === '') {
    name = 'Player One';
  }
  return { name };
}

function Computer() {
  let alreadyHit = [];
  let computerChoice = [];
  const randPick = () => {
    let ranX = Math.floor(Math.random() * 10);
    let ranY = Math.floor(Math.random() * 10);
    while (alreadyHit.find((x) => ranX === x[0] && ranY === x[1]) !== undefined) {
      ranX = Math.floor(Math.random() * 10);
      ranY = Math.floor(Math.random() * 10);
    }
    if (computerChoice.length) {
      computerChoice.shift();
    }
    computerChoice.push([ranX, ranY]);
    alreadyHit.push([ranX, ranY]);
  };
  return { alreadyHit, computerChoice, randPick };
}

function randomBoard() {
  let alreadyHere = [];
  let tempShip = [];
  let align = Math.round(Math.random()); // 0 for row 1 for column

  let shipFive = randomizer(align, alreadyHere, 5);
  align = Math.round(Math.random());
  tempShip = shipFive.slice();
  alreadyHere.concat(tempShip);
  let shipFour = randomizer(align, alreadyHere, 4);
  align = Math.round(Math.random());
  tempShip = shipFour.slice();
  alreadyHere.concat(tempShip);
  let shipThree = randomizer(align, alreadyHere, 3);
  align = Math.round(Math.random());
  tempShip = shipThree.slice();
  alreadyHere.concat(tempShip);
  let shipTwo = randomizer(align, alreadyHere, 3);
  align = Math.round(Math.random());
  tempShip = shipTwo.slice();
  alreadyHere.concat(tempShip);
  let shipOne = randomizer(align, alreadyHere, 2);

  return [shipOne, shipTwo, shipThree, shipFour, shipFive];
}

function randomizer(align, already, shipLength, start = []) {
  let ranX = Math.floor(Math.random() * 10);
  let ranY = Math.floor(Math.random() * 10);
  let ship = [];
  let here = already.slice();
  while (
    here.find((x) => ranX === x[0] && (ranY === x[1]) !== undefined) ||
    (ranX === start[0] && ranY === start[1])
  ) {
    if (align === 0) {
      ranX = Math.floor(Math.random() * 10 - shipLength);
      ranY = Math.floor(Math.random() * 10);
    } else {
      ranX = Math.floor(Math.random() * 10);
      ranY = Math.floor(Math.random() * 10 - shipLength);
    }
  }
  if (align === 0) {
    for (let i = 0; i < shipLength; i++) {
      if (here.find((path) => path[0] === ranX + i && path[1] === ranY)) {
        return randomizer(align, here, shipLength, start.push([ranX, ranY]));
      }
      ship.push(ranX + i + ranY);
    }
  } else {
    for (let i = 0; i < shipLength; i++) {
      if (here.find((path) => path[0] === ranX && path[1] === ranY - i)) {
        return randomizer(align, here, shipLength, start.push([ranX, ranY]));
      }
      ship.push(ranX + ranY - i);
    }
  }
  return ship;
}

function gameStart(ship1, ship2, ship3, ship4, ship5) {
  const playerNameInput = document.querySelector('#pName').textContent;
  let computerBoard;
  player = Player(playerNameInput);
  computer = Player('Computer');
  createBoards(playerNameInput);

  computerBoard = randomBoard();
  player.board = GameBoard(...computerBoard);
  computer.board = GameBoard(ship1, ship2, ship3, ship4, ship5);
}

function game(container) {
  const x = container.dataset.x;
  const y = container.dataset.y;
  const playerBoard = player.board.board[y][x];
  if (!turn || playerBoard === 'm' || playerBoard === 'x' || cWin || pWin) {
    return;
  }
  turn = false;
  player.board.receiveAttack([y, x]);
  if (!player.board.totalShips[0]) {
    pWin = true;
    win(player.name);
  }
  Computer.randPick();
  computer.board.receiveAttack(Computer.computerChoice);
  if (!computer.board.totalShips[0]) {
    cWin = true;
    win(computer.name);
  }
  domManip(player, computer);
  turn = true;
}

dragAndDrop();

export { Ship, GameBoard, Computer, Player, randomBoard, gameStart, game };
