import rook from '../../../assets/w_rook.svg';

function Rook({x, y, onDragStart, onDragEnd, position}) {
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

  return <img
    style={style}
    src={rook}
    alt="rook"
    onDragStart={() => onDragStart(position)}
    onDragOver={onDragOver}
    onDragEnter={onDragEnter}
    onDrop={() => onDragEnd(position)}
    draggable
  />;
}

export default Rook;
