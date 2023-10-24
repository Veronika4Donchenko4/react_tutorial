import { useState } from 'react';
import './App.css';
import Button from './componenst/Button';
import Counter from './componenst/Counter';

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
    </div>
  );
}

export default App;
