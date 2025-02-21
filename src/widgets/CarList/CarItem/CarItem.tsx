import './CarItem.scss';
// import { carsList } from '../CarList.tsx';

type CarItemProps = {
  car: Car;
  handleDeleteClick: () => void;
  isActive: boolean;
  setIsActive: (state: boolean) => void;
};

export type Car = {
  name: string;
  description: string;
};

function CarItem({
  car,
  isActive,
  setIsActive,
  handleDeleteClick,
}: CarItemProps) {
  return (
    <li className='CarItem'>
      {car.name}
      <div className='ButtonDiv'>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Hide' : 'Show'}
        </button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
      {isActive && <span>{car.description}</span>}
    </li>
  );
}

export default CarItem;
