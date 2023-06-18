import Board from '../Board/Board';
import TextSection from '../TextSection/TextSection';

const rootStyle = {
  margin: 'auto',
  marginTop: '50px',
  width: '800px',
};

function App() {
  return (
    <div style={rootStyle}>
      <Board />
      <TextSection />
    </div>
  );
}

export default App;
