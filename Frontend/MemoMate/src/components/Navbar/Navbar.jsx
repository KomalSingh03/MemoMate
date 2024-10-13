import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">

      <h2 className="text-xl font-medium text-black py-2"> MemoMate</h2>

      <div className="flex-grow flex justify-center space-x-6">
        <h2 className="text-xl font-medium text-black py-2">About</h2>
        <h2 className="text-xl font-medium text-black py-2">FAQs</h2>
      </div>

      <div className="flex space-x-6">
      <Link to="/login" className="text-xl font-medium text-black py-2">Login</Link>
      <Link to="/signUp" className="text-xl font-medium text-black py-2">Signup</Link>
      </div>

    </div>
    
  )
}

export default Navbar