import React, { useEffect, useMemo, useState } from 'react'
import ChildThree from './ChildThree';

const ChildTwo = ({counter, handleCounter}) => {

  //  let a =  useMemo(()=> {
  //    console.log("hello");
  //    return 5555  * 1
  //  },[]);
  let a = 555*2;
   console.log(a,"a");

  return (
    <>
      <div className='box'>ChildTwo : {counter}</div>
      < ChildThree  />
    </>
  )
}

export default ChildTwo