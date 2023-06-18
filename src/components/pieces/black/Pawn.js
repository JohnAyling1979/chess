import pawn from '../../../assets/b_pawn.svg';

function Pawn({x, y, onDragStart, onDragEnd, position, turn, canMoveTo}) {
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
  if (position === 25)
    console.log('p', canMoveTo, position)
  return (
    <img
      style={style}
      src={pawn}
      alt="pawn"
      onDragStart={() => onDragStart(position)}
      onDragEnd={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={() =>  onDragEnd(position)}
      draggable={turn === 'b'}
    />
  );
}

export default Pawn;
