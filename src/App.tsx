import './App.css';
import { Stars } from './components/stars/Stars';

function App() {
  let validCount: number | string = 4
  validCount = typeof validCount === 'number' && validCount > 0 && validCount < 6 ? validCount : 1;
  return (
    <div className="App">
      <Stars count={validCount}/>
    </div>
  );
}

export default App;
