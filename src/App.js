import './App.css';
import Floor from './components/Floor';
import Wall from './components/Wall';
import Logo from './components/Logo';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Wall/>
      <Floor/>
      <Logo/>
      <Clock/>
    </div>
  );
}

export default App;