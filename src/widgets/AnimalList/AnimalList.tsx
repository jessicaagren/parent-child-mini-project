import { useState } from 'react';
import './AnimalList.scss';
import AnimalItem from './AnimalItem/AnimalItem';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

const animalsList = ['Lion', 'Tiger', 'Bear', 'Horse'];

function AnimalList() {
  const [animals, setAnimals] = useState<string[]>(animalsList);
  const [inputAnimal, setInputAnimal] = useState('');

  const addAnimal = () => {
    inputAnimal.trim() && setAnimals([...animals, inputAnimal]);
    setInputAnimal('');
  };

  const deleteAll = () => {
    setAnimals([]);
  };

  const reset = () => {
    setAnimals([...animalsList]);
  };

  return (
    <div className='AnimalListDiv ListDiv'>
      <h2>Animals</h2>
      <section className='AnimalInput'>
        <InputField
          value={inputAnimal}
          onChange={(e) => setInputAnimal(e.target.value)}
          onEnterPress={addAnimal}
          placeholder='Animal... (max 20 letters)'
          maxLength={20}
          autoFocus
        />
        <Button title='Add' clickFunction={addAnimal} />
        <Button title='Delete all' clickFunction={deleteAll} />
        <Button title='Reset' clickFunction={reset} />
      </section>

      <ul className='AnimalList List'>
        {animals.map((animal, index) => (
          <AnimalItem key={index} animal={animal} />
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
