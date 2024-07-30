

export function Home({books,addBook,children}){
    console.log("books", books)
    console.log("children", children)
  
   return (
    <>
        {children }
                
            <button className='btn' onClick={() =>
            addBook({
                        id:books[books.length -1].id + 1,
                        title: `Title ${books[books.length -1].id + 1}`,
                        description: `description ${books[books.length -1].id + 1}`
                    })    
                    }
            > Add</button>
    </>
        
   )
}