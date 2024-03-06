import React, { useContext, useLayoutEffect, useState } from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { GlobaContext } from '../context/globalContext.jsx'

const Summery = () => {

  const { config }  = useContext(GlobaContext)
  const [width, setWidth] = useState(window.innerWidth)


  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }  
  },[width])

  return (
    <section id='summery' className='flex flex-col md:flex-row px-5 py-5 md:py-32 bg-primary justify-center'>
        <div className='md:w-1/2'>
            <h1 className='text-white font-hero-font text-2xl md:text-[2.5rem] lg:text-6xl'>
                Hi, <br />Im Mohamed <span className='text-black'>Shiyas</span> B
                <p className='text-lg lg:text-4xl py-2 md:py-0'>{config.description}</p>
            </h1>
            <div className='flex py-5 gap-6'>
                <a href={config.socialLinks.twitter} className='hover:text-[#1DA1F2]'><AiOutlineTwitter size={width > 340 ? 50 : 40}/></a>
                <a href={config.socialLinks.gitHub} className='hover:text-white'><AiOutlineGithub size={width > 340 ? 50 : 40} /></a>
                <a href={config.socialLinks.linkedin} className='hover:text-white'><AiOutlineLinkedin size={width > 340 ? 50 : 40}/></a>
                <a href={config.socialLinks.instagram} className='hover:text-[#d62976]'><AiOutlineInstagram size={width > 340 ? 50 : 40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} alt="hero" />
    </section>
  )
}

export default Summery