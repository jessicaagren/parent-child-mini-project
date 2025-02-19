import { useState } from 'react';
import './CarList.scss';

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

  return (
    <div className='CarListDiv'>
      <ul className='CarList'>
        {cars.map((car, index) => (
          <li key={index}>
            {car} <button onClick={() => deleteCar(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
