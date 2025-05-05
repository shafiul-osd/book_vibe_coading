import React, { useEffect, useState } from 'react';

const Listbook = () => {
  const [readingList, setReadingList] = useState([]); 

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('readingList')) || [];
   
    setReadingList(savedBooks);
  }, []);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {readingList.map(book => (
        <div key={book.bookId} className="border p-4 rounded-lg">
          <img 
            src={book.image} 
            alt={book.bookName}
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="font-bold">{book.bookName}</h3>
          <p className="text-gray-600">By: {book.author}</p>
          <p className="text-sm">Pages: {book.totalPages}</p>
        </div>
      ))}
    </div>
  );
};

export default Listbook;