type CarItemProps = {
  car: string;
  handleDeleteClick: () => void;
};

function CarItem({ car, handleDeleteClick }: CarItemProps) {
  return (
    <li>
      {car} <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default CarItem;
