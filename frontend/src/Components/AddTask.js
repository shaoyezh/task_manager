import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker';
import { format, parseISO } from 'date-fns';
import moment
 from 'moment';
import "react-datepicker/dist/react-datepicker.css";


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    // const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [date, setDate] = useState(new Date())

    const onSubmit = (e) =>{
        e.preventDefault()

        if (!text){
            alert('Please add a task')
            return
        }
        //const offset = date.getTimezoneOffset()
        //setDate(new Date(date.getTime() -(offset * 60 * 1000)))
        const day = date.toLocaleDateString("en-CA")
        onAdd({text, day, reminder})

        setText('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask