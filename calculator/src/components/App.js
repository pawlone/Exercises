import Container from 'react-bootstrap/Container';
import OutputScreenRow from './outputScreenRow';
import OutputScreen from './outputScreen';
import CalculatorButton from './calculatorButton';

function App() {
  return (
    <>
      <Container className='mt-5'>
          <OutputScreen>
            <OutputScreenRow />
            <OutputScreenRow />
          </OutputScreen>
      </Container>


    </>
  );
}

export default App;
