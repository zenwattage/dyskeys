// components/AlphabetsContainer.tsx
import React, { useEffect, useState } from 'react';
import AlphabetsList from './AlphabetsList';

const AlphabetsContainer: React.FC = () => {
  const [alphabets, setAlphabets] = useState([]);

  const loadAlphabets = async () => {
    const response = await fetch('/api/get-alphabets');
    const data = await response.json();

    console.log('Fetched data:', data);

    // Convert objects to arrays
    const transformedAlphabets = data.alphabets.map((alphabet: any) => {
      const parsedAlphabetData = alphabet.alphabet_data;

      return Object.entries(parsedAlphabetData).map(([key, value]) => ({
        letter: key,
        ...(value as Record<string, unknown>),
      }));
    });

    return transformedAlphabets;
  };

  useEffect(() => {
    const fetchAlphabets = async () => {
      const fetchedAlphabets = await loadAlphabets();
      setAlphabets(fetchedAlphabets);
    };

    fetchAlphabets();
  }, []);

  return <AlphabetsList onLoadAlphabets={loadAlphabets} />;
};

export default AlphabetsContainer;
