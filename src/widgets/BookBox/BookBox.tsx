import { useState } from 'react';
import './BookBox.scss';
// import BookCard from './BookCard/BookCard';

type Books = { title: string; image: string; author: string };

const booksList = [
  {
    title: 'Väninnorna på Nordiska Kompaniet',
    image:
      'https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg',
    author: 'Ruth Kvarnström-Jones',
  },
];

function BookBox() {
  const [books, setBooks] = useState<Books[]>(booksList);
  return (
    <>
      <div className='BookBox'>
        <ul className='BookCard'>
          {books.map((book) => (
            <>
              <h2>{book.title}</h2>
              <img src={book.image} alt={book.title} />
              <h3>Author:</h3>
              <p>{book.author}</p>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BookBox;
