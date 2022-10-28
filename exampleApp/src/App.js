import './App.scss';
import CustomForm from './components/forms/CustomForm';
import NameSection from './components/classes/NameSection';
import Counter from './components/stateful/Counter';
import Profile from './components/stateful/Profile';
import Weather from './components/stateful/Weather';
import Generator from './components/loremipsum/Generator';
import VocalCounter from './components/vocalCounter/vocalCounter';
import BoxChangeColor from './components/boxChangeColor/boxChangeColor';
import AddListItem from './components/addListItem/addListItem';

function App() {
  return (
    <>
      {/* <CustomForm></CustomForm>
      <NameSection name="Pippo Pluto"></NameSection>
      <Counter></Counter>
      <Profile></Profile>
      <Weather temperatures={[18, 11, 24, 34, 13, 11, 20]} day={{alias:"Monday", weekDay: 1}}/> */}
      {/* <VocalCounter></VocalCounter> */}
      <AddListItem></AddListItem>

    </>
  );
}

export default App;
