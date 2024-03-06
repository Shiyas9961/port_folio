import React, { useContext } from 'react'
import { GlobaContext } from '../context/globalContext.jsx'

const Projects = () => {

  const { config } = useContext(GlobaContext)

  return (
    <section id='projects' className='px-5 bg-primary py-10 md:py-28 flex flex-col text-white gap-3'>

        <div className='flex flex-col py-5'>
            <h1 className='text-4xl font-bold border-b-4 border-[#2b2d77] w-[140px] text-center '>Projects</h1>
            <p className='mt-2'>These are my some of best projects. I have built these with React, MERN and Vannilla CSS. Check  these out.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-5 py-5 items-center'>
          {
            config.projects.map((project, index) => (
                  <div className='relative rounded h-[190px]  md:h-[240px]  md:w-[500px]' key={index}>
                    <img className='h-full w-full rounded' src={project.image} alt="project1" />
                    <div className='bg-desc flex flex-col justify-center'>
                      <p className='text-center p-5'>{project.description}</p>
                      <div className="flex justfy-center">
                        <a className='border border-white rounded p-2 font-semibold hover:bg-black' href={project.gitHub_link}>GitHub Link</a>
                      </div>
                    </div>
                </div>
            ))
          }
        </div>
    </section>
  )
}

export default Projects