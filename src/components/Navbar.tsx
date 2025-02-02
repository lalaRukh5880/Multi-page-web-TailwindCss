import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <header className="text-white bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Flower Shop</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="home" className="mr-5 hover:text-red-900">Home</Link>
      <Link href="about" className="mr-5 hover:text-red-900">About</Link>
      <Link href="flowers"className="mr-5 hover:text-red-900">Flowers</Link>
      <Link href="contact"className="mr-5 hover:text-red-900">Contact</Link>
    </nav>
    
    <FaCartShopping className="w-6 h-6" />
  </div>
</header>

      
    </div>
  )
}

export default Navbar
