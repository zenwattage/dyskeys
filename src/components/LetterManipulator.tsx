// components/LetterManipulator.tsx
import React, { useState } from 'react';
import LetterWrapper from './LetterWrapper';

type Props = {
  letter: string;
  chosenVariations: {
    [key: string]: { rotation: number; flip: boolean; mirror: boolean };
  };
  setChosenVariations: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { rotation: number; flip: boolean; mirror: boolean };
    }>
  >;
};
const LetterManipulator: React.FC<Props> = ({
  letter,
  chosenVariations,
  setChosenVariations,
}) => {
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState(false);
  const [mirror, setMirror] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<number | null>(
    null
  );
  // const [chosenVariations, setChosenVariations] = useState({});
  const defaultVariations = { rotation: 0, flip: false, mirror: false };

  const handleVariationClick = (
    index: number,
    rotation: number,
    flip: boolean,
    mirror: boolean
  ) => {
    console.log(
      'selected rotation: ' + rotation + ' flip: ' + flip + ' mirror: ' + mirror
    );
    setSelectedVariation(index);
    setChosenVariations((prevVariations) => ({
      ...prevVariations,
      [letter]: { rotation, flip, mirror },
    }));
  };

  const handleRotateClick = () => {
    setRotation(rotation + 90);
  };

  const handleFlipClick = () => {
    setFlip(!flip);
  };

  const handleMirrorClick = () => {
    setMirror(!mirror);
  };
  const cardStyle: React.CSSProperties = {
    display: 'inline-block',
    margin: '10px',
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
    cursor: 'pointer',
  };

  const selectedCardStyle: React.CSSProperties = {
    ...cardStyle,
    borderColor: '#001244',
    borderWidth: '4px',
    borderStyle: 'solid',
  };
  const letterVariations = [
    { rotation: 0, flip: false, mirror: false },
    { rotation: 90, flip: false, mirror: false },
    { rotation: 180, flip: false, mirror: false },
    { rotation: 270, flip: false, mirror: false },
    { rotation: 0, flip: true, mirror: false },
    { rotation: 0, flip: false, mirror: true },
    { rotation: 90, flip: true, mirror: false },
    { rotation: 270, flip: true, mirror: false },
  ];
  //empty array to store selected variation

  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <LetterWrapper
          letter={letter}
          rotation={rotation}
          flip={flip}
          mirror={mirror}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleRotateClick}
        >
          Rotate
        </button>
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleFlipClick}
        >
          Flip
        </button>
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleMirrorClick}
        >
          Mirror
        </button>
      </div>

      <div style={{ width: '600px' }}>
        {letterVariations.map((variation, index) => (
          <div
            key={index}
            onClick={() =>
              handleVariationClick(
                index,
                variation.rotation,
                variation.flip,
                variation.mirror
              )
            }
            style={index === selectedVariation ? selectedCardStyle : cardStyle}
          >
            <p>{index}</p>
            <LetterWrapper
              letter={letter}
              rotation={variation.rotation}
              flip={variation.flip}
              mirror={variation.mirror}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterManipulator;
