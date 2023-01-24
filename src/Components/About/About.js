
import Title from '../Title/Title'
import classes from '../About/About.module.css'
import id from '../About/About.module.css'
import Card from '../Card/Card'
import photo from '../Assets/piccc.PNG'
import Skills from '../Skills/Skills'
import {motion} from 'framer-motion'
import Button from '../Button/Button'
import { useEffect } from 'react'




const About = () => {


  const msg = new SpeechSynthesisUtterance() 
  msg.voice = window.speechSynthesis.getVoices()[2];
 
   msg.text = "hello!"
  

  useEffect(() => {
    window.speechSynthesis.getVoices(msg);
    window.speechSynthesis.speak(msg);
    //eslint-disable-next-line

  }, [msg])


  const speechHandler = (msg) => {
    
    window.speechSynthesis.getVoices([2]);
    window.speechSynthesis.speak(msg)
  
  }
  return (
    <section className={classes.about}  id='about' >
      <h5>Get to know</h5>
      <div className='container'>
      <Title name="About Me"/>
     <div className={classes.about_container} >
    <Card heading="Fast"
    skill='I prioritize fast loading times and lag free interactions.'/>
    <Card heading="Responsive"
    skill='My layouts will work on any device. small or big.'/>
    <Card heading="Intuitive"
    skill='I prioritize fast loading times and lag free interactions.'/>
    <Card heading="Dynamic"
    skill='I prioritize fast loading times and lag free interactions.'/>
    </div>
    <div className={classes.about_infos} >
   <div className={classes.about_img_paragraph} >
      <div className={classes.about_img} >
        <img src={photo} alt='profile_picture'onMouseEnter={() => speechHandler(msg)}/>
          </div>
        <p>I'm a software engineer with focus in Frontend web development.
          I am a creative problem-solver with deep specialty in building and optimizing 
          user-focused websites, clean designs and thoughtful interactions.</p>
          <p>When i am not coding, i love to score songs🎼, watch movies🎥 and writeI✍️.</p>
        
          <div className={classes.btn}>
          <a href="https://github.com/PreyeO" target="_blank" rel="noreferrer" aria-label='Github'><Button name='GitHub'/></a>
          </div>
          </div>
        
        <motion.div className={classes.about_my_skills} animate={{ rotateX:'60deg'}} initial={{rotateX:'-60deg'}} transition={{repeat:Infinity,type:'tween', duration:5}}>
          <div className={classes.about_my_skill} >
            <Skills my_skills='HTML'/>
          </div>
          <div className={classes.about_my_skill} >
            <Skills my_skills='CSS'/>
          </div>
          <div className={classes.about_my_skill} id={id.javascript}>
            <Skills my_skills='JavaScript'/>
          </div> 
          <div className={classes.about_my_skill} >
            <Skills my_skills='ReactJS'/>
          </div>
          <div className={classes.about_my_skill} >
            <Skills my_skills='VueJS'/>
          </div>
          <div className={classes.about_my_skill}id={id.writing}>
            <Skills my_skills='Technical Writing'/>
          </div>
          <div className={classes.about_my_skill}>
            <Skills my_skills='GitHub'/>
          </div>
          <div className={classes.about_my_skill}>
            <Skills my_skills='Git'/>
          </div>
          <div className={classes.about_my_skill}>
            <Skills my_skills='SEO'/>
          </div>
          <div className={classes.about_my_skill}id={id.rest}>
            <Skills my_skills="Rest API" />
          </div>

        </motion.div>
        </div>
      </div>
      
    </section>
  )
}

export default About
