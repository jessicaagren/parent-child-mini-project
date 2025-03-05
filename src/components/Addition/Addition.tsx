// En ny komponent Addition som har två inputfält och en knapp samt en p-tagg. När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
// UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten. Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet. Se till att taborder är korrekt.

import GenericDiv from '../GenericDiv/GenericDiv';
import Button from '../Button/Button';
import { useState } from 'react';

function Addition() {
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const [sum, setSum] = useState<number | null>(null);

  const handleClick = () => {
    const num1 = parseFloat(inputValueOne) || 0;
    const num2 = parseFloat(inputValueTwo) || 0;

    setSum(num1 + num2);
    setInputValueOne('');
    setInputValueTwo('');
  };

  return (
    <GenericDiv className='Addition'>
      <h2>Addition</h2>
      <input
        type='number'
        value={inputValueOne}
        onChange={(e) => setInputValueOne(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}></input>

      <input
        type='number'
        value={inputValueTwo}
        onChange={(e) => setInputValueTwo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}></input>
      <Button title='Submit text' clickFunction={handleClick} />
      <p>{sum}</p>
    </GenericDiv>
  );
}

export default Addition;
