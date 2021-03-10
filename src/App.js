import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go for a run',
      day: 'May 1st at 10:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctors appointment',
      day: 'Apr 5st at 9:45am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Vacation',
      day: 'June 15st at 8:00am',
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
