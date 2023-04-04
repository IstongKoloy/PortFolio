import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderBtn = () => {
  return (
    <div className='header_btn'>
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderBtn
