import React from 'react'
import gif from '../img/gif-vector2.gif'
import gifvector from '../img/gif-vector.gif'
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Link } from 'react-router-dom';
import '../css/style.css'


const Home = () => {
    return (
        <div>

            <div className='container md:mx-auto px-2 md:my-36 '>

                <div className='container md:flex md:justify-between md:items-center'>

                    <div>
                        <h1 className='md:text-2xl font-sans text-cyan-500 py-1 '>Hi there! 👋, my name is</h1>

                        <h1 className='md:text-5xl text-white font-mono py-1'>Esteban Silvera Scaldaferro</h1>

                        <h1 className='md:text-5xl text-white font-mono py-1'>I create and build web applications</h1>

                        <p className='text-xl text-white py-4'>
                            Knowledge in backend and frontend, also in HTML, CSS, JavaScript,
                            with handling of several <br /> frameworks and libraries,creativity
                            for web design and effective adaptationto programming languages,<br />
                            able to design, develop, test, implement, maintain and improve any software application.</p>
                    </div>
                    <div>
                        <div className='bg-transparent absolute flex justify-between items-center pt-2 ' >

                            <IoLogoJavascript className='text-cyan-500 size-16 mx-4 animate-bounce' style={{animationDelay:"3s"}}/>

                            <IoLogoHtml5 className='text-cyan-500 size-16 md:mx-4 animate-bounce' style={{animationDelay:"4s"}} />
                            <FaCss3Alt className='text-cyan-500 size-16 md:mx-4 animate-bounce'  style={{animationDelay:"5s"}}/>
                            <GrMysql className='text-cyan-500 size-16 md:mx-4 animate-bounce'  style={{animationDelay:"6s"}}/>
                            <SiPostman className='text-cyan-500 size-16 md:mx-4 animate-bounce'  style={{animationDelay:"7s"}}/>
                            <SiTailwindcss className='text-cyan-500 size-16 md:mx-4 absolute top-20 animate-bounce'  style={{animationDelay:"2s"}}/>
                            <FaBootstrap className='text-cyan-500 size-16 md:mx-4 absolute top-40 animate-bounce' style={{animationDelay:"1s"}} />

                        </div>

                        <div className='rounded-2xl shadow-2xl object-cover z-0 w-full'>

                            <img src={gif} alt='gif' className='rounded-2xl w-full ' />

                        </div>

                    </div>
                </div>

            </div >



            <div className='container md:mx-auto px-2'>

                <div className='md:flex md:justify-center items-center'>

                    <div className='bg-white border-4 border-cyan-500 w-96 h-52 rounded-xl '>

                        <img src={gifvector} alt='gif' className='size-40 rounded-full shadow-2xl bottom-28 relative mx-auto border-4 border-cyan-500 ' />

                        <p className='text-center relative bottom-24 px-5'>
                            I have created these repositories with imagination and they were some of my beginnings as a frontend and backend
                        </p>

                    </div>

                    <div className='md:relative md:bottom-8 px-16'>

                        <SiPostman className='moving-icon icon1 text-white size-16 mx-4 absolute top-10 ' />

                        <IoLogoJavascript className='moving-icon icon2 text-white size-16 mx-4 ' />

                        <FaCss3Alt className='moving-icon icon3 text-white size-16 mx-4 absolute top-10 ' />

                        <IoLogoHtml5 className='moving-icon icon4 text-white size-16 mx-4' />
                        <Link to="/repositories">
                            <button
                                className='text-xl bg-cyan-500 hover:bg-cyan-300 text-white hover:text-black font-bold py-4 px-20 rounded transition-all duration-500 transform hover:scale-105 z-50'
                            >
                                Repositories
                            </button>
                        </Link>

                        <SiTailwindcss className='moving-icon icon5 text-white size-16 mx-4 absolute ' />

                        <FaBootstrap className='moving-icon icon1 text-white size-16 mx-4 absolute ' />

                        <GrMysql className='moving-icon icon3 text-white size-16 mx-4 absolute ' />

                        


                    </div>

                </div>



            </div>





        </div>

    )
}

export default Home