import React, { useState } from 'react';

interface Book {
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
}

const BookForm: React.FC<{ onSubmit: (book: Book) => void }> = ({ onSubmit }) => {
  const [book, setBook] = useState<Book>({
    title: '',
    author: '',
    genre: '',
    description: '',
    coverImage: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setBook((prevState) => ({
        ...prevState,
        coverImage: imageUrl
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(book); // Skicka boken vidare till föräldern (App)
    setBook({
      title: '',
      author: '',
      genre: '',
      description: '',
      coverImage: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titel:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={book.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={book.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="coverImage">Cover:</label>
        <input
          type="file"
          id="coverImage"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {book.coverImage && <img src={book.coverImage} alt="Cover" width="100" />}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
