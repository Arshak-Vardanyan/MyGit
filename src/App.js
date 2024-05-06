
import { useState } from 'react';
import './App.css';

const initialBook = [
  {id:1, title: "Title 1",description:"Description 1"},
  {id:2, title: "Title 2",description:"Description 2"},
  {id:3, title: "Title 3",description:"Description 3"},
  {id:4, title: "Title 4",description:"Description 4"},
]
const initialNumber = 0
function App() {
 const [value,setValue] = useState(initialNumber)
 console.log(value);
  return (
  <>
    <div className='parent'>
      {value}
      
      <button onClick={()=>{
        setValue((prevState) => prevState + 1)
        
      }}>+</button>

      <button onClick={()=>{
        setValue((prevState) => prevState - 1)
        
      }}>-</button>

      <button onClick={()=>{
        setValue(initialNumber)
        
      }}>avart</button>

    </div>
  </>
  );
}

export default App;
