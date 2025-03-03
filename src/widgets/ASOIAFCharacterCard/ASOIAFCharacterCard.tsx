import { useEffect, useState } from 'react';
import './ASOIAFCharacterCard.scss';
import AsoiafCharacterType from '../../types/ASOIAFCharacterType/ASOIAFCharacterType';

export default function ASOIAFCharacterCard() {
  const [random, setRandom] = useState(
    () => Math.floor(Math.random() * 1000) + 1
  );
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [culture, setCulture] = useState('');

  useEffect(() => {
    const url = `https://www.anapioficeandfire.com/api/characters/${random}`;

    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      const result = await fetch(url);
      const data = (await result.json()) as AsoiafCharacterType;
      if (!ignore) {
        setName(data.name || 'Unknown');
        setGender(data.gender || 'Unknown');
        setCulture(data.culture || 'Unknown');
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [random]);

  const getNewCharacter = () => {
    setRandom(Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <div className='ASOIAFCharacterCard'>
      <h2>ASOIAF API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Gender: {gender}</p>
          <p>Culture: {culture}</p>
        </>
      )}
      <button className='ASOIAFButton' onClick={getNewCharacter}>
        Randomise
      </button>
    </div>
  );
}
