import React from 'react'
import { useState, useEffect } from 'react';
import img from "../img/foto.png"
import binario from "../img/binario.gif"
import { GrMapLocation } from "react-icons/gr";
import { MdOutlinePhoneAndroid, MdOutlineEmail, MdDesignServices } from "react-icons/md";
import { FaLinkedin, FaGithub, FaRegHandPointRight, FaHeadphonesAlt, FaBook, FaReact, FaAngular, FaVuejs, FaCode, FaPython, FaNode } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { GiLaptop } from "react-icons/gi";
import { BsSuitcaseLg, BsMouse3 } from "react-icons/bs";
import { LiaIdCardSolid } from "react-icons/lia";
import { GiWeightLiftingUp } from "react-icons/gi";
import { SiCircuitverse } from "react-icons/si";
import { CgGames } from "react-icons/cg";
import { TbSql } from "react-icons/tb";


const iconsOrder = [
  <FaReact key="react" className='size-24 text-white m-2 ' />,
  <FaAngular key="angular" className='size-24 text-white m-2' />,
  <FaVuejs key="vue" className='size-24 text-white m-2' />,
  <FaPython key="python" className='size-24 text-white m-2' />,
  <FaNode key="node" className='size-24 text-white m-2' />,
  <TbSql key="sql" className='size-24 text-white m-2' />,
];


const Aboutme = () => {

  const [isDown, setIsDown] = useState(window.innerWidth <= 1536);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1536);

  const handleResize = () => {
    setIsDown(window.innerWidth <= 1536);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [icons, setIcons] = useState(iconsOrder);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotar los iconos cíclicamente
      setIcons((prevIcons) => [
        prevIcons[prevIcons.length - 1],
        ...prevIcons.slice(0, prevIcons.length - 1),
      ]);
    }, 3000); // Cambia la velocidad de rotación según tus necesidades

    return () => clearInterval(interval);
  }, []);



  return (
    <div>

      <div className='container md:flex md:justify-evenly md:items-center mx-auto md:p-10 px-2 movimientoRev'>


        {/* Experiencias */}
        <div className={`w-96 ${isMobile ? "py-10" : ""} `}>
          <h1 className='text-4xl text-center text-cyan-500'>EXPERIENCE AND ACHIVETMENST</h1>

          <div className='text-white'>
            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Winner in presentation of projects with bullying applications.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Creation of the "Inventario" web application for the company Automotive Fujiyama.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Frameworks and libreries like angular, React, Vue, nodejs.</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Knowledge of Frontend and Backend</h3>
            </div>

            <div className='flex py-1'>
              <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Database management such as mysql, dbeaver and sql language</h3>
            </div>
          </div>

        </div>

        {/* img con referencia a mi */}
        <div className='w-96'>

          <div className='rounded-full size-52 mx-auto shadow-2xl shadow-white z-0 border-2 border-white' style={{ backgroundImage: `url(${binario})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <img src={img} alt='img' className='relative bottom-10 left-5 z-50' style={{ height: "120%" }} />
          </div>

          <h2 className='flex py-10 px-10 text-xl text-white text-center'>
            <RiDoubleQuotesL />La programación es como la magia, pero más específica.<RiDoubleQuotesR />
          </h2>

        </div>



        {/* informacion de como contactarme */}
        <div className='w-96 px-10 '>

          <h1 className='text-4xl text-cyan-500 '>CONTACT</h1>

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

      {/* contact */}
      {!isDown

        ?
        <>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white 2xl:h-60 z-50" style={{ top: "435px", right: "29.5vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "11vw", top: "675px", right: "29.5vw" }}></div>

          {/* // skills */}
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white h-44 z-50" style={{ top: "750px", right: "29.5vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "11vw", top: "750px", right: "29.5vw" }}></div>

          {/* // experiences */}
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white 2xl:h-5 z-50" style={{ top: "500px", left: "23.8vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "25.7vw", top: "520px", left: "24%" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white 2xl:h-8 z-50" style={{ top: "520px", left: "49.5vw" }}></div>

          {/* // foto */}
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ height: "21.5rem", top: "250px", right: "39vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "5vw", top: "250px", right: "39vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "1.5vw", top: "592px", right: "39vw" }}></div>

          {/* // hobbies */}
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white h-80 z-50" style={{ top: "640px", left: "17vw" }}></div>
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white z-50" style={{ width: "22vw", top: "640px", left: "17vw" }}></div>

          {/* // education */}
          <div className="aparecer 2xl:absolute 2xl:border-2 border-white h-60 z-50" style={{ top: "790px", left: "43vw" }}></div>
        </>
        :
        <></>

      }



      {/* Centro de las imagenes */}
      <div className='container flex justify-center mx-auto text-white p-10 '>

        <div className="aparecer md:absolute md:w-96 md:h-96 border-2 border-cyan-500 bg-cyan-500 rounded-full z-0 blur-2xl " style={{ top: "500px" }}> </div>

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


      <div className='md:flex md:justify-evenly md:items-center md:p-28 px-2'>

        <div className='w-96'>
          <h1 className='text-4xl text-cyan-500 py-5'>HOBBIES</h1>

          <h2 className='text-white pb-5'>I have many but these are some of the main ones</h2>

          <div className='flex justify-center items-center text-white'>
            <GiWeightLiftingUp className='size-20' /><h3 className='text-xl'>Workout</h3>
          </div>

          <div className='flex py-5 text-white'>
            <div className='flex '>
              <SiCircuitverse className='size-16' /><h3 className='text-xl text-center'>New technology  </h3>
            </div>
            <div className='flex '>
              <CgGames className='size-16' /><h3 className='text-xl text-center'>Play videogames </h3>
            </div>
          </div>

          <div className='flex py-5 text-white'>
            <div className='flex justify-center items-center '>
              <FaCode className='size-16' /><h3 className='text-xl text-center px-6'>Encode</h3>
            </div>
            <div className='flex justify-center items-center'>
              <MdDesignServices className='size-16' /><h3 className='text-xl px-6'>Desing</h3>
            </div>
          </div>


        </div>

        <div className='w-96'>
          <h1 className='text-4xl text-cyan-500 py-5'>EDUCATION</h1>

          <h2 className='text-2xl text-white py-2'>INSTITUCION UNIVERSITARIA ITSA</h2>
          <div className='flex py-1 text-white'>
            <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Computer Systems Maintenance Technician</h3>
          </div>

          <h2 className='text-2xl text-white py-2'>INSTITUCION UNIVERSITARIA DE BARRANQUILLA IU</h2>
          <div className='flex py-1 text-white'>
            <FaRegHandPointRight className='size-6 px-1' /><h3 className='size-full'>Technologist in Computer Systems Management</h3>
          </div>

        </div>

        <div className={`w-96 ${isMobile ? "py-10" : ""}`}>
          <h1 className='text-4xl text-cyan-500 '>SKILLS</h1>

          <h2 className='text-white py-4'>Some skills of mine</h2>

          <div className="flex flex-wrap justify-center items-center">
            {icons.map((icon) => icon)}
          </div>




        </div>




      </div>




    </div>
  )
}

export default Aboutme