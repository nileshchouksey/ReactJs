import React from 'react'

const App = () => 
  {

    const submitHandler=(e)=>{
      e.preventDefault()
      console.log("Form Submitted succesfully");
      
    }








  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter My Name' />
        <button >Submit</button>
         <button >Submit Now</button>
      </form>
      
    </div>
  )
}

export default App