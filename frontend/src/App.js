import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from 'react';


const tasks_array = [
  {
      _id:1,
      text: 'example task',
      day: '2020-05-04',
      remainder: false
  }
]
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(tasks_array)

  let url = process.env.REACT_APP_DEV_API
  if (process.env.NODE_ENV !== 'development'){
    url = process.env.REACT_APP_PROD_API
  }

  const loadTask = () =>{
    fetch(url+'/tasks').then((res)=>res.json())
    .then((data)=>{
      console.log(url)
      setTasks(data)})
  }
  
  useEffect(loadTask,[])
  // Add Task
  const createTask = (task) =>{
    const requestBody = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        // text:task.text,
        // day:task.day,
        // remainder:task.remainder
        task
      )}
      
      fetch("http://localhost:5000/tasks", requestBody)
      .then((res) => res.json())
      .then((data)=>console.log(data))
      //.then(setRefresh(new Date()))
      .then(()=>loadTask())
    }

  const addTask = (task) =>{
    createTask(task)
    // const _id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {_id, ...task}
    // console.log(newTask)
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) =>{
    const requestBody = {
      method :"DELETE",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          _id: id
        }
      )
    };
    // console.log(id)

    fetch("http://localhost:5000/tasks", requestBody)
    .then((res)=>console.log(res))
    .then(()=>loadTask())
    //setTasks(tasks.filter((task)=>task._id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    // setTasks(tasks.map((task) => task._id ===id? {...task, remainder:!task.remainder} : task ))
    // console.log(tasks)
    const requestBody = {
      method :"PUT",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          _id: id
        }
      )
    };
    console.log(id)
    fetch("http://localhost:5000/tasks", requestBody)
    .then((res)=>console.log(res))
    .then(()=>loadTask())
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
