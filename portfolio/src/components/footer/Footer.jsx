import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">GAndaleon</h1>

            <ul className="footer__list">
                <li>
                    <a href="https://web.facebook.com/Istongkoloy" className='footer__link' target='_blank'>
                        <i class="uil uil-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/glenn-andaleon-47a63724a/" className='footer__link' target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/IstongKoloy" className='footer__link' target='_blank'>
                        <i class="uil uil-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
