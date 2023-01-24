import React from 'react'
import {motion} from 'framer-motion'

const Logo = () => {
  return (
    <motion.div className='logo'animate={{y:15, x:30}} initial={{y:300,x:300}} transition={{type:'spring', duration:3, bounce:0.4}}>
     <h3>pDE<span>v{`/>`} </span></h3> 
    </motion.div>
  )
}

export default Logo
