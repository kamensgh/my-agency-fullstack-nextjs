import React from 'react'
import Links from './links/Links'

const Navbar = () => {
  return (
    <>
      <header className="bg-teal-400">
        <nav className="flex justify-between w-full bg-purple-500 text-white p-4">
          <a href="#">
            <span className="font-semibold text-xl tracking-tight">Title</span>
          </a>
          <div className="md:items-center md:w-auto flex">
            <div className="md:flex hidden">
             <Links/>
            </div>
            <div className="flex text-sm" v-else="">
              <a
                className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
                href="#"
              >
                Login
              </a>
              <a
                className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600"
                href="#"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar