import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((res) => res.text())
      .then((data) => setStatus(data))
      .catch(() => setStatus('Error'));
  }, []);

  return (
    <>
      <h1>Health status: {status}</h1>
    </>
  );
}

export default App;