import './StudentCard.css';

const StudentCard = ({ name, rollNumber, batch, favoriteLanguage, isDark = false }) => {
  return (
    <div className={`student-card ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="card-header">
        <h2>{name}</h2>
      </div>
      <div className="card-body">
        <p><strong>Roll Number:</strong> {rollNumber}</p>
        <p><strong>Batch:</strong> {batch}</p>
        <p><strong>Favorite Language:</strong> {favoriteLanguage}</p>
      </div>
    </div>
  );
};

export default StudentCard;
