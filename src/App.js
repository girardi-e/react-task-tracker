import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState ([
  {
    id: 1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 3:00pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at kids School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Grocery Shopping',
    day: 'Feb 5th at 5:00pm',
    reminder: false,
  }
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto my-5 py-3 h-auto
                    border-4 border-solid border-white">
      <Header />
      <Tasks tasks={tasks} onDelete= {deleteTask} />
    </div>
  );
}

export default App;
