import { useContext } from 'react';
import queen from '../../../assets/b_queen.svg';
import { AppContext } from '../../Context/AppContext';

const style = (x, y) => ({
  position: 'absolute',
  left: `${x * 100}px`,
  top: `${y * 100}px`,
  width: '100px',
  height: '100px',
});

function Queen({ x, y, position, canMoveTo }) {
  const { onDragStart, onDragEnd, turn } = useContext(AppContext);

  const onDragOver = (event) => {
    if (canMoveTo) {
      event.preventDefault();
    }
  };

  const onDragEnter = (event) => {
    if (canMoveTo) {
      event.preventDefault();
    }
  };

  return (
    <img
      style={style(x, y)}
      src={queen}
      alt="queen"
      onDragStart={() => onDragStart(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={() => onDragEnd(position)}
      draggable={turn === 'b'}
    />
  );
}

export default Queen;
