// import React from 'react'
import Logo from  '../assets/strakins_logo0.png';
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';



const Navbar = () => {
  return (
    <section className='flex items-center justify-between bg-slate-300 p-2 sm:p-4 '>
        <div >
            <Link to='/'> <img src={Logo} alt="Strakins Logo" className='h-12' /></Link>
        </div>
        <div className='flex justify-between items-center border-2 border-black p-1.5 rounded-lg   md:w-80'>
            <input type="text" placeholder='Search....' className='bg-inherit outline-none' />
            <FaSearch className=''/>
        </div>
        <div className='block sm:hidden'>
            < FiMenu />
        </div>
        <div className='hidden md:block'>
            <NavLink to='/' className='mx-3 text-lg'>Home</NavLink>
            <NavLink to='/about' className='mx-3 text-lg'>About</NavLink>
            <NavLink to='/profile' className='mx-3 text-lg'>Profile</NavLink>
            <NavLink to='/login' className='mx-3 text-lg'>Login</NavLink>
        </div>
    </section>
  )
}

export default Navbar