import React from 'react'
import './header.css'
import HeaderBtn from './HeaderBtn'
import DP from '../../assets/dp.webp'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Glenn Andaleon</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <HeaderBtn />
        <HeaderSocials />

        <div className="dp">
          <img src={DP} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
