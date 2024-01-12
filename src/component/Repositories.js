import React from 'react'
import { Link } from 'react-router-dom'
import pokedex from '../img/pokedex.png'
import autoincrementar from "../img/autoincrementar.png"
import games from "../img/games.png"
import inventario from "../img/inventario.png"
import angular from "../img/angular.png"
import covid from "../img/covid.png"

const Repositories = () => {
    return (
        <div>

            <div className='flex flex-wrap justify-evenly items-center '>

                <Link to="https://pokedex-mu-sepia.vercel.app/" >
                    <img src={pokedex} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://contador-alpha-coral.vercel.app/" >
                    <img src={autoincrementar} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://games-mocha-six.vercel.app/" >
                    <img src={games} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>
                
                <Link to="https://inventario-3vre147k7-estebansilveras-projects.vercel.app/" >
                    <img src={inventario} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://app-angular-omega.vercel.app/home" >
                    <img src={angular} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>

                <Link to="https://angular-covid.vercel.app/login" >
                    <img src={covid} alt='pokedex' className='size-72 rounded-3xl border-4 border-red-600 w-full' />
                </Link>


            </div>

        </div>
    )
}

export default Repositories