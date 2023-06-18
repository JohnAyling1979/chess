import Square from '../Square/Square';
import { useState } from 'react';
import {
  canMoveTo,
  getPieceFromCode,
  loadPositionsFromFen,
} from '../../util/util';

function Board() {
  const [boardState, setBoardState] = useState(
    loadPositionsFromFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
  );
  const [startPosition, setStartPosition] = useState(null);
  const [turn, setTurn] = useState('w');

  const squares = [];

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 100px)',
    gridTemplateRows: 'repeat(8, 100px)',
    margin: 'auto',
    width: '800px',
    marginTop: '50px',
    position: 'relative',
  };

  const onDragStart = (startPosition) => {
    setStartPosition(startPosition);
  };

  const onDragEnd = (endPosition) => {
    if (startPosition === null) {
      return;
    }

    if (startPosition === endPosition) {
      setStartPosition(null);
      return;
    }

    const newBoardState = [...boardState];
    newBoardState[endPosition] = newBoardState[startPosition];
    newBoardState[startPosition] = null;

    setBoardState(newBoardState);
    setStartPosition(null);
    setTurn(turn === 'w' ? 'b' : 'w');
  };

  let key = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const color = (i + j) % 2 === 0 ? 'white' : 'silver';

      squares.push(
        <Square
          key={key}
          color={color}
          position={key}
          onDragEnd={onDragEnd}
          canMoveTo={canMoveTo(
            startPosition,
            key,
            boardState[startPosition],
            boardState
          )}
        />
      );
      key++;
    }
  }

  return (
    <div style={style}>
      {squares}
      {boardState.map((piece, index) => {
        if (piece === null) {
          return null;
        }

        const x = index % 8;
        const y = Math.floor(index / 8);

        const Piece = getPieceFromCode(piece);

        return (
          <Piece
            key={index}
            position={index}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            turn={turn}
            canMoveTo={canMoveTo(
              startPosition,
              index,
              boardState[startPosition],
              boardState
            )}
            x={x}
            y={y}
          />
        );
      })}
    </div>
  );
}

export default Board;
