
import { NavLink, Outlet } from 'react-router'
import './App.css'
import { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function App() {

  const [open,isOpen]=useState(false)
 

  return (
    <>
     <div className='flex justify-between p-6 items-center'>
        <div className=''>
          <h2 className='font-bold text-2xl'>Book Vibe</h2>
          </div>

        {/* aypart ta extra vabe korte hossce mobile device er jonno responsive the navbar */}

        <div className='md:hidden order-1'>
          <button onClick={()=>isOpen(!open)}>

            {
              open ? <RxCross2 className='w-6 h-6 text-gray-700'></RxCross2> : <MdMenu className='w-6 h-6 text-gray-700'></MdMenu>
            }

          </button>
        </div>


        <div className={`flex-col md:flex md:flex-row gap-4 absolute md:static top-16 left-0 bg-white w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none z-50  ${open ?"flex":"hidden"}`}>
            <NavLink to="/" className={({isActive})=> isActive ? "text-emerald-500 font-bold":""}>Home</NavLink>

            <NavLink to="/listedbooks" className={
              ({isActive})=> isActive ? "text-emerald-500 font-bold":""
            }>ListedBooks</NavLink>

            <NavLink to="/pagestoread" className={
              ({isActive})=> isActive ? "text-emerald-500 font-bold" : ""
            }>Pages To Read</NavLink>

            <NavLink to="/contact" className={
              ({isActive})=> isActive ? "text-emerald-500 font-bold" :""
            }>Contact</NavLink>

            <NavLink to="/about" className={
              ({isActive})=> isActive ? "text-emerald-500 font-bold":""
            }>About</NavLink>

        </div>
        <div className='flex gap-2 mt-4 md:mt-0'>
          <button className='bg-[#23BE0A] p-2 text-white rounded-lg'>Sign In</button>
          <button className='bg-[#59C6D2] p-2 text-white rounded-lg'>Sign Up</button>
        </div>
     </div>
     
     <Outlet></Outlet>
     <footer>

     </footer>
    </>
  )
}

export default App
