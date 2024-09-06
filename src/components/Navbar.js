import React, { useState } from 'react';
import resume from "./../../src/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-5 fixed top-0 left-0 w-full z-50 shadow-md">
        <section className="flex flex-row justify-between">

            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row'>
                    <div className='text-lg uppercase text-start'>
                        <a href='#'>
                            <span>Magdalena chubwa</span>
                        </a>
                    </div>
                    
                </div>
                <div className='flex flex-row text-lg gap-6 items-center'>
                    <div className='hidden md:block space-x-3 '>
                        <a href='#About'>
                            <span className='hover:border-b-2 hover:border-rose-600 transition ease-out duration-500 rounded-sm cursor-pointer p-2 px-3'>About</span>
                        </a>
                        <a href='#Service'>
                            <span className='hover:border-b-2 hover:border-rose-600 transition ease-out duration-500 rounded-sm cursor-pointer p-2 px-3'>Services</span>
                        </a>
                        <a href='#Contact'>
                            <span className='hover:border-b-2 hover:border-rose-600 transition ease-out duration-500 rounded-sm cursor-pointer p-2 px-3'>Contacts</span>
                        </a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <a href={resume} download={"Paulo Nkelego Resume"}>
                        <button className='bg-rose-600 w-32 rounded-sm h-10 text-white transition ease-out duration-500 hover:bg-black'>Download CV</button>
                    </a>
                </div>
            </div>

            {/* navbar in a mobile screen */}
            <div>
                <button 
                className="md:hidden text-darkblue focus:outline-none" 
                onClick={toggleNavbar}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                        />
                    </svg>
                </button>
            </div>
        </section>

        {isOpen && (
            <div className="md:hidden mt-4 space-y-2 text-black">
                <a href="#About" className="block hover:bg-rose-600 hover:text-white p-2 rounded">About</a>
                <a href="#Service" className="block hover:bg-rose-600 hover:text-white p-2 rounded">Services</a>
                <a href="#Contact" className="block hover:bg-rose-600 hover:text-white p-2 rounded">Contact</a>

                
            </div>
        )}
    </nav>
  );
};

export default Navbar;
