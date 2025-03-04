import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
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
        <InputField
          id='title'
          name='title'
          value={newBook.title}
          onChange={handleChange}
          placeholder='Title'
          required
        />
        <InputField
          id='image'
          name='image'
          value={newBook.image}
          onChange={handleChange}
          placeholder='Image URL'
        />
        <InputField
          id='author'
          name='author'
          value={newBook.author}
          onChange={handleChange}
          placeholder='Author'
          required
        />
      </div>
      <Button title='Add book' buttonType='submit' />
      <Button title='Delete all' clickFunction={deleteAll} />
    </form>
  );
}

export default BookForm;
