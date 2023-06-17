import pawn from '../../../assets/b_pawn.svg';

function Pawn({x, y, onDragStart, onDragEnd, position}) {
  const style = {
    position: 'absolute',
    left: `${x * 100}px`,
    top: `${y * 100}px`,
    width: '100px',
    height: '100px',
  };

  const onDragOver = (event) => {
    event.preventDefault()
  };

  const onDragEnter = (event) => {
    event.preventDefault()
  };

  return (
    <img
      style={style}
      src={pawn}
      alt="pawn"
      onDragStart={() => onDragStart(position)}
      onDragEnd={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={() => onDragEnd(position)}
      draggable
    />
  );
}

export default Pawn;
