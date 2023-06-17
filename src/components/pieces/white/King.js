import king from '../../../assets/w_king.svg';

function King({x, y, onDragStart, onDragEnd, position}) {
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
    src={king}
    alt="king"
    onDragStart={() => onDragStart(position)}
    onDragOver={onDragOver}
    onDragEnter={onDragEnter}
    onDrop={() => onDragEnd(position)}
    draggable
  />;
}

export default King;
