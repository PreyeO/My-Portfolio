import React from 'react'
import Title from '../Title/Title'
import classes from '../Projects/Projects.module.css'


import {FaGlobe } from 'react-icons/fa'
import {GitHub} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react'

const Projects = ({projectData}) => {
  

  const [ref, inView] = useInView({
    threshold:0.4
  })
  const animation=useAnimation()
  useEffect(()=>{
    console.log('useeffect=', inView)
    if(inView) {
      animation.start({
        x:0,
        scale:[2,1],
        rotate:[90,0],
        transition: {
          duration:0.5, ease:'easeInOut'
        }
      })
      if(!inView){
        animation.start({
          x:'-100vw'
        })
      }
    }

  },[inView])
  
  return (
    <section className={classes.projects} id="projects">
      <h5>Some Things I've Built</h5>
      <div className='container' >
      <Title name="PROJECTS"/>
      <article  className={classes.project_container} >
        {projectData.map(item => (
          <motion.div key={item.id} whileHover={{scale:1.1}} transition={{duration:0.5}}>
          <motion.div className={classes.project_container_info } ref={ref} animate={animation}>
            <img src={item.image} alt={item.title} />
            <div className={classes.project_title}>
            <h2>{item.title}</h2>
        
          
            <div className={classes.button_links}>
            <a href={item.github} target="_blank" rel="noreferrer" aria-label='Repo'><GitHub style={{width:'2rem', height:'2rem'}}/></a>
            <a href={item.demo} target="_blank" rel="noreferrer" aria-label='Demo'><FaGlobe style={{width:'2rem', height:'2rem'}}/></a>
         
            </div>
            </div>
              <p>{item.description}</p>
              <h4>Languages: {item.languages}</h4>
</motion.div>
</motion.div>      
        
))} 
 </article>
      </div>

    
    </section>
  )
}

export default Projects
