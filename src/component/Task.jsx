import React from 'react'

const Task = ({title,description,deleteTask,index}) => {
  return (
    <div className="container position-relative mt-5 d-flex border border-success mb-3 rounded ">
        <div className='p-2 w-100'>
        <p>Title: {title}</p>
        <span>Description: {description}</span>
        </div>
        <button type="button" className="btn btn-outline-danger p-2 flex-shrink-1 m-1 rounded" onClick={()=>deleteTask(index)}>Delete</button>
    </div>
  )
}

export default Task
