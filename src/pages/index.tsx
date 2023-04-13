import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
// import ImageManipulator from '@/components/ImageManipulator';
// import image from '../../public/images/lukeintree.svg';
import LetterManipulator from '@/components/LetterManipulator';
// import AlphabetCreator from '@/components/AlphabetCreator';
// const inter = Inter({ subsets: ['latin'] });
// const imageUrl = '/images/lukeintree.svg';
// const letterA = '/images/a_1_lowercase_up.jpg';
// const aaa = '/images/asvg.svg';
import CustomAlphabet from '@/components/CustomAlphabet';
// import AlphabetCreator from '@/components/AlphabetCreator';

export default function Home() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const [chosenVariations, setChosenVariations] = useState(
    alphabet.split('').reduce<{ [key: string]: any }>((acc, letter) => {
      acc[letter] = { rotation: 0, flip: false, mirror: false };
      return acc;
    }, {})
  );

  const handleNextLetter = () => {
    if (currentLetterIndex < alphabet.length - 1) {
      setCurrentLetterIndex((prevIndex) =>
        prevIndex < alphabet.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handlePreviousLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'relative',
    padding: '40px',
    width: '50px',
  };

  return (
    <>
      <Head>
        <title>DysKeys</title>
        <meta name="description" content="Image Rotation testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <h1 style={{ marginBottom: '20px' }}>Dyslexia Fontification</h1> */}
        <div className={styles.center}>
          {/* <ImageManipulator imageUrl={aaa} /> */}
          {/* <AlphabetCreator /> */}
          {/* <LetterManipulator letter={'h'} /> */}

          {/* <CustomAlphabet variations={chosenVariations} /> */}
          <LetterManipulator
            letter={alphabet[currentLetterIndex]}
            chosenVariations={chosenVariations}
            setChosenVariations={setChosenVariations}
          />
          <div style={buttonContainerStyle}>
            <button
              style={{
                backgroundColor: 'rgba(81,4,122,1)',
                borderRadius: '10px',
                width: '60px',
                boxShadow:
                  '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
              }}
              onClick={handlePreviousLetter}
            >
              Previous Letter
            </button>
            <button
              style={{
                backgroundColor: 'rgba(81,4,122,1)',
                width: '60px',
                borderRadius: '10px',
                boxShadow:
                  '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
              }}
              onClick={handleNextLetter}
            >
              Next Letter
            </button>
          </div>
          <CustomAlphabet variations={chosenVariations} />
        </div>
      </main>
    </>
  );
}
