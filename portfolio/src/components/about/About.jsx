import React, { useState } from 'react'
import './about.css'
import AboutMeImg from '../../assets/aboutme-img.jpg'
import {FaAward} from 'react-icons/fa'
import CertModal from '../modal/CertModal'

const About = () => {

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMeImg} alt="" />
          </div>
        </div>
        <div className="about__content">
          <a className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h4>KodeGo Fullstack Web Development</h4>
              <small>Certificate</small>
            </article>
          </a>

          <p>I am a passionate career shifter who is interested in the field of web development and design. With a creative eye and a love for coding, I have honed my skills in developing and designing websites, constantly seeking out new challenges to tackle. My dedication and enthusiasm for this field makes me a valuable asset to any team or project I work on, and I am constantly seeking out ways to improve and grow in my career.</p>
          <a href="#contact" className='btn btn-primary aboutBtn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
