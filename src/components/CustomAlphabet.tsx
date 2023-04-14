import React, { useState } from 'react';
import LetterWrapper from './LetterWrapper';

interface Variation {
  rotation: number;
  flip: boolean;
  mirror: boolean;
}

type Alphabet = Record<string, Variation>;

const saveAlphabetToDatabase = async (alphabetData: any, name: string) => {
  console.log('Sending alphabetData:', alphabetData);
  try {
    const response = await fetch('/api/save-alphabet', {
      method: 'POST',
      body: JSON.stringify({
        alphabetData: JSON.stringify(alphabetData),
        name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error saving alphabet: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error saving alphabet to database', error);
  }
};

const CustomAlphabet: React.FC<{
  variations: Record<
    string,
    { rotation: number; flip: boolean; mirror: boolean }
  >;
}> = ({ variations }) => {
  const letterWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    marginLeft: '20px',
    width: '10%',
  };

  const [alphabetName, setAlphabetName] = useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlphabetName(event.target.value);
  };
  const handleSaveClick = async () => {
    if (!alphabetName) {
      alert('Please enter a name for your custom alphabet');
      return;
    }

    try {
      await saveAlphabetToDatabase(variations, alphabetName);
      alert('Custom alphabet saved successfully');
    } catch (error) {
      alert('Error saving custom alphabet');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <label htmlFor="name">Enter a name for your custom alphabet:</label>
        <input
          type="text"
          id="name"
          value={alphabetName}
          onChange={handleNameChange}
        />
      </div>
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
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSaveClick}>Save Alphabet</button>
      </div>
    </div>
  );
};

export default CustomAlphabet;
