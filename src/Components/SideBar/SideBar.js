import React, {useState} from 'react'
import classes from '../SideBar/SideBar.module.css'
import {AiOutlineBars, AiOutlineUser} from "react-icons/ai"
import { HashLink as Link } from 'react-router-hash-link'
import {Newspaper, Home, ContactEmergency, PeopleAlt, Work, VerifiedUser, Person, NewspaperTwoTone} from '@mui/icons-material'


const SideBar = () => {

  const [isBarOpen, setBarOpen] =useState(false)


  const handleToggle=()=>{
    setBarOpen(!isBarOpen)
    if(isBarOpen == true){
      console.log('yes')
    }else{console.log('nah')}
  }

  // const menuItems=[
  //   {
  //   text:"Home",
  //   icon:<AiOutlineHome/>
  //   },
  //   {
  //     text:"About",
  //     icon:<AiOutlineHome/>
  //     },
  //     {
  //       text:"Projects",
  //       icon:<AiOutlineHome/>
  //       },
  //       {
  //         text:"Blog",
  //         icon:<AiOutlineHome/>
  //         },
  //         {
  //           text:"Contact",
  //           icon:<AiOutlineHome/>
  //           },
  // ]
  return (
    <nav className={isBarOpen? 'sidebar':'sidebar sidebar_close'}>
      {isBarOpen && (
      <div>
        <h2>PdeV</h2>
      </div>
      )}
      <div className={isBarOpen? 'hamburger hamburger_open':'hamburger hamburger_close'}>
      <button onClick={handleToggle}><AiOutlineBars style={{width:34, height:31, display:'block', marginTop:5, borderRadius:15}}/>
      {/* <span></span>
      <span></span>
      <span></span>   */}
      </button>
      </div>
      <div className={classes.SideBar_icons}>
      <Link to='#' smooth><Home/></Link>
      {isBarOpen &&(
        
        <h3>home</h3>
     
      )}
      </div>
      <div className={classes.SideBar_icons}>
    <Link to='#about' smooth><Person/></Link>
      {isBarOpen &&(
         
        <h3>About me</h3>
        
      )}
      </div>
      <div className={classes.SideBar_icons}>
      <Link to='#projects' smooth><Work/></Link>
      {isBarOpen &&(
        <h3>Projects</h3>
      )}
      </div>
      <div className={classes.SideBar_icons}>
      <Link to='#blog' smooth><NewspaperTwoTone/></Link>
      {isBarOpen &&(
        <h3>Projects</h3>
      )}
      </div>
     
    
       <div className={classes.SideBar_icons}>
       <Link to='#contact' smooth><ContactEmergency /></Link>
      {isBarOpen &&(
        <h3>Contact</h3>
      )}
      </div>
       {/* <div className={classes.SideBar_icons}>
      <PeopleAlt />
      {isBarOpen &&(
        <h3>Socials</h3>
      )}
      </div> */}
    </nav>
  )
}

export default SideBar
