import { useState } from 'react';
import './AnimalList.scss';
import AnimalItem from './AnimalItem/AnimalItem';

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
    setAnimals(['Lion', 'Tiger', 'Bear', 'Horse']);
  };

  return (
    <div className='AnimalListDiv ListDiv'>
      <h2>Animals</h2>
      <section className='AnimalInput'>
        <input
          autoFocus
          type='text'
          placeholder='Animal... (max 20 letters)'
          maxLength={20}
          value={inputAnimal}
          onChange={(e) => setInputAnimal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addAnimal()}
        />
        <button onClick={addAnimal}>Add</button>
        <button onClick={deleteAll}>Delete all</button>
        <button onClick={reset}>Reset</button>
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
