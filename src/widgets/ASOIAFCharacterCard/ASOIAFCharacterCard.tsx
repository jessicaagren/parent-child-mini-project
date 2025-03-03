import { useEffect, useState } from 'react';
import './ASOIAFCharacterCard.scss';
import AsoiafCharacterType from '../../types/ASOIAFCharacterType/ASOIAFCharacterType';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button/Button';

// Component using the useFetch Hook
export function DisplayASOIAFCharacterCard() {
  const [random, setRandom] = useState(
    () => Math.floor(Math.random() * 1000) + 1
  );

  const getNewCharacter = () => {
    setRandom(Math.floor(Math.random() * 1000) + 1);
  };

  const { data, loading, error } = useFetch<AsoiafCharacterType>(
    `https://www.anapioficeandfire.com/api/characters/${random}`
  ); // Utilizing useFetch

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className='ASOIAFCharacterCard'>
        <h2>ASOIAF API with useFetch</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <p>Name: {data?.name}</p>
            <p>Gender: {data?.gender}</p>
            <p>Culture: {data?.culture}</p>
          </>
        )}
        <Button title='Randomise' clickFunction={getNewCharacter} />
      </div>
    </>
  );
}

export function ASOIAFCharacterCard() {
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
    <>
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
        <Button title='Randomise' clickFunction={getNewCharacter} />
      </div>
    </>
  );
}
