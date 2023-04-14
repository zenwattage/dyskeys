// components/AlphabetDisplay.tsx
import React from 'react';
import LetterWrapper from './LetterWrapper';

interface Variation {
  rotation: number;
  flip: boolean;
  mirror: boolean;
}

type Alphabet = Record<string, Variation>;

const AlphabetDisplay: React.FC<{
  variations: Record<
    string,
    { rotation: number; flip: boolean; mirror: boolean }
  >;
}> = ({ variations }) => {
  const containerStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f5f5f5',
  };

  const letterWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    marginLeft: '5px',
    width: '7%',
  };

  const letters = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div style={containerStyle}>
      {Object.entries(variations).map(([index, variation]) => (
        <LetterWrapper
          key={index}
          letter={letters[parseInt(index)]}
          rotation={variation.rotation}
          flip={variation.flip}
          mirror={variation.mirror}
          style={letterWrapperStyle}
        />
      ))}
    </div>
  );
};

export default AlphabetDisplay;
