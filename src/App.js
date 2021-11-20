import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( task =>
        task.id === id
          ? {...task, reminder: !task.reminder }
          : task
      )
    )
  }

  //Add Task
  const addTask = (task) => {
    console.log(task);
  }


  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto my-5 py-3 h-auto
                    border-4 border-solid border-white">

      <Header />

      <AddTask onAdd={addTask}/>

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder} />
                        : 'No tasks to show'}

    </div>
  );
}

export default App;
