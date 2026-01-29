import { useEffect, useState } from 'react';
import './Task8.css';

const Task8 = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.jokes.one/joke');
      const data = await response.json();
      
      if (data.contents) {
        const jokeData = data.contents.jokes[0];
        setJoke({
          setup: jokeData.joke.split('\\n')[0],
          punchline: jokeData.joke.split('\\n')[1] || ''
        });
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke({
        setup: 'Why did the React component go to therapy?',
        punchline: 'Because it had too many issues to handle!'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="task8-container">
      <div className="joke-card">
        <h1>Task 8: Random Joke Generator</h1>
        
        <div className="joke-display">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading a joke...</p>
            </div>
          ) : joke ? (
            <>
              <div className="joke-setup">
                <p>{joke.setup}</p>
              </div>
              <div className="divider"></div>
              <div className="joke-punchline">
                <p>😄 {joke.punchline}</p>
              </div>
            </>
          ) : (
            <p>No joke loaded</p>
          )}
        </div>

        <button 
          className="fetch-btn"
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? '⏳ Loading...' : '😂 Get Another Joke'}
        </button>

        <p className="credit">Jokes provided by Jokes.one API</p>
      </div>
    </div>
  );
};

export default Task8;
