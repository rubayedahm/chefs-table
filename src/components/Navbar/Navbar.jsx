import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-0 w-[90%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><a className='text-[#150B2BB0]'>Home</a></li>
      <li><a className='text-[#150B2BB0]'>Recipes</a></li>
      <li><a className='text-[#150B2BB0]'>About</a></li>
      <li><a className='text-[#150B2BB0]'>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-[#150B2BB0]'>Home</a></li>
      <li><a className='text-[#150B2BB0]'>Recipes</a></li>
      <li><a className='text-[#150B2BB0]'>About</a></li>
      <li><a className='text-[#150B2BB0]'>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto p-4 h-10 mr-3 rounded-full bg-[#150B2B0D]" />
    </div>
    <div className='text-2xl bg-[#0BE58A] rounded-full p-2'>
    <CgProfile />
    </div>
  </div>
</div>
    );
};

export default Navbar;