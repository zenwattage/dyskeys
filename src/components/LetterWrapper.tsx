// components/LetterWrapper.tsx
import React, { CSSProperties } from 'react';

type Props = {
  letter: string;
  rotation: number;
  flip: boolean;
  mirror: boolean;
  style?: CSSProperties;
};

const LetterWrapper: React.FC<Props> = ({
  letter,
  rotation,
  flip,
  mirror,
  style,
}) => {
  const transformStyle: CSSProperties = {
    transform: `rotate(${rotation}deg) scale(${flip ? -1 : 1}, ${
      mirror ? -1 : 1
    })`,
    display: 'inline-block',
    fontSize: '50px',
    lineHeight: 1,
  };

  const wrapperStyle: CSSProperties = {
    display: 'inline-block',
    margin: '10px',
    // padding: '10px',
  };

  return (
    <div style={{ ...wrapperStyle, ...style }}>
      <div style={{ ...transformStyle, lineHeight: 1 }}>{letter}</div>
    </div>
  );
};

export default LetterWrapper;
