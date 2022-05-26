import React from 'react'
import { FaTimes} from 'react-icons/fa'
// State pass down, action pass up
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.remainder ? 'reminder' : ''}`} onDoubleClick={() =>onToggle(task._id)}>
        <h3>
          {task.text} 
          <FaTimes style={{color:'red', cursor:'pointer'}} 
          onClick={() => {
          console.log(task)
          onDelete(task._id)}}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task