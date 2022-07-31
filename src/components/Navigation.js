import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function Navigation() {
  return (
    <div>
      <ul>
        <li className='right bold'><Link to='/'>Siremar</Link>&nbsp;</li>
        <li className='left'><Link to='/contact'>Contact Us</Link>&nbsp;</li>
        <li className='left'><Link to='/about'>About Us</Link>&nbsp;</li>
        <li className='left'><Link to='/blog'>Blog</Link>&nbsp;</li>
        <li className='left'><Link to='/register'>Registration</Link>&nbsp;</li>
        <li className='left'><Link to='/login'>Login</Link>&nbsp;</li>
        <li className='left'><Link to='/service'>Services</Link>&nbsp;</li>
        <li className='left'><Link to='/home'>Home</Link>&nbsp;</li>
      </ul>
    </div>
  )
}

export default Navigation
