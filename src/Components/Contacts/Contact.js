import React from 'react'
import Title from '../Title/Title'
import classes from "../Contacts/Contact.module.css"
import ContactForm from '../Form/ContactForm'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react'

const Contact = () => {


  const [ref, inView] = useInView({
    threshold:0.2
  })
  const animation=useAnimation()
  useEffect(()=>{
    console.log('useEffect=>', inView)
    if(inView) {
      animation.start({
        scaleY:[0,1],
        exit:0,
    
        transition: {
          duration:1,
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
    <motion.section className={classes.contact} id='contact'animate={animation}ref={ref}>
      <h5>What's Next?</h5>
       <div className='container' >
        
      <Title name="Get In Touch"/>
      <div>
      <p>I am interested in 9-5 and freelance opportunities. However, if you have other request or question, don't hesitate to contact me.</p>
      </div>
      <ContactForm />
      </div>
      
    </motion.section>
  )
}

export default Contact
