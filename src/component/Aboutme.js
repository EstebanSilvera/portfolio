import React from 'react'
import img from "../img/img.gif"
import { GrMapLocation } from "react-icons/gr";
import { MdOutlinePhoneAndroid, MdOutlineEmail, MdDesignServices } from "react-icons/md";
import { FaLinkedin, FaGithub, FaRegHandPointRight } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaHeadphonesAlt, FaBook } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { BsSuitcaseLg, BsMouse3 } from "react-icons/bs";
import { LiaIdCardSolid } from "react-icons/lia";
import { GiWeightLiftingUp } from "react-icons/gi";
import { SiCircuitverse } from "react-icons/si";
import { CgGames } from "react-icons/cg";

import { FaReact, FaAngular, FaVuejs, FaCode } from "react-icons/fa";



const Aboutme = () => {
  return (
    <div>

      <div className='container flex justify-evenly items-center mx-auto p-10'>


        {/* Experiencias */}
        <div className=' w-96'>
          <h1 className='text-4xl text-cyan-500'>Experience and <br />achivetmenst</h1>

          <div className='text-white'>
            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Winner in presentation of projects with bullying applications.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Creation of the "Inventario" web application for the company Automotive Fujiyama.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Frameworks and libreries like angular, React, Vue, nodejs.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Knowledge of Frontend and Backend</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6' /><h3 className='size-full'>database management such as mysql, dbeaver and sql language</h3>
            </div>
          </div>

        </div>

        {/* img con referencia a mi */}
        <div>

          <img src={img} alt='img' className='rounded-full size-40 mx-auto shadow-2xl shadow-white' />

          <h2 className='flex py-10 text-xl text-white'>
            <RiDoubleQuotesL />Todo lo que imaginas, puedes crearlo<RiDoubleQuotesR />
          </h2>

        </div>



        {/* informacion de como contactarme */}
        <div className='w-96 '>

          <h1 className='text-4xl text-cyan-500 '>Contact</h1>

          <div className='text-white'>

            <p className='flex items-center'><GrMapLocation className='size-6 m-2' />Colombia, Atlantico</p>

            <p className='flex items-center'><MdOutlinePhoneAndroid className='size-6 m-2' />3013144857</p>

            <p className='flex items-center'><MdOutlineEmail className='size-6 m-2' />estebansilvera023@gmail.com</p>

            <a href='https://github.com/EstebanSilvera' className='flex items-center'><FaGithub className='size-6 m-2' />Esteban Silvera</a>

            <a href='https://www.linkedin.com/in/esteban-silvera-540193263/' className='flex items-center'><FaLinkedin className='size-6 m-2' />Esteban Silvera</a>

          </div>

        </div>

      </div>

      {/* lineas */}
      {/* <div className="absolute border-2 border-white h-60 z-50" style={{ top: "435px", right: "31.5vw" }}></div>
      <div className="absolute border-2 border-white w-40 z-50" style={{ top: "71%", right: "32%" }}></div>

      <div className="absolute border-2 border-white w-48 z-50" style={{ top: "79%", right: "30%" }}></div>
      <div className="absolute border-2 border-white h-44 z-50" style={{ top: "79%", right: "30%" }}></div>

      <div className="absolute border-2 border-white h-6 z-50" style={{ top: "55%" }}></div>
      <div className="absolute border-2 border-white z-50" style={{ top: "55%", left: "24%", width: "31rem" }}></div>
      <div className="absolute border-2 border-white h-8 z-50" style={{ top: "52%", left: "24%" }}></div> */}


      {/* Centro de las imagenes */}
      <div className='container flex justify-center mx-auto text-white p-10 '>

        <div className="md:absolute md:w-96 md:h-96 border-2 border-cyan-500 bg-cyan-500 rounded-full z-0 blur-2xl " style={{ top: "500px" }}> </div>

        <div className='p-5 z-50'>
          <FaHeadphonesAlt className='size-20 my-5' />
          <FaBook className='size-20' />
        </div>

        <div className='z-50'>
          <BsSuitcaseLg className='size-20 mx-10' />
          <GiLaptop className='size-40' />
        </div>

        <div className='px-5 z-50' >
          <LiaIdCardSolid className='size-16 m-2' />
          <MdOutlinePhoneAndroid className='size-16 m-2 my-4' />
          <BsMouse3 className='size-16 m-2' />
        </div>

      </div>


      <div className='flex justify-evenly items-center p-28'>

        <div className='w-96'>
          <h1 className='text-4xl text-cyan-500 py-5'>HOBBIES</h1>

          <h2 className='text-white'>I have many but these are some of the main ones</h2>

          <div className='flex justify-center items-center text-white'>
            <GiWeightLiftingUp className='size-20' /><h3 className='text-xl'>workout</h3>
          </div>

          <div className='flex py-5 text-white'>
            <div className='flex '>
              <SiCircuitverse className='size-16' /><h3 className='text-xl text-center'>new technology  </h3>
            </div>
            <div className='flex '>
              <CgGames className='size-16' /><h3 className='text-xl text-center'>play videogames </h3>
            </div>
          </div>

          <div className='flex py-5 text-white'>
            <div className='flex justify-center items-center '>
              <FaCode className='size-16' /><h3 className='text-xl text-center px-6'>codificar</h3>
            </div>
            <div className='flex justify-center items-center'>
              <MdDesignServices className='size-16' /><h3 className='text-xl px-6'>desing</h3>
            </div>
          </div>


        </div>

        <div className='w-96'>
          <h1 className='text-4xl text-cyan-500 py-5'>EDUCATION</h1>

          <h2 className='text-2xl text-white'>Institucion universitaria ITSA</h2>
          <div className='flex py-1 text-white'>
            <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Computer Systems Maintenance Technician</h3>
          </div>

          <h2 className='text-2xl text-white'>Institucion universitaria de barranquilla IU</h2>
          <div className='flex py-1 text-white'>
            <FaRegHandPointRight className='size-6' /><h3 className='size-full'>Technologist in Computer Systems Management</h3>
          </div>

        </div>

        <div className='w-96'>
          <h1 className='text-4xl text-cyan-500 '>SKILLS</h1>

          <h2 className='text-white'>Some skills of mine</h2>

          <div className='flex flex-wrap justify-center items-center'>
            <FaReact className='size-40 text-white' />
            <FaAngular className='size-40 text-white' />
            <FaVuejs className='size-40 text-white' />

          </div>




        </div>




      </div>




    </div>
  )
}

export default Aboutme