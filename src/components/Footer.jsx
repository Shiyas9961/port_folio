import React, { useContext } from 'react'
import { GlobaContext } from '../context/globalContext'

const Footer = () => {

  const { config } = useContext(GlobaContext)

  return (
    <footer className='bg-secondary px-5 py-6 text-white text-center'>
        <p className='text-xl font-bold'>&copy; Mohamed Shiyas B {config.year}</p>
    </footer>
  )
}

export default Footer