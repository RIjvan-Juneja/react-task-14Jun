import React, { useEffect, useState } from 'react'
import ChildOne from './ChildOne'

const Parent = () => {
  const [ parentFlag, setParentFlag ] = useState(false); 
  const [ counter, setCounter ] = useState(5); 

  const handleCounter = () => {
    setCounter(counter+ 1)
  }
  const handleClick = () => {
    setParentFlag(!parentFlag)
    handleCounter()
  }

  useEffect(()=>{
    if(counter == 0){
    setCounter(counter+ 1)

    }
    setParentFlag(true);

    const timer = setTimeout(()=> setParentFlag(false),300 )
    return () => clearTimeout(timer)
   
  },[counter])

  return (
    <>
    <div className={ parentFlag? 'box active' : 'box' } onClick={handleClick}>
      <h2>Parent</h2>
    </div>
      <ChildOne counter = {counter} handleCounter = { handleCounter } parentFlag = {parentFlag} />
    </>
  )
}

export default Parent