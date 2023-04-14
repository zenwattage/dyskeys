import React, { useState } from 'react';
import CustomAlphabet from './CustomAlphabet';
import AlphabetDisplay from './AlphabetDisplay';

type AlphabetVariations = Record<
  string,
  { rotation: number; flip: boolean; mirror: boolean }
>;

type Props = {
  onLoadAlphabets: () => Promise<AlphabetVariations[]>;
};

const AlphabetsList: React.FC<Props> = ({ onLoadAlphabets }) => {
  const [alphabets, setAlphabets] = useState<AlphabetVariations[]>([]);

  const handleGetClick = async () => {
    const loadedAlphabets = await onLoadAlphabets();
    console.log('loadedAlphabets:', loadedAlphabets);
    setAlphabets(loadedAlphabets);
  };

  if (alphabets.length === 0) {
    return (
      <div>
        <button onClick={handleGetClick}>Get Alphabets</button>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleGetClick}>Get Alphabets</button>
      {alphabets.map((alphabet, index) => (
        <div key={index}>
          <h6>Alphabet {index + 1}</h6>
          {/* <CustomAlphabet variations={alphabet} /> */}
          <AlphabetDisplay variations={alphabet} />
        </div>
      ))}
    </div>
  );
};

export default AlphabetsList;
