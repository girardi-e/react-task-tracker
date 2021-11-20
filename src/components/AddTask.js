import {useState} from 'react'


const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => { 

    e.preventDefault()

    if(!text) { 
      alert('Please add a task!')
      return
    }

    //add new Task
    onAdd({text, day, reminder})

    //Clear the form
    setText('')
    setDay('')
    setReminder(false)
  } 

  return (
    <div className='w-full max-w-sm'>

      <form className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4' 
            onSubmit={onSubmit}
      >

        <div className='mb-4'>
          <label className='block text-gray-700 text-md font-bold mb-2'>
            Task
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700      leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={ (event) => setText(event.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-md font-bold mb-2'>
            Day & Time
          </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Add Day & Time'
              value={day}
              onChange={ (event) => setDay(event.target.value)}
            />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-md font-bold mb-2'>
            Set Reminder
          </label>
          <input
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={ (event) => setReminder(event.currentTarget.checked)}
          />
        </div>

        <div className='flex items-center justify-between'>
          <input type='submit' value='Save Task' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' />
        </div>
      </form>
    </div>
  )
}

export default AddTask
