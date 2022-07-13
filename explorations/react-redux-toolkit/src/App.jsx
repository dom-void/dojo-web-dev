import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  );
}

export default App;
