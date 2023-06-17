import BlackPawn from "../components/pieces/black/Pawn";
import BlackBishop from "../components/pieces/black/Bishop";
import BlackKnight from "../components/pieces/black/Knight";
import BlackRook from "../components/pieces/black/Rook";
import BlackQueen from "../components/pieces/black/Queen";
import BlackKing from "../components/pieces/black/King";
import WhitePawn from "../components/pieces/white/Pawn";
import WhiteBishop from "../components/pieces/white/Bishop";
import WhiteKnight from "../components/pieces/white/Knight";
import WhiteRook from "../components/pieces/white/Rook";
import WhiteQueen from "../components/pieces/white/Queen";
import WhiteKing from "../components/pieces/white/King";
import { PIECES } from "../constans";

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
}

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
}