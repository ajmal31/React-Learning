import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

const clcikHandle=()=>{

  console.log('Dont touch Me')
}   
const doubleClick=(name)=>{

  alert('you double clicked me '+name)
}

const onchange = () => {
  alert('The onchange function clicked');
};
const mousehandle=() => {

  alert ('fuck you')
}

let [colour,setColour]= useState('Green')

const changeColour=() =>{

  setColour('red')
}

let [count,setCount]=useState(0)
let increment=()=>{
  setCount(count+1)
}
let decrement=()=>{

  setCount(count-1)
}

  return (
<>
<h1 className='bg-success text-white' > Learn React Events</h1>
 <button onClick={clcikHandle} className='btn btn-primary' >Click me</button>
 <h1 onDoubleClick={()=>doubleClick('ajmal')} className='btn btn-dark m-2' >Double Click</h1>
  <input  onChange={onchange} type='text' />
  {/* <h1 onMouseOver={mousehandle} >Dont touch me</h1> */}
  <h2>My favorite Colour is {colour}</h2>
  <button className='btn btn-danger' onClick={changeColour} >change colour</button>

  <br />
  <br />
  <h1>Counter {count}</h1>
  <br />
  <button className='btn btn-success m-2 ' onClick={increment} >+</button>
  <button className='btn btn-danger' onClick={decrement} >-</button>

</>
    
  )
} 

export default Header