import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Group 33092.png'

const Navbar = () => {
    const menuItems = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/about'>Our Protfolio</Link></li>
    <li><Link to='/appoinment'>Our Team</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
   
    {/* {
      user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }
    {

    user ? <li><button onClick={logout}>Sign out</button></li> : <li><Link to='/login'>Login</Link></li>
    } */}
  </>
  return (
      <div className="navbar bg-base-100 text-xl px-8 sticky top-0 z-10">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to='/home' className="btn btn-ghost normal-case text-xl"><img className=' w-32' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}   
          </ul>
        </div>
        <li><Link to='/contact'><button className='btn btn-primary'>Login</button> </Link> </li>
      </div>
    );
};

export default Navbar;