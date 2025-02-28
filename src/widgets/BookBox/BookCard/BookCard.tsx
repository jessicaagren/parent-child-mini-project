import './BookCard.scss';

type BookFormProps = {
  newBook: { title: string; image: string; author: string };
};

function BookCard({ newBook }: BookFormProps) {
  return (
    <>
      <h2>{newBook.title}</h2>
      <img src={newBook.image} alt={newBook.title} />
      <h3>Author:</h3>
      <p>{newBook.author}</p>
    </>
  );
}

export default BookCard;
