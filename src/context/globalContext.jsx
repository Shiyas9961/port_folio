import { createContext } from "react";
import ProjectImg1 from '../assets/project1.jpg'
import ProjectImg2 from '../assets/project2.jpg'
import ProjectImg3 from '../assets/project3.jpg'

export const GlobaContext = createContext()

const ContextProvider = ({ children }) => {

    const config = {
        email : 'shiyasshiyyu9961@gmail.com',
        phone : '+91 8547237188',
        year : '2024',
        description : 'Im a Full Stack Developer',
        socialLinks : {
            twitter : 'https://x.com/shiyasmohd2?t=Od5KQ-S94buh4E6KPaWMMQ&s=09',
            instagram : 'https://www.instagram.com/shi_ya.s/',
            linkedin : 'https://www.linkedin.com/in/mohamed-shiyas-b-490595287/',
            gitHub : 'https://github.com/Shiyas9961/'
        },
        aboutMe : {
            line_1 : 'I am a Full Stack Developer.I built beautiful website with Reactjs.',
            line_2 : 'I am proficient in Frontend skills like Reactjs, Redux, Redux Toolkit, TailwindCSS, Bootstrap5 many more...',
            line_3 : 'In Backend I have good knowledge about Nodejs, Expressjs, MongoDB, Mongoose'
        },
        projects : [
            {
                image : ProjectImg1,
                description : 'A E-Commerce website. Built with MERN Stack.',
                gitHub_link : 'https://github.com/Shiyas9961/e-cart-e-commerce'
            },
            {
                image : ProjectImg2,
                description : 'My Portfolio website. Built with Reactjs and TailwindCSS',
                gitHub_link : 'https://github.com/Shiyas9961/port_folio'
            },
            {
                image : ProjectImg3,
                description : 'Electronics repair shop website. Built with MERN Stack',
                gitHub_link : 'https://github.com/Shiyas9961/techNotes'
            }
        ],
        resume_link : `${window.location.protocol}//${window.location.host}/resume.pdf`
    }

    return (
        <GlobaContext.Provider value={{ config }}>
            { children }
        </GlobaContext.Provider>
    )
}

export default ContextProvider