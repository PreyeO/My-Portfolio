import React from 'react'
import classes from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
    <h5>&copy; 2022 Preye Omusuku PDev<span className='logo-span'> {`/>`}</span>, All rights reserved</h5>
    </div>
    </footer>

  )
}

export default Footer
