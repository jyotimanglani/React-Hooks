import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <h1>useEffect hook</h1>
        {/* <HookCounterOne/> */}
        {/* <HookMouse/> */}
        <MouseContainer/>
    </div>
  );
}

export default App;
