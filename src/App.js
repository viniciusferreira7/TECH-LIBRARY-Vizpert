import './App.css';
import Floor from './components/Floor';
import Wall from './components/Wall';
import Logo from './components/Logo';
import Clock from './components/Clock';
import Lady from './components/Lady';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Wall/>
      <Floor/>
      <Logo/>
      <Clock/>
      <Lady/>
      <Board/>
    </div>
  );
}

export default App;