import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <h1>useEffect hook</h1>
        <HookCounterOne/>
        <HookMouse/>
    </div>
  );
}

export default App;
