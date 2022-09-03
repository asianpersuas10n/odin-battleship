import css from './style.css';

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
  let game = [
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
      game[y[0]][y[1]] = 1;
    });
  });

  function receiveAttack(coor) {
    ships.forEach((x) => {
      if (x.location.find((y) => y[0] === coor[0] && y[1] === coor[1]) !== undefined) {
        bool = true;
        game[coor[0]][coor[1]] = 'x';
        x.ship.hit();
        x.ship.sunk = x.ship.isSunk();
        if (x.ship.sunk) {
          totalShips.shift();
        }
        return;
      }
    });
    if (!bool) {
      game[coor[0]][coor[1]] = 'm';
    }
  }

  return { game, totalShips, receiveAttack };
}

function Player(name) {
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

export { Ship, GameBoard, Computer };
