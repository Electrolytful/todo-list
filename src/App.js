import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState(0);


  const increaseAge = () => {
    setAge(age + 1);
  }

  const resetAge = () => {
    setAge(0);
  }

  return (
    <div className ="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={resetAge}>Reset Age</button>
    </div>
  );
}



export default App;
