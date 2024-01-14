import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import pokedex from '../img/pokedex.png'
import autoincrementar from "../img/autoincrementar.png"
import games from "../img/games.png"
import inventario from "../img/inventario.png"
import angular from "../img/angular.png"
import covid from "../img/covid.png"
import presentation from "../img/present.gif"
import fondo from "../img/fondo.jpg"


const Repositories = () => {


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

    return (
        <div>

            <div className='md:flex justify-center items-center p-20 ' style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition: "center" }}>


                <div className='bg-white w-72 rounded-2xl relative md:bottom-24'>

                    <p className='overflow-hidden whitespace-normal break-words p-6'>
                        hello, here you can see all the repositories and applications
                        that I have made with different languages,
                        mostly with JavaScript, and using frameworks like Angular and libraries like React.
                    </p>

                </div>

                {window.innerWidth <= 768
                    ?
                    <svg className='relative left-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="35" height="35">
                        <path d="M0 0 L5 10 L10 0 Z" fill="white" />
                    </svg>
                    :
                    <svg className='relative bottom-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="35" height="35">
                        <path d="M0 0 L10 5 L0 10 Z" fill="white" />
                    </svg>

                }

                <div >
                    <img src={presentation} alt='presentation' className='size-60 h-full mx-auto transform scale-x-[-1]' />
                </div>

            </div>




            <div className='container mx-auto flex flex-wrap justify-evenly items-center m-5'>

                <Link to="https://pokedex-mu-sepia.vercel.app/" >
                    <div className='py-5 flex justify-center items-center' >
                        <img src={pokedex} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://contador-alpha-coral.vercel.app/">
                    <div className='py-5 flex justify-center items-center' >
                        <img src={autoincrementar} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://games-mocha-six.vercel.app/" >
                    <div className='py-5 flex justify-center items-center' >
                        <img src={games} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://inventario-3vre147k7-estebansilveras-projects.vercel.app/" >
                    <div className='py-5 flex justify-center items-center' >
                        <img src={inventario} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://app-angular-omega.vercel.app/home" >
                    <div className='py-5 flex justify-center items-center' >
                        <img src={angular} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://angular-covid.vercel.app/login">
                    <div className='py-5 flex justify-center items-center' >
                        <img src={covid} alt='pokedex' className='size-72 rounded-3xl border-2 border-cyan-500 w-full' />
                        <div className='absolute mt-52 bg-transparent rounded-3xl backdrop-blur-sm px-20 py-4 text-center'>
                            <p className='text-xl'>viva Pokemon mamaguevo</p>
                        </div>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Repositories