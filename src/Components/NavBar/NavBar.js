import React,{useState}from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {Newspaper, Home, Work,Person,ContactMail} from '@mui/icons-material'
import classes from'../NavBar/NavBar.modules.css'


const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#portfolio')

  
  return (
    <nav className={classes.nav}>
     
    <Link to='#portfolio' smooth aria-label='home'onClick ={(() => setActiveNav('#portfolio'))}className= {activeNav === '#portfolio' ? 'active' : ''}><Home /></Link>
    <Link to='#about'  smooth aria-label='about'onClick={(() => setActiveNav('#about'))} className= {activeNav === '#about' ? 'active' : ''}><Person /></Link>
    <Link to='#projects' smooth aria-label='project' onClick={(() => setActiveNav('#projects'))} className= {activeNav === '#projects' ? 'active' : ''}><Work /></Link>
    <Link to='#blog' smooth aria-label='blog'onClick={(() => setActiveNav('#blog'))} className= {activeNav === '#blog' ? 'active' : ''}><Newspaper /></Link>
    <Link to='#contact' smooth aria-label='contact'onClick={(() => setActiveNav('#contact'))} className= {activeNav === '#contact' ? 'active' : ''}><ContactMail /></Link>

    
    </nav>
  )
}

export default NavBar
