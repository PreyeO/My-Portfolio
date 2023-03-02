import React from 'react'
import Title from '../Title/Title'
import classes from "../Contacts/Contact.module.css"
import ContactForm from '../Form/ContactForm'

const Contact = () => {
  
  return (
    <section className={classes.contact} id='contact'>
      <h5>What's Next?</h5>
       <div className='container' >
        
      <Title name="Get In Touch"/>
      <div>
      <p>I am interested in freelancing, 9-5 jobs and volunteering opportunities. However, if you have other request or question, don't hesitate to contact me.</p>
      </div>
    
      <ContactForm />
    
      </div>
      
    </section>
  )
}

export default Contact
