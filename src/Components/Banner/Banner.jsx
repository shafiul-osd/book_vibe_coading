import { useNavigate } from "react-router";
import booknavimg from "../Banner/bookshop.jpg"

const Banner = () => {

    const navigate = useNavigate()

    const handlenavigate = ()=>{
        navigate("/PagesToRead")
    }

    return (
        <div className="p-10">
            <div className="bg-[#f1eaead3] rounded-lg md:px-16 py-4 md:grid grid-cols-2 gap-2">
            <div className="col-span-1 py-10 px-6">
                <h2 className="text-[#131313] text-5xl font-bold">Books to freshen up your bookshelf</h2>
                <button onClick={handlenavigate} className="bg-[#23BE0A] rounded-lg p-4 text-white mt-4 ">View The List</button>
            </div>
           <div className="col-span-1 px-10 py-7">
           <img className="w-30% rounded-lg" src={booknavimg} alt="" />
           </div>
           
            
        </div>
        </div>
    );
};

export default Banner;