import { Link } from "react-router";
import { IoMdStarOutline } from "react-icons/io";


const Book = ({book}) => {
    

    const {bookName,image,author,category,rating} = book

    

    return (
        <div className="border border-gray-400 p-4 rounded-lg grid place-items-center">
         <Link to={`/book/${book.bookId}`}>
         <div>
            <img className="w-80 h-72 object-cover rounded-lg  bg-gray-200 p-10" src={image} alt="" />
         </div>
         <div className="flex gap-4 mt-4">
            <button className="bg-gray-100 text-[#23BE0A] rounded-2xl p-2">Young Adult</button>
            <button className="bg-gray-100 text-[#23BE0A] rounded-2xl p-2">Identity</button>
         </div>
         <div>
            <h2 className="font-bold text-2xl">{bookName}</h2>
            <p className="mt-2">By: {author}</p>
         </div>
         <div className="flex justify-between items-center mt-2">
            <div><p>{category}</p></div>
            <div className="flex items-center gap-2">
                <p>{rating}</p>
                <p><IoMdStarOutline></IoMdStarOutline></p>
            </div>
         </div>
         
         </Link>
        </div>
    );
};

export default Book;