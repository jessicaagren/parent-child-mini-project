// Skapa komponenten List som har ett textfält, knapp och ul. När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.
// UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.
// UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan.

import { useRef, useState } from 'react';
import Button from '../Button/Button';
import GenericDiv from '../GenericDiv/GenericDiv';
import './TextList.scss';

function TextList() {
  const [inputValue, setInputValue] = useState('');
  const [textList, setTextList] = useState(['']);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputValue.trim()) return;
    setTextList([...textList, inputValue]);
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <GenericDiv>
      <h2>Add text to list with useRef</h2>
      <input
        type='text'
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />
      <Button title='Add text' clickFunction={handleClick} />
      <ul>
        {textList.length > 0 &&
          textList.map((text, index) =>
            text.trim() ? <li key={index}>{text}</li> : null
          )}
      </ul>
    </GenericDiv>
  );
}

export default TextList;
