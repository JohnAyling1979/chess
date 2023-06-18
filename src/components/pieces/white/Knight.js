import { useContext } from 'react';
import knight from '../../../assets/w_knight.svg';
import { AppContext } from '../../Context/AppContext';

const style = (x, y) => ({
  position: 'absolute',
  left: `${x * 100}px`,
  top: `${y * 100}px`,
  width: '100px',
  height: '100px',
});

function Knight({ x, y, position, canMoveTo }) {
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
      src={knight}
      alt="knight"
      onDragStart={() => onDragStart(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={() => onDragEnd(position)}
      draggable={turn === 'w'}
    />
  );
}

export default Knight;
