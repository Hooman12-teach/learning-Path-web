import { useState } from 'react';
import './Task2.css';

const Task2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const handleReset = () => setCount(0);

  const getEmoji = () => {
    if (count === 0) return '😴';
    if (count <= 3) return '😐';
    if (count <= 6) return '🙂';
    if (count <= 9) return '😊';
    if (count >= 10) return '🎉';
  };

  return (
    <div className="task2-container">
      <div className="counter-card">
        <h1>Task 2: Emoji Counter Game</h1>
        
        <div className="emoji-display">
          <span className="emoji">{getEmoji()}</span>
          <span className="count">{count}</span>
        </div>

        <div className="button-group">
          <button className="btn btn-decrease" onClick={handleDecrease}>
            ➖ Decrease
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            🔄 Reset
          </button>
          <button className="btn btn-increase" onClick={handleIncrease}>
            ➕ Increase
          </button>
        </div>

        {count >= 10 && (
          <div className="celebration-message">
            <p>🎊 Amazing! You've reached 10! Keep going! 🎊</p>
          </div>
        )}

        <div className="counter-info">
          <p>Current Count: <strong>{count}</strong></p>
          <p>Counter cannot go below 0</p>
        </div>
      </div>
    </div>
  );
};

export default Task2;
