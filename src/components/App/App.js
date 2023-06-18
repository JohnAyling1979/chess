import { useState } from 'react';
import { loadPositionsFromFen } from '../../util/util';
import Board from '../Board/Board';
import TextSection from '../TextSection/TextSection';

const rootStyle = {
  margin: 'auto',
  marginTop: '50px',
  width: '800px',
};

function App() {
  const [boardState, setBoardState] = useState(
    loadPositionsFromFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
  );
  const [startPosition, setStartPosition] = useState(null);
  const [turn, setTurn] = useState('w');

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

    if (!newBoardState.includes(12)) {
      setTurn('B');
    } else if (!newBoardState.includes(6)) {
      setTurn('W');
    } else {
      setTurn((previousTurn) => (previousTurn === 'w' ? 'b' : 'w'));
    }
  };

  return (
    <div style={rootStyle}>
      <Board
        boardState={boardState}
        startPosition={startPosition}
        turn={turn}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
      <TextSection turn={turn} />
    </div>
  );
}

export default App;
