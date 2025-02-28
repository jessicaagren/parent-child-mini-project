import './App.scss';
import AnimalList from './widgets/AnimalList/AnimalList';
import ASOIAFCharacterCard from './widgets/ASOIAFCharacterCard/ASOIAFCharacterCard';
// import BookBox2 from './widgets/BookBox copy/BookBox';
import BookBox from './widgets/BookBox/BookBox';
import CarList from './widgets/CarList/CarList';
import ChooseAColorBox from './widgets/ChooseAColor/ChooseAColorBox/ChooseAColorBox';

function App() {
  return (
    <>
      <h1>Parent-Child Mini Project</h1>
      <BookBox />
      <CarList />
      <AnimalList />
      {/* <BookBox2/> */}
      <ChooseAColorBox />
      <ASOIAFCharacterCard />
    </>
  );
}

export default App;
