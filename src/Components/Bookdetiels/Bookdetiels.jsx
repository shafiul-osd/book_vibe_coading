import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Bookdetiels = () => {

    const{bookId}=useParams();


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
    if(!book){
        return <p className="text-center mt-10">Loading book.... Not Found</p>
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
                    <button>Read</button>
                    <button className="bg-[#50B1C9] p-2 text-white">Wistlist</button>
                </div>
            </div>
        </div>
    );
};

export default Bookdetiels;