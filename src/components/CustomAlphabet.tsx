import React from 'react';
import LetterWrapper from './LetterWrapper';

const CustomAlphabet: React.FC<{
  variations: Record<
    string,
    { rotation: number; flip: boolean; mirror: boolean }
  >;
}> = ({ variations }) => {
  const letterWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    // margin: '10px',
    // backgroundColor: 'lightgray',
    marginLeft: '20px',
    width: '10%',
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {Object.entries(variations).map(([letter, variation]) => (
        <LetterWrapper
          key={letter}
          letter={letter}
          rotation={variation.rotation}
          flip={variation.flip}
          mirror={variation.mirror}
          style={letterWrapperStyle}
        />
      ))}
    </div>
  );
};

export default CustomAlphabet;
