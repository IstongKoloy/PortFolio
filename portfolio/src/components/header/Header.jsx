import './header.css';
import { useState, useEffect } from 'react';

const Header = () => {
    const [menu, showMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };
 
  return (
    <header className={`header ${isScrolled ? "navbar-shadow" : "header"}`}>
        <nav className="nav container">
            <a href="#home" className="nav__logo">GAndaleon</a>
            <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className='uil uil-estate nav__icon'></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className='uil uil-user nav__icon'></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className='uil uil-briefcase-alt nav__icon'></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className='uil uil-scenery nav__icon'></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='uil uil-message nav__icon'></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!menu)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!menu)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
