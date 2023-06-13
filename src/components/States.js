import React from 'react'

const States = ({states}) => {

  console.log('helooooo');
    


  
    return (
      <div>
      {states.map((state) => {
        return (
      <div className="bg-success text-white">
        {console.log('helooo3')}
        <h1>state: {state.name}</h1>
        <h2>language: {state.language}</h2>
        <h3>population: {state.population}</h3>
      </div>
        )
    })}
    </div>
    ); 
 
  


}

export default States;