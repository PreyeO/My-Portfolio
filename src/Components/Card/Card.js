import React from 'react'
import classes from "../Card/Card.module.css"
import {motion} from 'framer-motion'

const Card = ({skill, heading}) => {
  return (
    <motion.div className={classes.card} animate={{ x:-400, x:0}}  transition={{repeat:Infinity,type:'spring', bounce:5}}>
      <h2>{heading}</h2>
      <p>{skill}</p>
      
    </motion.div>
  )
}

export default Card
