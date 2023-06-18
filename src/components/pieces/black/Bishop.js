import bishop from '../../../assets/b_bishop.svg';

function Bishop({x, y, onDragStart, onDragEnd, position, turn, canMoveTo}) {
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
    src={bishop}
    alt="bishop"
    onDragStart={() => onDragStart(position)}
    onDragOver={onDragOver}
    onDragEnter={onDragEnter}
    onDrop={() => onDragEnd(position)}
    draggable={turn === 'b'}
    />;
}

export default Bishop;
