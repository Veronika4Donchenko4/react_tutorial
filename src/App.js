import { useState } from 'react';
import './App.css';
import Button from './componenst/Button';
import Counter from './componenst/Counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  const buttonReset = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <div>
        <button style={buttonStyle} onClick={buttonReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
