import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";


const Bookdetiels = () => {

    const{bookId}=useParams();

    const navigate = useNavigate()


    const[book,setbook]=useState(null)

    useEffect(()=>{
        fetch('/Book.json')
        .then(res=>res.json())
        .then(data=>{
            
            const found = data.find(
                (item)=> item.bookId === Number(bookId)
            )
            setbook(found)
        })
    },[bookId])
  
    // deepseck theke implement korci aypart ta listedbook route a data add korar jonno

    
    const handleRead = () => {
        if (!book) return;
    
        try {
          const savedBooks = JSON.parse(localStorage.getItem('readingList')) || [];
          
          // চেক করুন বইটি আগে থেকে আছে কিনা
          if (savedBooks.some(b => b.bookId === book.bookId)) {
            toast.error("This book is already in your reading list");
            return;
          }
          
          // নতুন বইটি যোগ করুন
          const updatedBooks = [...savedBooks, book];
          localStorage.setItem('readingList', JSON.stringify(updatedBooks));
          
          toast.success("Book added to reading list!");
          navigate("/pagestoread/listbook");
        } catch (error) {
          toast.error("Failed to save book");
          console.error("Error saving to localStorage:", error);
        }
      };
    
      if (!book) {
        return <p className="text-center mt-10">Loading book.... Not Found</p>;
      }







    const{image,bookName,author,totalPages,tags,publisher,yearOfPublishing,rating,category,review}=book

    return (
        <div className="grid md:grid-cols-2 gap-4 p-10">
            <div className="bg-gray-200 rounded-lg">
            <img className="p-4 w-auto h-auto object-cover rounded-lg " src={image} alt="" />
            </div>
            <div>
                <div>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p>{review}</p>
                <p>#{tags}</p>
                
                <p>Number Of Pages: {totalPages}</p>
                <p>Publisher:{publisher}</p>
                <p>Year of Publishing:{yearOfPublishing}</p>
                <p>Rating:{rating}</p>
                </div>

                <div className="flex gap-4 items-center">
                    <button onClick={handleRead} className="border border-gray-200 p-2 bg-gray-300">Read</button>
                    <button className="bg-[#50B1C9] p-2 text-white">Wistlist</button>
                </div>
            </div>
        </div>
    );
};

export default Bookdetiels;