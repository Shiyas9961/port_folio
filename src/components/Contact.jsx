import React, { useContext } from 'react'
import { GlobaContext } from '../context/globalContext'

const Contact = () => {

  const { config } = useContext(GlobaContext)

  return (
    <section id='contact' className='bg-primary px-5 py-10  md:py-28 flex flex-col text-white'>
        <div className='flex flex-col sm:items-center'>
            <h1 className='text-4xl font-bold border-b-4 border-secondary w-[200px]'>Contact Me</h1>
            <div className='flex items-center flex-col py-5 md:py-10'>
              <p className='py-5'>If you want to descuss more in details please contact me</p>
              <p className='py-3 text-sm md:text-lg'><span className='font-bold'>Email : </span>  {config.email}</p>
              <p><span className='font-bold'>Phone : </span> {config.phone}</p>
            </div>
            
        </div>
    </section>
  )
}

export default Contact