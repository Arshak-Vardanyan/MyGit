
import './App.css';
import { useState } from 'react';
import { Home } from './Home';


const initialBooks = [
  {id: 1,title: "Title 1",description: "Description 1"},
  {id: 2,title: "Title 2",description: "Description 2"},
  {id: 3,title: "Title 3",description: "Description 3"},
]

function App() {
  const [books,setBooks] = useState(initialBooks);
 

  const addBook = (params) => {
    setBooks((prevState) => [...prevState,params])
  }
  const name = "Arshak";


  return (
      <Home  books = {books} addBook = {addBook}> 
        <div className='parent'>
          {
            books.map(book => {
              return (
                <div className='child' key={book.id}>
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                </div>
              )
            })
          }
        </div>

      </Home>
  );
}

export default App;
