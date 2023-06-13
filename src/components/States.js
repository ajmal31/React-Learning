import React from 'react'

const States = ({states}) => {

  console.log('helooooo');
    


  let number=1
    return (
     <div>
      
     { number > 0 ? (<h1>positive</h1>): number<0 ?(<h1>negative</h1>):(<h1>Zero</h1>) }
    
    
     </div>
    ); 
 
  


}

export default States;