import React,{useEffect, useState} from 'react'
import Task from './Task'

const Page = () => {
  const initialArray =localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
  const [task,setTask]=useState(initialArray);
  const [title,setTitle]=useState("");
  const [description,setDesription]=useState("");
  const changeTitle =(e)=>{
      setTitle(e.target.value)
  }
  const changeDescription =(e)=>{
      setDesription(e.target.value)
  }
  console.log(title,description)
  const submitHandler=(e)=>{
      e.preventDefault();
      setTask([...task,{title,description}]);
  }
  // delete
  
  const deleteTask=(index)=>{
    const filteredArr= task.filter((val,i)=>{
      return i!==index;
    })
    setTask(filteredArr);
    console.log(filteredArr)
  }
  useEffect(() => {
    localStorage.setItem("task",JSON.stringify(task));
  }, [task]);
  

  return (
    <div>
      <h1 className="text-center mt-3">Add Your Daily Routine</h1>
      <div className="container mt-5">
      <form onSubmit={submitHandler} >
        <label htmlFor="inputTitle" className="form-label">Title</label>
        <input type="text" id="inputTitle" className="form-control mb-2 border border-success" aria-labelledby="passwordHelpBlock" onChange={changeTitle} value={title}/>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Description</label>
        <textarea className="form-control border border-success"  id="myBox" rows="4" onChange={changeDescription} value={description} ></textarea>
        </div>
        <button type="submit" className=" d-grid gap-2 col-6 mx-auto btn btn-outline-success">ADD</button>
      </form>
      </div>

      {task.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description} index={index} deleteTask={deleteTask}/>
      ))}

    </div>
  )
}

export default Page
