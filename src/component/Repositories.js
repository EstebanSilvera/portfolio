import React from 'react'
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
    return (
        <div>

            <div className='flex justify-center items-center p-20' style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition:"center"}}>

                <div className='opacity-100 z-50'>
                    <img src={presentation} alt='presentation' className='size-60 h-full' />
                </div>

                <svg className='relative bottom-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="35" height="35">
                        <path d="M0 5 L10 0 L10 10 Z" fill="white" />
                    </svg>

                <div className='bg-white w-72 rounded-2xl relative bottom-24'> 

                    <p className='overflow-hidden whitespace-normal break-words p-6'>
                        hello, here you can see all the repositories and applications
                        that I have made with different languages,
                        mostly with JavaScript, and using frameworks like Angular and libraries like React.
                    </p>

                </div>

            </div>




            <div className='container mx-auto flex flex-wrap justify-evenly items-center m-5'>

                <Link to="https://pokedex-mu-sepia.vercel.app/" className='py-5' >
                    <img src={pokedex} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://contador-alpha-coral.vercel.app/" className='py-5'>
                    <img src={autoincrementar} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://games-mocha-six.vercel.app/" className='py-5'>
                    <img src={games} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://inventario-3vre147k7-estebansilveras-projects.vercel.app/" className='py-5'>
                    <img src={inventario} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://app-angular-omega.vercel.app/home" className='py-5'>
                    <img src={angular} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://angular-covid.vercel.app/login" className='py-5'>
                    <img src={covid} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>


            </div>

        </div>
    )
}

export default Repositories