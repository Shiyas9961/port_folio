import React, { Fragment } from 'react'
import Summery from '../components/Summery'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

const Main = () => {
  return (
    <Fragment>
        <Summery/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
    </Fragment>
  )
}

export default Main