import React from 'react'
import {motion} from 'framer-motion'

const Button = ({name, color}) => {
  return (
    <div className='btn'>
      <motion.button style={{background:color}} animate={{}}>{name}</motion.button>
      
    </div>
  )
}

export default Button
