import React from 'react'
import { Outlet ,Link} from "react-router-dom";
import {BsCart4} from 'react-icons/bs';

export default function Layout() {
  


  return (
    <>
      <div className='bg-black pb-5'>

        <ul className='flex justify-end gap-8 items-center pr-5 pt-4 text-white font-medium'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li className='text-5lg'><Link to="/Cart"><BsCart4/></Link></li>
        </ul>
      </div>
      <Outlet />
      
    </>
  )
}
