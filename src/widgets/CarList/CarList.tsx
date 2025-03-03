import { useState } from 'react';
import './CarList.scss';
import CarItem, { Car } from './CarItem/CarItem';
import Button from '../../components/Button/Button';

// const carsList = [
//   'Volvo',
//   'Saab',
//   'Honda',
//   'Ferrari',
//   'Porsche',
//   'Lamborghini',
// ];

export const carsList = [
  { name: 'Volvo', description: 'A reliable Swedish car brand.' },
  { name: 'Saab', description: 'Another classic Swedish car manufacturer.' },
  { name: 'Honda', description: 'A Japanese brand known for reliability.' },
  { name: 'Ferrari', description: 'A luxury Italian sports car brand.' },
  { name: 'Porsche', description: 'A German brand famous for performance.' },
  { name: 'Lamborghini', description: 'An Italian brand known for supercars.' },
];

function CarList() {
  const [cars, setCars] = useState<Car[]>(carsList);
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>(
    {}
  );

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
              key={car.name}
              car={car}
              isActive={activeStates[car.name] || false}
              setIsActive={(state) =>
                setActiveStates({ ...activeStates, [car.name]: state })
              }
              handleDeleteClick={() => deleteCar(index)}
            />
          ))}
        </ul>
        <Button title='Reset' clickFunction={reset} />
      </div>
    </>
  );
}

export default CarList;
