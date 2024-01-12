import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="fixed  mx-2 bottom-0 left-0 w-full flex justify-center items-center">

                <div className='flex items-center bg-gradient-to-t from-gray-700 to-transparent py-2 px-48 rounded-lg'>

                    <a href="https://www.linkedin.com/in/esteban-silvera-540193263/" className="text-white hover:text-gray-300 px-8 ">
                        <FaLinkedin className='size-8'/>
                    </a>

                    <a href="https://github.com/EstebanSilvera" className="text-white hover:text-gray-300 px-8">
                        <FaGithub className='size-8' />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer