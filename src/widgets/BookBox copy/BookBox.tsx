import React, { useState } from 'react';
import BookForm from "./BookFom/BookForm"; 

interface Book {
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
}

const BookBox2: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  // Hantera bokinlämning från BookForm-komponenten
  const handleBookSubmit = (book: Book) => {
    setBooks([...books, book]); // Lägg till den nya boken i listan
  };

  return (
    <div>
      <h1>Books📖</h1>
      <BookForm onSubmit={handleBookSubmit} /> 
      <h3>Book List</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.description}</p>
            <img src={book.coverImage} alt={`${book.title} cover`} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookBox2;

