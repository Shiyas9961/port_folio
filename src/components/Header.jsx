import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function Header () {

    const [shoeMenu, setShowMenu] = useState(false)

    return (
        <header className="flex justify-between bg-primary items-center">
            <a href="#" className="font-bold text-xl sm:text-2xl text-black md:text-3xl hover:scale-105 hover:text-white duration-300">Mohamed Shiyas B</a>
            <nav  className="hidden md:block duration-150">
                <menu className="flex gap-4 text-white text-xl ">
                    <li ><a className='hover:bg-[#2b2d77] hover:text-white duration-300 border p-2 rounded overflow-hidden' href="/">Home</a></li>
                    <li ><a className='hover:bg-[#2b2d77] hover:text-white duration-300 border p-2 rounded overflow-hidden' href="#about">About</a></li>
                    <li ><a className='hover:bg-[#2b2d77] hover:text-white duration-300 border p-2 rounded overflow-hidden' href="#projects">Projects</a></li>
                    <li ><a className='hover:bg-[#2b2d77] hover:text-white duration-300 border p-2 rounded overflow-hidden' href="#resume">Resume</a></li>
                    <li><a className='hover:bg-[#2b2d77] hover:text-white duration-300 border p-2 rounded overflow-hidden' href="#contact">Contact</a></li>
                </menu>
            </nav>
            {
                shoeMenu && (
                    <nav className="block md:hidden">
                    <menu className="flex flex-col text-white text-xl mobile-nav">
                        <li onClick={() => setShowMenu(false)}><a href="/">Home</a></li>
                        <li onClick={() => setShowMenu(false)}><a href="#about">About</a></li>
                        <li onClick={() => setShowMenu(false)}><a href="#projects">Projects</a></li>
                        <li onClick={() => setShowMenu(false)}><a href="#resume">Resume</a></li>
                        <li onClick={() => setShowMenu(false)}><a href="#contact">Contact</a></li>
                    </menu>
                </nav>
                )
            }
            <button onClick={() => setShowMenu(prev => !prev)} className='md:hidden'><Bars3Icon className='text-white h-9 hover:scale-110 duration-200'/></button>
        </header>
    )
}

export default Header