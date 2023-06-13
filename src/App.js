
import './App.css';
import States from './components/States';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  

  var states=[
    {name:'kerala',language:'Malayalam',population:1000},
    {name:'Tamilnadu',language:'Tamil',population:2000},
    {name:'Karnataka',language:'kannada',population:3000},
    {name:'Andrapradesh',language:'Hindi',population:4000},
    {name:'Himchalpradesh',language:'ethooo',population:5000}
    


  ]
 
  return (

  
    <div className="App">
    <Container>
    
   <States states={states}/>
  
    </Container>
    </div>
  

  );
}



export default App;
