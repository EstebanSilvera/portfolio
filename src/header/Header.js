import React from 'react'
import { useState, useEffect } from 'react';
import { TbHexagonLetterE } from "react-icons/tb";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <nav className="m-4">
                <div className="container mx-auto md:flex md:justify-between md:items-center">

                    {isMobile ?
                        <div className={`text-white hidden`}>
                            <h1 className="text-2xl font-bold">Mi Sitio</h1>
                        </div>
                        :
                        <div className={`text-white block`}>
                            <h1 className="text-2xl font-bold"><TbHexagonLetterE className='size-16 ' /></h1>
                        </div>

                    }


                    <div className="md:hidden flex justify-between items-center">

                        <div className="text-white">
                            <h1 className="text-2xl font-bold"><TbHexagonLetterE className='size-10' /></h1>
                        </div>

                        <button
                            onClick={toggleNavbar}
                            className="text-white focus:outline-none "
                        >
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`md:flex md:items-center ${isOpen ? 'block ' : 'hidden'} `} >

                        <div className={`text-xl flex ${isOpen ? 'flex-col' : ''}  items-center justify-center`}>

                            <a href='/' className="text-white hover:text-gray-400 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline">
                                Home
                            </a>

                            <a
                                href="#"
                                className="text-white hover:text-gray-400 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline"
                            >
                                about me
                            </a>
                            <a
                                href="/repositories"
                                className="text-white hover:text-gray-400 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline"
                            >
                                Repositories
                            </a>

                            <svg class="animate-bounce w-6 h-6 ">
                            </svg>

                        </div>


                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header