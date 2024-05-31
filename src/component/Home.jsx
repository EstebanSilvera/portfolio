import gif from '../img/gif-vector2.gif'
import gifvector from '../img/gif-vector.gif'
import { useState, useEffect } from 'react';
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Link } from 'react-router-dom';
import '../css/style.css'


const Home = () => {

    const [colorRed, setColorRed] = useState(false)

    const [velocidad, setVelocidad] = useState(false)

    const cambiar = () => {
        setColorRed(true)
    }

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updateCursorPosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div>
            <div className="cursor z-0" style={{ left: position.x, top: position.y }}></div>

            <div className='relative z-50 container md:mx-auto px-2 md:py-36'>

                <div className='container xl:flex xl:justify-evenly xl:items-center'>

                    <div className='z-50'>
                        <h1 className='md:text-2xl font-sans text-cyan-500 py-1 '>Hi there! 👋, my name is</h1>

                        <h1 className='md:text-5xl text-white font-mono py-1 letras'>Esteban Silvera Scaldaferro</h1>

                        <h3 className='md:text-4xl text-white font-mono py-1'>I create and build web applications</h3>

                        <p className='text-xl text-white py-4 text-justify md:w-[80vh]'>
                            Knowledge in backend and frontend, also with handling of several frameworks and libraries,
                            creativity for web design and effective adaptation to programming languages,
                            able to design, develop, test, implement, maintain and improve any software application.</p>
                    </div>
                    <div>
                        <div className='bg-transparent absolute flex justify-between items-center pt-2 z-50' >

                            <FaBootstrap className='text-cyan-500 size-16 md:mx-4 absolute top-40 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "1s" }} />
                            <SiTailwindcss className='text-cyan-500 size-16 md:mx-4 absolute top-20 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "3s" }} />
                            <IoLogoJavascript className='text-cyan-500 size-16 mx-4 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "5s" }} />
                            <IoLogoHtml5 className='text-cyan-500 size-16 md:mx-4 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "7s" }} />
                            <FaCss3Alt className='text-cyan-500 size-16 md:mx-4 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "9s" }} />
                            <GrMysql className='text-cyan-500 size-16 md:mx-4 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "11s" }} />
                            <SiPostman className='text-cyan-500 size-16 md:mx-4 animate-bounce' onMouseEnter={() => cambiar()} style={{ animationDelay: "13s" }} />

                        </div>


                        <div className='relative z-40'>

                            <div className="md:absolute md:w-96 md:h-96 border-2 border-cyan-500 rounded-2xl z-0 blur-sm -top-[5vw] right-[10vw]"></div>

                            <div className={`rounded-2xl shadow-2xl ${!colorRed ? 'hover:shadow-white' : "shadow-cyan-500"} transition duration-700 w-full `}>

                                <img src={gif} alt='gif' onMouseEnter={() => setColorRed(false)} className='relative rounded-2xl w-full z-50' />

                            </div>

                            <div className="md:absolute md:w-96 md:h-96 border-2 border-cyan-500 rounded-2xl z-0 blur-sm top-[5vw] 2xl:-right-[5vw] -right-[1vw] "> </div>
                        </div>


                    </div>
                </div>

            </div >


            <div className='container md:mx-auto px-2 my-[40vh]'>

                <div className='md:flex md:justify-center items-center'>

                    <div className={`${velocidad ? 'shake' : ''} relative bg-white border-4 border-cyan-500 w-96 h-52 rounded-xl z-50`} >

                        <img src={gifvector} alt='gif' className='size-40 rounded-full shadow-2xl bottom-28 relative mx-auto border-4 border-cyan-500 ' />

                        <p className='text-center relative bottom-24 px-5'>
                            I have created these repositories with imagination and they were some of my beginnings as a frontend and backend
                        </p>

                    </div>

                    <div className='md:relative md:bottom-8 px-16'>

                        <SiPostman className={`${velocidad ? 'moving-icon2' : 'moving-icon '} icon6 text-white size-16 mx-4 absolute top-10`} />

                        <IoLogoJavascript className={`${velocidad ? 'moving-icon2' : 'moving-icon'} text-white size-16 mx-4 `} />

                        <FaCss3Alt className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon3 text-white size-16 mx-4 absolute top-10 `} />

                        <IoLogoHtml5 className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon4 text-white size-16 mx-4 absolute`} />

                        <Link to="/repositories">
                            <button
                                onMouseEnter={() => setVelocidad(true)}
                                onMouseLeave={() => setVelocidad(false)}
                                className='relative text-xl bg-cyan-500 hover:bg-cyan-300 text-white hover:text-black font-bold py-4 px-20 rounded transition-all duration-500 transform hover:scale-105 z-50'
                            >
                                Repositories
                            </button>
                        </Link>

                        <SiPostman className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon2 text-white size-16 mx-4 absolute`} />

                        <SiTailwindcss className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon5 text-white size-16 mx-4 absolute`} />

                        <FaBootstrap className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon1 text-white size-16 mx-4 absolute`} />

                        <GrMysql className={`${velocidad ? 'moving-icon2' : 'moving-icon'} icon3 text-white size-16 mx-4 absolute`} />


                    </div>

                </div>



            </div>





        </div>

    )
}

export default Home