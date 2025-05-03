import { useEffect, useState } from "react";
import Book from "./Book/Book";


const Books = () => {

    const [books,setbook] = useState([])

    useEffect(()=>{
        fetch('Book.json')
        .then(res=>res.json())
        .then(data=> setbook(data))
    },[])

    return (
        <div>
           <div>
           <h2 className="text-center font-bold text-2xl">Books</h2>
           <p>{books.length}</p>
           </div>
           <div>
            {
                books.map(book=><Book book={book}key={book.id}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;