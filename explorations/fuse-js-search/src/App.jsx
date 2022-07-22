import DisplayItems from './components/DisplayItems';
import Search from './components/Search';
import INPUT from './constants/input';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fuse.js react search with lodash/debounce</h1>
      <DisplayItems input={INPUT} />
      <Search input={INPUT} />
    </div>
  );
}

export default App;
