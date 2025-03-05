import { useState } from 'react';
import './BookBox.scss';
import BookForm from './BookFom/BookForm';
import BookCard from './BookCard/BookCard';
import GenericDiv from '../../components/GenericDiv/GenericDiv';

type Books = { title: string; image: string; author: string };

const booksList: Books[] = [
  //   {
  //     title: 'Väninnorna på Nordiska Kompaniet',
  //     image:
  //       'https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg',
  //     author: 'Ruth Kvarnström-Jones',
  //   },
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
    <GenericDiv className='BookBox'>
      <h2>Add books</h2>
      <BookForm
        newBook={newBook}
        handleChange={handleInputChange}
        handleSubmit={handleBookSubmit}
        deleteAll={deleteAll}
      />{' '}
      <ul className='BookCardList'>
        {books.length > 0 ? (
          books.map((book, index) => (
            <li key={index} className='BookCard'>
              <BookCard newBook={book} />
            </li>
          ))
        ) : (
          <p>Nothing to see here</p>
        )}
      </ul>
    </GenericDiv>
  );
}

export default BookBox;
