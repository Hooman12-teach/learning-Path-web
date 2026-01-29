import { useState } from 'react';
import StudentCard from './StudentCard';
import './Task1.css';

const Task1 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const students = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      rollNumber: 'CS001',
      batch: '2023',
      favoriteLanguage: 'JavaScript'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      rollNumber: 'CS002',
      batch: '2023',
      favoriteLanguage: 'Python'
    },
    {
      id: 3,
      name: 'Ali Raza',
      rollNumber: 'CS003',
      batch: '2023',
      favoriteLanguage: 'React'
    },
    {
      id: 4,
      name: 'Sarah Ahmed',
      rollNumber: 'CS004',
      batch: '2023',
      favoriteLanguage: 'TypeScript'
    }
  ];

  return (
    <div className={`task1-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="task1-header">
        <h1>Task 1: React Playground App</h1>
        <button 
          className="theme-toggle-btn"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      
      <div className="cards-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            rollNumber={student.rollNumber}
            batch={student.batch}
            favoriteLanguage={student.favoriteLanguage}
            isDark={isDarkTheme}
          />
        ))}
      </div>
    </div>
  );
};

export default Task1;
