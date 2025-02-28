import './BookForm.scss';

type BookFormProps = {
  newBook: { title: string; image: string; author: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  deleteAll: () => void;
};

function BookForm({
  newBook,
  handleChange,
  handleSubmit,
  deleteAll,
}: BookFormProps) {
  return (
    <form className='BookForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>
          <input
            type='text'
            id='title'
            name='title'
            value={newBook.title}
            onChange={handleChange}
            className='BookInput'
            placeholder='Title'
            required
          />
        </label>
        <label htmlFor='image'>
          <input
            type='text'
            id='image'
            name='image'
            value={newBook.image}
            onChange={handleChange}
            className='BookInput'
            placeholder='Image URL'
          />
        </label>
        <label htmlFor='author'>
          <input
            type='text'
            id='author'
            name='author'
            value={newBook.author}
            onChange={handleChange}
            className='BookInput'
            placeholder='Author'
          />
        </label>
      </div>
      <button type='submit'>Add Book</button>
      <button type='button' onClick={deleteAll}>
        Delete all
      </button>
    </form>
  );
}

export default BookForm;
