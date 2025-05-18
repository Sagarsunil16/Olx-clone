import React, { useCallback, useState } from 'react'

const ChildComponenet = ({increment})=>{
    return (
        <button onClick={increment}>increment</button>
    )
}
const ParentComponent = () => {
    const [count,setCount] = (0)
    const [clickMe,setClickMe] =useState(false)
    const handleClick=(e)=>{
        setClickMe(!clickMe)
    }
    const increment = useCallback(()=>setCount((prev)=>prev+1),[count])
  return (
    <div>
      <h1>Count:{count}</h1>
      <ChildComponenet increment ={increment} />
        <button onClick={handleClick}>{clickMe?"click":"clicked"}</button>
    </div>
  )
}

export default ParentComponent
