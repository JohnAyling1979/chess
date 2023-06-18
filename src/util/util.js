import BlackPawn from '../components/pieces/black/Pawn';
import BlackBishop from '../components/pieces/black/Bishop';
import BlackKnight from '../components/pieces/black/Knight';
import BlackRook from '../components/pieces/black/Rook';
import BlackQueen from '../components/pieces/black/Queen';
import BlackKing from '../components/pieces/black/King';
import WhitePawn from '../components/pieces/white/Pawn';
import WhiteBishop from '../components/pieces/white/Bishop';
import WhiteKnight from '../components/pieces/white/Knight';
import WhiteRook from '../components/pieces/white/Rook';
import WhiteQueen from '../components/pieces/white/Queen';
import WhiteKing from '../components/pieces/white/King';
import { PIECES } from '../constans';

export const loadPositionsFromFen = (fen) => {
  const positions = [];

  const rows = fen.split('/');

  rows.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (isNaN(char)) {
        positions.push(PIECES[char]);
      } else {
        const num = parseInt(char);
        for (let j = 0; j < num; j++) {
          positions.push(null);
        }
      }
    }
  });

  return positions;
};

export const getPieceFromCode = (code) => {
  if (code === 1) {
    return BlackPawn;
  } else if (code === 2) {
    return BlackBishop;
  } else if (code === 3) {
    return BlackKnight;
  } else if (code === 4) {
    return BlackRook;
  } else if (code === 5) {
    return BlackQueen;
  } else if (code === 6) {
    return BlackKing;
  } else if (code === 7) {
    return WhitePawn;
  } else if (code === 8) {
    return WhiteBishop;
  } else if (code === 9) {
    return WhiteKnight;
  } else if (code === 10) {
    return WhiteRook;
  } else if (code === 11) {
    return WhiteQueen;
  } else if (code === 12) {
    return WhiteKing;
  } else {
    return null;
  }
};

const topEdgePositions = [0, 1, 2, 3, 4, 5, 6, 7];
const bottomEdgePositions = [56, 57, 58, 59, 60, 61, 62, 63];
const leftEdgePositions = [0, 8, 16, 24, 32, 40, 48, 56];
const rightEdgePositions = [7, 15, 23, 31, 39, 47, 55, 63];

const pawnMovement = (
  board,
  firstOffest,
  secondOffset,
  leftOffset,
  rightOffset,
  rowStart,
  rowEnd,
  startPosition,
  endPosition,
  isWhitePeace,
) => {
  const isEmpty = board[endPosition] === null;
  let isOpponent = board[endPosition] > 6 && !isEmpty;

  if (isWhitePeace) {
    isOpponent = board[endPosition] < 7 && !isEmpty;
  }

  if (!(isEmpty || isOpponent)) {
    return false;
  }

  if (endPosition === startPosition + firstOffest && isEmpty) {
    return true;
  }

  if (startPosition > rowStart && startPosition < rowEnd && isEmpty) {
    const firstSquareIsEmpty = board[startPosition + firstOffest] === null;

    if (endPosition === startPosition + secondOffset && firstSquareIsEmpty) {
      return true;
    }
  }

  if (isOpponent) {
    const column = startPosition % 8;
    const isLeftCapture = endPosition === startPosition + leftOffset;
    const isRightCapture = endPosition === startPosition + rightOffset;

    if (column === 0 && isRightCapture) {
      return true;
    }

    if (column === 7 && isLeftCapture) {
      return true;
    }

    if (column > 0 && column < 7 && (isRightCapture || isLeftCapture)) {
      return true;
    }
  }
};

const bishopMovement = (board, startPosition, endPosition, topLeftOffset, topRightOffset, bottomLeftOffset, bottomRightOffset, isWhitePeace) => {
  for (let p = startPosition; p >= 0; p += topLeftOffset) {
    const isEmpty = board[p] === null;
    let isEnemy = board[p] > 6 && !isEmpty;

    if (isWhitePeace) {
      isEnemy = board[p] < 7 && !isEmpty;
    }

    if (leftEdgePositions.includes(p) || topEdgePositions.includes(p)) {
      if (endPosition === p && p !== startPosition && (isEmpty || isEnemy)) {
        return true;
      }

      break;
    }

    if (p === startPosition) {
      continue;
    }

    if (board[p] !== null) {
      if (endPosition === p && isEnemy) {
        return true;
      }

      break;
    }

    if (endPosition === p) {
      return true;
    }
  }

  for (let p = startPosition; p >= 0; p += topRightOffset) {
    const isEmpty = board[p] === null;
    let isEnemy = board[p] > 6 && !isEmpty;

    if (isWhitePeace) {
      isEnemy = board[p] < 7 && !isEmpty;
    }

    if (rightEdgePositions.includes(p) || topEdgePositions.includes(p)) {
      if (endPosition === p && p !== startPosition && (board[p] === null || isEnemy)) {
        return true;
      }

      break;
    }

    if (p === startPosition) {
      continue;
    }

    if (board[p] !== null) {
      if (endPosition === p && isEnemy) {
        return true;
      }

      break;
    }

    if (endPosition === p) {
      return true;
    }
  }

  for (let p = startPosition; p < 64; p += bottomLeftOffset) {
    const isEmpty = board[p] === null;
    let isEnemy = board[p] > 6 && !isEmpty;

    if (isWhitePeace) {
      isEnemy = board[p] < 7 && !isEmpty;
    }

    if (leftEdgePositions.includes(p) || bottomEdgePositions.includes(p)) {
      if (endPosition === p && p !== startPosition && (board[p] === null || isEnemy)) {
        return true;
      }

      break;
    }

    if (p === startPosition) {
      continue;
    }

    if (board[p] !== null) {
      if (endPosition === p && isEnemy) {
        return true;
      }

      break;
    }

    if (endPosition === p) {
      return true;
    }
  }

  for (let p = startPosition; p < 64; p += bottomRightOffset) {
    const isEmpty = board[p] === null;
    let isEnemy = board[p] > 6 && !isEmpty;

    if (isWhitePeace) {
      isEnemy = board[p] < 7 && !isEmpty;
    }

    if (rightEdgePositions.includes(p) || bottomEdgePositions.includes(p)) {
      if (endPosition === p && p !== startPosition && (board[p] === null || isEnemy)) {
        return true;
      }

      break;
    }

    if (p === startPosition) {
      continue;
    }

    if (board[p] !== null) {
      if (endPosition === p && isEnemy) {
        return true;
      }

      break;
    }

    if (endPosition === p) {
      return true;
    }
  }

  return false;
};

export const canMoveTo = (startPosition, endPosition, piece, board) => {
  if (piece === null) {
    return false;
  }

  if (piece === 1) {
    return pawnMovement(board, 8, 16, 7, 9, 7, 16, startPosition, endPosition, false);
  } else if (piece === 2) {
    return bishopMovement(board, startPosition, endPosition, -9, -7, 7, 9, false);
  } else if (piece === 7) {
    return pawnMovement(board, -8, -16, -9, -7, 47, 56, startPosition, endPosition, true);
  } else if (piece === 8) {
    return bishopMovement(board, startPosition, endPosition, -9, -7, 7, 9, true);
  }

  return false;
};
