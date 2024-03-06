import React, { useContext } from 'react'
import AboutImg from '../assets/about.png'
import { GlobaContext } from '../context/globalContext'

const About = () => {

  const { config } = useContext(GlobaContext)

  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 py-16'>
        <div className="py-5 md:w-1/2">
          <img src={AboutImg} alt="about" />
        </div>
        <div className='md:w-1/2 flex justify-center py-5'>
          <div className='md:w-2/3 flex flex-col justify-center text-white gap-4'>
            <h1 className='text-4xl font-bold border-b-4 border-primary text-center md:text-center w-[170px]'>About Me</h1>
            <p className=''>Hi, My name is <span className='font-bold'>Mohamed Shiyas B </span>{config.aboutMe.line_1}</p>
            <p>{config.aboutMe.line_2}</p>
            <p>{config.aboutMe.line_3}</p>
          </div>
        </div>
    </section>
  )
}

export default About