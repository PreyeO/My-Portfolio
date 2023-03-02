import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import CV from '../Assets/Ayibakepreye Omusuku Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
       <a href ={CV} download target="_blank" rel="noreferrer"className='btn'aria-label='Cv'>Download CV</a>
      <Link to='#about' className='btn btn_primary' aria-label='link to my about page' smooth>View my work</Link>
      </div>
  )
}

export default CTA
