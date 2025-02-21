import './CarItem.scss';

type CarItemProps = {
  car: string;
  handleDeleteClick: () => void;
};

function CarItem({ car, handleDeleteClick }: CarItemProps) {
  return (
    <li className='CarItem'>
      {car} <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default CarItem;
