// En ny komponent Addition som har två inputfält och en knapp samt en p-tagg. När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
// UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten. Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet. Se till att taborder är korrekt.

import './Addition.scss';
import GenericDiv from '../GenericDiv/GenericDiv';
import Button from '../Button/Button';
import { useRef, useState } from 'react';

function Addition() {
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const [sum, setSum] = useState<number | null>(null);
  const [numOne, setNumOne] = useState<number | null>(null);
  const [numTwo, setNumTwo] = useState<number | null>(null);

  const inputRefOne = useRef<HTMLInputElement>(null);
  const inputRefTwo = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const num1 = Number(inputValueOne) || 0;
    const num2 = Number(inputValueTwo) || 0;
    setSum(num1 + num2);
    setNumOne(num1);
    setNumTwo(num2);
    setInputValueOne('');
    setInputValueTwo('');

    setTimeout(() => {
      inputRefOne.current?.focus();
      inputRefOne.current?.select();
    }, 0);
  };

  return (
    <GenericDiv className='Addition'>
      <h2>Addition with useRef</h2>
      <input
        type='number'
        ref={inputRefOne}
        value={inputValueOne}
        onChange={(e) => setInputValueOne(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />

      <input
        type='number'
        ref={inputRefTwo}
        value={inputValueTwo}
        onChange={(e) => setInputValueTwo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />
      <Button title='Submit text' clickFunction={handleClick} />
      {sum !== null && (
        <p>
          Sum of <span className='number'>{numOne}</span> and{' '}
          <span className='number'>{numTwo}</span> is{' '}
          <span className='number'>{sum}</span>
        </p>
      )}
    </GenericDiv>
  );
}

export default Addition;
