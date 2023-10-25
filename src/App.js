import { useState } from 'react';
import './App.css';
import Button from './componenst/Button';
import Counter from './componenst/Counter';

const texts = [
  'Button1',
  'Button2',
  'Button3',
  'Button4',
  'Buttonadd',
  'ButtonExra',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        console.log(index);
        return <Button onClick={incrementCounter} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
