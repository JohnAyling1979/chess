import Square from '../Square/Square';
import { canMoveTo, getPieceFromCode } from '../../util/util';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 100px)',
  gridTemplateRows: 'repeat(8, 100px)',
  position: 'relative',
};

function Board() {
  const { boardState, startPosition } = useContext(AppContext);

  return (
    <div style={boardStyle}>
      {boardState.map((piece, index) => {
        const x = index % 8;
        const y = Math.floor(index / 8);

        const color = (x + y) % 2 === 0 ? 'white' : 'silver';

        const Piece = getPieceFromCode(piece);
        const pieceCanMoveTo = canMoveTo(
          startPosition,
          index,
          boardState[startPosition],
          boardState
        );

        return (
          <div key={index}>
            <Square color={color} position={index} canMoveTo={pieceCanMoveTo} />
            {Piece && (
              <Piece position={index} canMoveTo={pieceCanMoveTo} x={x} y={y} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
