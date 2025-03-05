// En ny komponent ChangeText innehåller ett input-fält för text, en knapp och en p-tagg. När man klickar på knappen så kopieras texten från input till p-taggen.
// UTMANING: Ändra "kopiera" till "flytta" dvs inputfältet töms. Sätt även fokus tillbaka på inputfältet. Om textfältet är tomt ska inte p-taggen ändras.

import { useRef, useState } from 'react';
import Button from '../Button/Button';
import GenericDiv from '../GenericDiv/GenericDiv';

function ChangeText() {
  const [inputText, setInputText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
    if (inputValue.trim() === '') return;
    setInputText(inputValue);
    setInputValue('');
  };

  return (
    <GenericDiv className='ChangeText'>
      <h2>Change Text with useRef</h2>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}></input>
      <Button title='Submit text' clickFunction={handleClick} />
      <p>{inputText}</p>
    </GenericDiv>
  );
}

export default ChangeText;
