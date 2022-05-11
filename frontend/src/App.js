import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from 'react';


const tasks_array = [
  {
      id:1,
      text: 'example task',
      day: '2020-05-04',
      reminder: false
  }
]
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(tasks_array)

  let url = process.env.DEV_API

  if(process.env.NODE_ENV !== 'development'){
    url = process.env.PROD_API
  }
  console.log(url)
  const loadTask = () =>{
    fetch('http://localhost:3000/tasks').then((res)=>res.json())
    .then((data)=>{
      console.log(url)
      console.log(data)
      setTasks(data)})
  }

  useEffect(loadTask,[])
  // Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id ===id? {...task, reminder:!task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):(
      'No Task To Show')}    
    </div>
  );
}


// Use class instead, import React required
// class App extends React.Component{
//   render(){
//     return <h1>Hellow from React</h1>
//   }
// }

export default App;
