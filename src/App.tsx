import './App.scss';
import Addition from './components/Addition/Addition';
import ChangeText from './components/ChangeText/ChangeText';
import TextList from './components/TextList/TextList';
import AnimalList from './widgets/AnimalList/AnimalList';
import {
  ASOIAFCharacterCard,
  DisplayASOIAFCharacterCard,
} from './widgets/ASOIAFCharacterCard/ASOIAFCharacterCard';
// import BookBox2 from './widgets/BookBox copy/BookBox';
import BookBox from './widgets/BookBox/BookBox';
import CarList from './widgets/CarList/CarList';
import ChooseAColorBox from './widgets/ChooseAColor/ChooseAColorBox/ChooseAColorBox';
import { LastFMArtistCard } from './widgets/LastFMArtistCard/LastFMArtistCard';

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
      <DisplayASOIAFCharacterCard />
      <LastFMArtistCard />
      <ChangeText />
      <Addition />
      <TextList />
    </>
  );
}

export default App;
