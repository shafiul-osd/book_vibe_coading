import { Outlet } from "react-router";
import { Link } from "react-router";



const PagesToRead = () => {
    return (
        <div className="p-10">
         <div className="flex gap-4 ">
         <Link to={'listbook'}>Listbook</Link>
         <Link to={'wishlistbook'}>Wishlistbook</Link>
         </div>
         <Outlet></Outlet>

            
        </div>
    );
};

export default PagesToRead;