import { useContext } from 'react';
import bishop from '../../../assets/w_bishop.svg';
import { AppContext } from '../../Context/AppContext';

const style = (x, y) => ({
  position: 'absolute',
  left: `${x * 100}px`,
  top: `${y * 100}px`,
  width: '100px',
  height: '100px',
});

function Bishop({ x, y, position, canMoveTo }) {
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
      src={bishop}
      alt="bishop"
      onDragStart={() => onDragStart(position)}
      onDragEnd={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={() => onDragEnd(position)}
      draggable={turn === 'w'}
    />
  );
}

export default Bishop;
