import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import {SiHashnode } from 'react-icons/si'

import classes from "../Socials/Social.module.css"



const Social = () => {
  return (
    <div div className={classes.main_socials}>
    <div className={classes.socials}>
      <a href="https://www.linkedin.com/in/ayibakepreye-omusuku-234554172" target="_blank" rel="noreferrer"  aria-label="linkedin"><AiOutlineLinkedin style={{width:20, height:20}}/></a>
      <a href="https://twitter.com/POmusuku" target="_blank" rel="noreferrer" aria-label='twitter'><AiOutlineTwitter style={{width:20, height:20}}/></a>
      <a href="https://github.com/PreyeO" target="_blank" rel="noreferrer" aria-label='github'><AiOutlineGithub style={{width:20, height:20}}/></a>
      <a href="https://www.instagram.com/omusukupreye" target="_blank" rel="noreferrer" aria-label='instagram'><AiOutlineInstagram style={{width:20, height:20}}/></a>
      <a href="https://www.instagram.com/omusukupreye" target="_blank" rel="noreferrer"aria-label='my_blog'><SiHashnode style={{width:20, height:20}}/></a>
            
      </div>
      <div className={classes.emails}>
        <a href="mailto:ayibakepreyeomusuku@gmail.com" target="_blank" rel="noreferrer" aria-label='email'><h5>ayibakepreye@gmail.com</h5></a>
      </div>
  
    </div>
  )
}

export default Social
