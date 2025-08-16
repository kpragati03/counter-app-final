import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(() => {
    // localStorage se initial value load karte hain
    const savedCount = localStorage.getItem('counterCount');
    return savedCount !== null ? Number(savedCount) : 0;
  });

  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  // useEffect hook ka use state ko localStorage mein save karne ke liye
  useEffect(() => {
    localStorage.setItem('counterCount', count);
  }, [count]);

  const minCount = allowNegative ? -10 : 0;
  const maxCount = 100;

  const isIncrementDisabled = count >= maxCount;
  const isDecrementDisabled = count <= minCount;

  const handleIncrement = () => {
    if (!isIncrementDisabled) {
      setCount(count + step);
    }
  };

  const handleDecrement = () => {
    if (!isDecrementDisabled) {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter-container">
      <h1 style={{ color: count > 0 ? '#28a745' : count < 0 ? '#dc3545' : '#007bff' }}>Counter App</h1>
      <p>Current Count: {count}</p>
      
      <div className="controls">
        <label>
          Step Size:
          <input 
            type="number" 
            value={step} 
            onChange={(e) => setStep(Number(e.target.value))} 
            min="1"
          />
        </label>
        
        <label>
          <input 
            type="checkbox" 
            checked={allowNegative}
            onChange={(e) => setAllowNegative(e.target.checked)}
          />
          Allow Negative Values
        </label>
      </div>

      <div className="buttons-container">
        <button 
          onClick={handleIncrement}
          disabled={isIncrementDisabled}
        >
          Increment
        </button>
        <button 
          onClick={handleDecrement}
          disabled={isDecrementDisabled}
        >
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;