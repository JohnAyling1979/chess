import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const style = (color, canMoveTo) => ({
  backgroundColor: !canMoveTo ? color : 'lightgreen',
  color: 'black',
  flex: 1,
  height: '100%',
});

function Square({ color, position, canMoveTo }) {
  const { onDragEnd } = useContext(AppContext);

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
    <div
      style={style(color, canMoveTo)}
      onDrop={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
    >
      {position}
    </div>
  );
}

export default Square;
