import React from 'react'
import classes from '../Hero/Hero.module.css'
import Social from '../Socials/Social'

import CTA from '../CTA/CTA'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Hero = () => {

const [text]= useTypewriter({
  words:['Professional Coder.', 'Software Developer.', 'Frontend Developer.', 'Technical Writer.'],
  loop:true,
  typeSpeed:20,
  deleteSpeed:10,
  delaySpeed:2000,
})

  return (
    <section className={classes.hero} >
      <motion.div className='container' initial={{x:"100vw"}} animate={{x:0}} transition={{type:'spring', duration:3, bounce:0.4}}>
      <div className={classes.hero_content} >
      <h1>Hello,</h1>
      <h2>I am <span>Preye Omusuku</span>.</h2>
      <h3>Your next <span className={text==='Professional Coder.'? 'text_color_one' : "" ||text==='Software Developer.' ?'text_color_two' : "" ||text==='Frontend Developer.' ?'text_color_three' : "" ||text==='Technical Writer.' ?'text_color_four' : "" }>{text}</span><Cursor cursorBlinking='false' cursorStyle="|" cursorColor='#EEA47FFF'/></h3>

      <CTA />
      <Social style={{display:'flex', flexDirection:'column', size:20}}/>
   
      </div>
   
      </motion.div>
      
    </section>
   
  )
}

export default Hero
