import React, { useState } from 'react'

const Home = () => {
    const [inputvalue,setValue]=useState(0)
    const changeHandler =(e)=>{
        setValue(e.target.value)
    }
    const decrement=()=>{
        setValue(inputvalue-1)
    }
    const increment=()=>{
        setValue(inputvalue+1)
    }
    const setstyle={
        padding:100,
        border:"2px solid green",
        row:10
    }
  return (
    <>
      <input type="text"
        value={inputvalue}
        onChange={changeHandler}
        style={setstyle}
      />
      <br/>
      <button style={{padding:15,margin:10}} onClick={decrement}>-</button>
      <button style={{padding:15,margin:10}} onClick={increment}>+</button>
    </>
  )
}

export default Home
