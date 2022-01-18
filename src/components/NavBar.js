import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='flex justify-between items-centre h-16   text-black relative shadow-sm font-mono bg-gray-200'
        role='navigation'>
            <Link to='/' className='pl-8 p-5 text-black-300 bg-gray-200 '>While(!(succeed = try()))
            </Link>
            <div className='px-4 p-5 cursor-pointer md:hidden bg-gray-200'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 " 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round"
                 strokeLinejoin="round" 
                 strokeWidth={2}
                 d="M4 6h16M4 12h16M4 18h16" />
            </svg>


            </div>
            <div className='pr-8 p-5 bg-gray-200 md:block hidden'>
                <Link className='p-4 text-red-500' to="/">Home</Link>
                <Link className='p-4 text-red-500' to="/menu">Shopping</Link>
                <Link className='p-4 text-red-500' to="/about">About</Link>
                <Link className='p-4 text-red-500' to="/contacct">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar
