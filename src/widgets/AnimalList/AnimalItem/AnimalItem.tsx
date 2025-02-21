import './AnimalItem.scss';

type AnimalItemProps = {
  animal: string;
};

function AnimalItem({ animal }: AnimalItemProps) {
  return <li className='AnimalItem'>{animal}</li>;
}

export default AnimalItem;
