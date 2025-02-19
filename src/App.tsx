import './App.scss';
import AnimalList from './widgets/AnimalList/AnimalList';
import BookBox from './widgets/BookBox/BookBox';
import CarList from './widgets/CarList/CarList';

function App() {
  return (
    <>
      <h1>Parent-Child Mini Project</h1>
      {/* <BookBox /> */}
      <CarList />
      <AnimalList />
    </>
  );
}

export default App;
