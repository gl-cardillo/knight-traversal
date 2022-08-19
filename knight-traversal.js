/* eslint-disable no-unused-vars */
class Gameboard {
  constructor(position) {
    this.position = position;
    this.connection = [];
    this.path = [position];
  }
}

const knightMoves = (start, end) => {
  let queue = [start];
  let knight = new Gameboard(start);
  let moves = [
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [-2, -1],
    [-1, -2],
  ];

  while (queue.length > 0) {
    for (let move of moves) {
      if (checkMove(knight, move)) {
        const [posX, posY] = knight.position;
        const [moveX, moveY] = move;
        let newPosition = [posX + moveX, posY + moveY];
        const movement = new Gameboard(newPosition);
        movement.path = knight.path.concat(movement.path);
        if (knight.position[0] === end[0] && knight.position[1] === end[1]) {
          console.log(
            `You made it in ${knight.path.length - 1} moves!  Here's your path:`
          );
          for (let moves in knight.path) {
            console.log(knight.path[moves]);
          }
          return;
        }
        knight.connection.push(movement.path);
        queue.push(movement);
      }
    }
    queue.shift();
    [knight] = queue;
  }
};

const checkMove = (knight, move) => {
  if (
    knight.position[0] + move[0] > 7 ||
    knight.position[0] + move[0] < 0 ||
    knight.position[1] + move[1] > 7 ||
    knight.position[1] + move[1] < 0
  ) {
    return false;
  }
  return true;
};

knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);
knightMoves([2, 2], [6, 6]);
knightMoves([1, 4], [4, 7]);