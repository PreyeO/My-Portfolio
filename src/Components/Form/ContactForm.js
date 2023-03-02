import React from 'react'
import Button from '../Button/Button'
import classes from '../Form/ContactForm.modules.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_58r2wyt', 'template_a2zsyre', form.current, 'l0I0JqGC9YbdMHWbO')
    e.target.reset()
    toast.success('Message received. I would get back to you shortly.')
  }
  return (
    <article>
    <form className={classes.form} ref={form} onSubmit={sendEmail}>
      <input type='text' placeholder='Full name' name='name'/>
      <input type='email' placeholder='janedoe@yahoo.com'name='email' />
      <textarea name='message' cols='20 'rows="10"placeholder='Type in message' message='message'/>
    <Button name='Send Message' className='btn' id='form_button' />
    </form>
    <div className={classes.toast_message}>
    <ToastContainer />
    </div>

    </article>
  ) 
}

export default ContactForm
