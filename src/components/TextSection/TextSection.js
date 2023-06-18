import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const textSectionStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

function TextSection() {
  const { turn } = useContext(AppContext);

  return (
    <div style={textSectionStyle}>
      {turn === 'b' && <div>Blacks turn</div>}
      {turn === 'w' && <div>Whites turn</div>}
      {turn === 'W' && <div>White Wins</div>}
      {turn === 'B' && <div>Black Wins</div>}
    </div>
  );
}

export default TextSection;
