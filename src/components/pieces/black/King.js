import king from '../../../assets/b_king.svg';

function King({x, y, onDragStart, onDragEnd, position, turn, canMoveTo}) {
  const style = {
    position: 'absolute',
    left: `${x * 100}px`,
    top: `${y * 100}px`,
    width: '100px',
    height: '100px',
  };

  const onDragOver = (event) => {
    if (canMoveTo) {
      event.preventDefault()
    }
  };

  const onDragEnter = (event) => {
    if (canMoveTo) {
      event.preventDefault()
    }
  };

  return <img
    style={style}
    src={king}
    alt="king"
    onDragStart={() => onDragStart(position)}
    onDragOver={onDragOver}
    onDragEnter={onDragEnter}
    onDrop={() => onDragEnd(position)}
    draggable={turn === 'b'}
    />;
}

export default King;
