import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [modal, showModal] = useState(0);
    const toggleModal = index => {
        showModal(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-react services__icon"></i>
                    <h3 className="services__title">
                        Frontend <br /> Development
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleModal(1)}>View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={modal === 1 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className='uil uil-times services__modal-close' onClick={() => toggleModal(0)}></i>

                        <h3 className="services__modal-title">Frontend Development</h3>
                        <p className="services__modal-description">Bring your website to life with my expert front-end development services.</p>

                        <ul className="services__modal-services grid">
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I develop user interface.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-desktop-alt services__icon"></i>
                    <h3 className="services__title">
                        Backend <br /> Development
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleModal(2)}>View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={modal === 2 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className='uil uil-times services__modal-close' onClick={() => toggleModal(0)}></i>

                        <h3 className="services__modal-title">Backend Development</h3>
                        <p className="services__modal-description">Power up your website with my robust back-end development services.</p>

                        <ul className="services__modal-services grid">
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Database design and optimization.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Security and performance optimization</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Services
