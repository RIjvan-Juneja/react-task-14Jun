import React, { useEffect, useState } from 'react'
import ChildTwo from './ChildTwo'

const ChildOne = ({ counter,parentFlag, handleCounter }) => {

  return (
    <>
    <div className={ parentFlag? 'box active' : 'box' }>ChildOne : {counter}</div>
      <ChildTwo counter = {counter}  />
    </>
  )
}

export default ChildOne