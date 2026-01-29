import { useState } from 'react';
import './Task4.css';

const Task4 = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="task4-container">
      <div className="todo-card">
        <h1>Task 4: Todo App with Rules</h1>

        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task..."
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-btn">
            ➕ Add Task
          </button>
        </div>

        <div className="stats-section">
          <div className="stat">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{totalTasks}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Completed</span>
            <span className="stat-value completed">{completedTasks}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Pending</span>
            <span className="stat-value pending">{totalTasks - completedTasks}</span>
          </div>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>📝 No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-checkbox-group">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                    className="task-checkbox"
                  />
                  <span className="task-text">{task.text}</span>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="delete-btn"
                  title="Delete task"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        {tasks.length > 0 && completedTasks === totalTasks && (
          <div className="celebration">
            <p>🎉 All tasks completed! Great job! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task4;
