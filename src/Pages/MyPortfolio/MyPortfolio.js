import React from 'react'
import About from '../../Components/About/About'
import Blog from '../../Components/Blog/Blog'
import Contact from '../../Components/Contacts/Contact'
import Hero from '../../Components/Hero/Hero'
import Logo from '../../Components/Logo/Logo'
import NavBar from '../../Components/NavBar/NavBar'
import Projects from '../../Components/Projects/Projects'
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {useState} from 'react'


const MyPortfolio = ({projectData}) => {
  const [isLoading, setIsLoading] =useState(false)

 
  return (
    <div id='portfolio'>
    {isLoading? (
      <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    ):(
      <>
    <Logo/>
    <Hero />
    <NavBar />
    <About />
    <Projects projectData={projectData}/>
    <Blog />
    <Contact />
    </>
    )}
    </div>
  )
}

export default MyPortfolio
