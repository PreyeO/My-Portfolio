import React from 'react'
import Title from '../Title/Title'
import classes from "../Contacts/Contact.module.css"
import ContactForm from '../Form/ContactForm'
import {motion} from 'framer-motion'

const Contact = () => {
  
  return (
    <motion.section className={classes.contact} id='contact'>
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
