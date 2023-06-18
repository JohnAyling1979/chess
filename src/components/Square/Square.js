function Square({ color, position, onDragEnd, canMoveTo }) {
  const style = {
    backgroundColor: !canMoveTo ? color : 'lightgreen',
    flex: 1,
    height: '100%',
  };

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
      style={style}
      onDrop={() => onDragEnd(position)}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
    />
  );
}

export default Square;
