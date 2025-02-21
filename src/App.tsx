import './App.scss';
import AnimalList from './widgets/AnimalList/AnimalList';
import BookBox2 from './widgets/BookBox copy/BookBox';
import BookBox from './widgets/BookBox/BookBox';
import CarList from './widgets/CarList/CarList';

function App() {
  return (
    <>
      <h1>Parent-Child Mini Project</h1>
      <BookBox />
      <CarList />
      <AnimalList />
      <BookBox2/>
    </>
  );
}

export default App;
