
function Square({color, position, onDragEnd}) {
  const style = {
    backgroundColor: color,
    flex: 1,
    height: '100%',
  };

  const onDragOver = (event) => {
    event.preventDefault()
  };

  const onDragEnter = (event) => {
    event.preventDefault()
  };

  return (
    <div
      style={style}
      onDrop={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
    />
  );
}

export default Square;
