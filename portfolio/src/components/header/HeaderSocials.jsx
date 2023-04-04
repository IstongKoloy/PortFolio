import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/glenn-andaleon-47a63724a/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/IstongKoloy" target="_blank"><BsGithub /></a>
      <a href="https://web.facebook.com/Istongkoloy" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
