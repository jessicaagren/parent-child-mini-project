import { useState } from 'react';
import './BookBox.scss';

type Books = { title: string; image: string; author: string };

const booksList: Books[] = [
  {
    title: 'Väninnorna på Nordiska Kompaniet',
    image:
      'https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg',
    author: 'Ruth Kvarnström-Jones',
  },
];

function BookBox() {
  const [books, setBooks] = useState<Books[]>(booksList);

  const [newBook, setNewBook] = useState<Books>({
    title: '',
    image: '',
    author: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(newBook.image)
      ? newBook.image
      : 'https://placehold.co/100x150';
    // 'https://i1.sndcdn.com/artworks-C5HCDzneBiXIJflF-OjLhlA-t1080x1080.jpg';

    if (!newBook.title.trim()) return;
    setBooks([...books, { ...newBook, image: validImage }]);
    setNewBook({ title: '', image: '', author: '' });
  };

  const deleteAll = () => {
    setBooks([]);
  };

  return (
    <div className='BookBox'>
      <form className='BookForm' onSubmit={handleBookSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='image'>Image URL:</label>
        <input
          type='text'
          id='image'
          name='image'
          value={newBook.image}
          onChange={handleInputChange}
        />
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          id='author'
          name='author'
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type='submit'>Add Book</button>
        <button type='button' onClick={deleteAll}>
          Delete all
        </button>
      </form>

      <ul className='BookCardList'>
        {books.length > 0 ? (
          books.map((book, index) => (
            <li key={index} className='BookCard'>
              <h2>{book.title}</h2>
              <img src={book.image} alt={book.title} />
              <h3>Author:</h3>
              <p>{book.author}</p>
            </li>
          ))
        ) : (
          <p>Nothing to see here</p>
        )}
      </ul>
    </div>
  );
}

export default BookBox;
