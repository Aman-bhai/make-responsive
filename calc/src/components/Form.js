import React from 'react'
const Form = () => {
  const handleClick = (e) => {
    console.log(e.target.name)
  }
  const handleChange=(e)=>{
    console.log(e.target.name)
  }
  return (
    <div className="FORM">
      <input type="number" onChange={handleChange} 
 name='number1' />  
      <input type="number" onChange={handleChange} 
 name='number2' />
      <div className="buttons row">
        <div className='col-md-3'><button onClick={handleClick}
          className='btn btn-primary'>Add </button></div>
        <div className='col-md-3'><button onClick={handleClick}
          className='btn btn-dark'>Sub </button></div>
        <div className='col-md-3'><button onClick={handleClick}
          className='btn btn-info'> Mult </button></div>
        <div className='col-md-3'><button onClick={handleClick}
          className='btn btn-secondary'> Div </button></div>
        <div className='col-md-3'></div></div>
    </div>
  )
}

export default Form
