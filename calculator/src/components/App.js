import Container from 'react-bootstrap/Container';
import OutputScreenRow from './outputScreenRow';
import OutputScreen from './outputScreen';
import CalculatorKeypad from './calculatorKeypad';




function App() {
  return (
    <>
      <Container className='mt-5'>
          <OutputScreen>
            <OutputScreenRow />
            <OutputScreenRow />
          </OutputScreen>
          <CalculatorKeypad />
      </Container>


    </>
  );
}

export default App;
