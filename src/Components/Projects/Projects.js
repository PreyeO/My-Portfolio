import React from 'react'
import Title from '../Title/Title'
import classes from '../Projects/Projects.module.css'
import {FaGlobe } from 'react-icons/fa'
import {GitHub} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Button from '../Button/Button'

const Projects = ({projectData}) => {
  

 
  
  return (
    <section className={classes.projects} id="projects">
      <h5>Some Things I've Built</h5>
      <div className='container' >
      <Title name="Projects"/>
      <article  className={classes.project_container} >
        {projectData.map(item => (
          <motion.div key={item.id} whileHover={{scale:1.1}} transition={{duration:0.5}}>
          <div className={classes.project_container_info }>
            <img src={item.image} alt={item.title} />
            <div className={classes.project_title}>
            <h2>{item.title}</h2>
            </div>
      
            {/* <div className={classes.button_links}>
            <a href={item.github} target="_blank" rel="noreferrer" aria-label='Repo'><GitHub style={{width:'2rem', height:'2rem'}}/></a>
            <a href={item.demo} target="_blank" rel="noreferrer" aria-label='Demo'><FaGlobe style={{width:'2rem', height:'2rem'}}/></a>
         
            </div> */}
           
              <p>{item.description}</p>
              {/* <h4>Languages: {item.languages}</h4> */}
                  
      <div className={classes.btns}>
            <a href={item.demo} target="_blank" rel="noreferrer" aria-label='Repo' className='btn'>Live Demo</a>

            <a href={item.github} target="_blank" rel="noreferrer" aria-label='Demo'  className='btn btn_primary'>View GitHub</a>
      </div>
</div>
</motion.div>      
        
))} 
 </article>
      </div>

    
    </section>
  )
}

export default Projects
