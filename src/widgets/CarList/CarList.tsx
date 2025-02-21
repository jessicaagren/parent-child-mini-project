import { useState } from 'react';
import './CarList.scss';
import CarItem from './CarItem/CarItem';

const carsList = [
  'Volvo',
  'Saab',
  'Honda',
  'Ferrari',
  'Porsche',
  'Lamborghini',
];

function CarList() {
  const [cars, setCars] = useState<string[]>(carsList);

  const deleteCar = (index: number) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  const reset = () => {
    setCars([...carsList]);
  };

  return (
    <>
      <div className='CarListDiv ListDiv'>
        <h2>Cars</h2>
        <ul className='CarList List'>
          {cars.map((car, index) => (
            <CarItem
              key={index}
              car={car}
              handleDeleteClick={() => deleteCar(index)}
            />
          ))}
        </ul>
        <button onClick={reset} className='ResetButton'>
          Reset
        </button>
      </div>
    </>
  );
}

export default CarList;
