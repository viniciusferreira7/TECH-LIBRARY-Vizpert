import './App.css';
import bg_stripesSvg from './assets/bg_stripes.svg'
import Bookcase from './components/Bookcase';

function App() {
  return (
    <div className="App">
     <img id='bg_stripesId' src={bg_stripesSvg} alt="bg_stripes" />
     <Bookcase/>
    </div>
  );
}

export default App;
