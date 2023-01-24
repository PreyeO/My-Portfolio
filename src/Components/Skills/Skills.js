import React from 'react'
import classes from '../Skills/Skills.module.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = ({my_skills}) => {
  return (
    <article className={classes.skills_card}>
      <div className={classes.skills_content}>
        <BsPatchCheckFill style={{ marginTop:13, color:"var(--color-primary)"}}/>
      <h4>{my_skills}</h4>
      </div>
      
    </article>
  )
}

export default Skills
