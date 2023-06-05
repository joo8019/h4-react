import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='head'>
        <Link to='/' className='tool'>Home</Link>
        <Link to='/student' className='tool'>student</Link>
        <Link to='/contactus' className='tool'>contactus</Link>
    </div>
  )
}

export default Navbar;