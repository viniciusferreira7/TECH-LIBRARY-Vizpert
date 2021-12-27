import './App.css';
import Wall from './components/Wall';
import Logo from './components/Logo';
import Clock from './components/Clock';
import Bookcase from './components/Bookcase';
import Lady from './components/Lady';
import Floor from './components/Floor';

function App() {

  return (

    <div className="App">
      <Wall/>
      <Logo/>
      <Clock/>
      <Bookcase/> 
      <Lady/>   
      <Floor/>
    </div>
  );
}

export default App;