import Square from '../Square/Square';
import { canMoveTo, getPieceFromCode } from '../../util/util';

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 100px)',
  gridTemplateRows: 'repeat(8, 100px)',
  position: 'relative',
};

function Board({ boardState, startPosition, turn, onDragStart, onDragEnd }) {
  let key = 0;
  const squares = [];

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
    <div style={boardStyle}>
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
