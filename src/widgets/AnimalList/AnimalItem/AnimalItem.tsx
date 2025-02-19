type AnimalItemProps = {
  animal: string;
};

function AnimalItem({ animal }: AnimalItemProps) {
  return <li>{animal}</li>;
}

export default AnimalItem;
