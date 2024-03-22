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

                    <p className='overflow-hidden whitespace-normal break-words p-6 text-center'>
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

                <Link to="https://pokedex-mu-sepia.vercel.app/" className='py-4'>
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={pokedex} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">pokedex with tablet</h2>
                            <p className="text-gray-600">This is the first application consuming the Pokémon API, and I added the pokedex to see the pokemon with their powers</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://contador-alpha-coral.vercel.app/" className='py-4'>
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={autoincrementar} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">Auto-incrementing counter</h2>
                            <p className="text-gray-600">Was one of the first applications I made with react using hooks such as useState and useEffect.</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://games-mocha-six.vercel.app/" className='py-4'>
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={games} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">Gamer computer equipment store</h2>
                            <p className="text-gray-600">It is a store which I added my first swisper and a responsive video. I think later I can add more features like a shopping cart and prices to all items, all this for any type of device without damaging the experience.</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://inventario-3vre147k7-estebansilveras-projects.vercel.app/" className='py-4'>
                    <div className=" mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={inventario} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">Inventory of computer and network equipment</h2>
                            <p className="text-gray-600 overflow-hidden whitespace-normal break-words">This was the biggest project I have done and one of the most complete, it was one of the projects that I was implementing in a company in which I did business practices, which worked with a database with nodejs for connections, creating APIs.</p>
                        </div>
                    </div>
                </Link>

                <Link to="https://app-angular-omega.vercel.app/home" className='py-4'>
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={angular} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">First application with Angular</h2>
                            <p className="text-gray-600">This application was made with a seed project which taught us the basics and everything we needed to consume APIs in angular and the handling of the components. Using boostrap for design</p>
                        </div>
                    </div>
                </Link>


                <Link to="https://angular-covid.vercel.app/login" className='py-4'>
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                        {/* Contenido de la tarjeta */}
                        <img className="w-full h-32 md:h-48 object-cover object-center" src={covid} alt="Imagen de la tarjeta" />
                        <div className="p-6">
                            <h2 className="font-semibold text-xl mb-2">Covid test</h2>
                            <p className="text-gray-600">this was a test I had by consuming an excel which had covid information for the whole united states and made a filter for each state and city with graphical representation, the excel is in my github.</p>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Repositories