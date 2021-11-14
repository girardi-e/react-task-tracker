import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="bg-gray-100 text-black m-2 py-5 px-10 cursor-pointer">
      <h3 className="flex align-center justify-between">
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}/>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
