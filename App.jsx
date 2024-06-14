import React from 'react'
// import ParentClass from './componants/Class/ParentClass';
import Parent from './componants/Class/functional/Parent';


const App = () => {
  return (
    <>
      <div className="container">
        <ParentClass />     { /* if use class */ }
        {/* <Parent /> */}  { /* if use fun. componants */ }
      </div>
    </>
  )
}

export default App;