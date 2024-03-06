import React, { useContext } from 'react'
import ResumeImg from '../assets/resume.jpg'
import { GlobaContext } from '../context/globalContext'

const Resume = () => {

  const { config } = useContext(GlobaContext)

  const downloadFile = () => {
    const fileName = config.resume_link.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = config.resume_link
    aTag.setAttribute('download', fileName)

    document.body.appendChild(aTag)

    aTag.click()
    aTag.remove()
  }

  return (
    <section id='resume' className='bg-secondary px-5 py-10 md:py-32 flex flex-col md:flex-row'>
        <div className="md:w-1/2 flex justify-center items-center py-5 md:justify-end">
            <img className='w-[300px]' src={ResumeImg} alt="resume" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center text-white py-5">
            <h1 className='font-bold  text-4xl mb-6 border-b-4 border-primary text-center w-[140px]'>Resume</h1>
            <p className='pb-5 text-xl flex flex-col justify-center items-center gap-2'>You can view my Resume <button onClick={downloadFile} className='resume-btn'>Download</button></p>
        </div>
    </section>
  )
}

export default Resume