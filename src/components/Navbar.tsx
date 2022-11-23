import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [ toggleSidebar, setToggleSidebar ] = useState(false);

  let activeClassName = 'text-gold font-bold text-base';
  const location = useLocation();
  
  return (
    <>
      <nav className='bg-blue-primary'>
        <div className='hidden md:flex md:container mx-auto justify-between items-center p-6'>
          <Link to="/" >
            <h1 className='text-xl text-white font-semibold'>Cerita Bahagia</h1>
          </Link>

          <ul className='flex justify-end gap-14 text-white font-medium'>
            <li>
              <HashLink 
                smooth
                to="/" 
                className={`${location.hash === '' ? activeClassName : 'hover:text-gold duration-300 text-base'}`}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth
                to="/#fitur" 
                className={`${location.hash === '#fitur' ? activeClassName : 'hover:text-gold duration-300 text-base'}`}
              >
                Fitur
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth
                to="/#fitur" 
                className={`${location.hash === '#fitur' ? activeClassName : 'hover:text-gold duration-300 text-base'}`}
              >
                Cerita
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth
                to="/#fitur" 
                className={`${location.hash === '#fitur' ? activeClassName : 'hover:text-gold duration-300 text-base'}`}
              >
                Portofolio
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth
                to="/#harga" 
                className={`${location.hash === '#harga' ? activeClassName : 'hover:text-gold duration-300 text-base'}`}
              >
                Harga
              </HashLink>
            </li>
          </ul>
        </div>

        <div className='md:hidden flex md:container mx-auto justify-between items-center p-6'>
          <Link to="/">
            <h1 className='text-xl text-white font-semibold'>Cerita Bahagia</h1>
          </Link>

          <button
            type="button"
            onClick={() => setToggleSidebar(true)}
            className="text-white"
          >
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
            </svg>
          </button>
        </div>
      </nav>

      {toggleSidebar && (
        <div className="fixed w-full bg-black h-screen overflow-y-auto shadow-md z-10 animate-slidein">
          <div className="absolute w-full flex justify-end items-center p-2">
            <button type="button" onClick={() => setToggleSidebar(false)}>
              <svg stroke="#000000" fill="#ffffff" strokeWidth="0" viewBox="0 0 1024 1024" fontSize="30" className="cursor-pointer text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z">
                </path>
              </svg>
            </button>
          </div>
      
          <div className="sidebar-body flex flex-col h-screen px-5 py-10">
            <ul>
              <li className="mt-2 text-center">
                <NavLink to='/' className="text-xl font-semibold text-white" >
                  HOME
                </NavLink>
              </li>
              
              <li className="mt-2 text-center">
                <NavLink to='/' className="text-xl font-semibold text-white" >
                  FITUR
                </NavLink>
              </li>

              <li className="mt-2 text-center">
                <NavLink to='/' className="text-xl font-semibold text-white" >
                  HARGA
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
