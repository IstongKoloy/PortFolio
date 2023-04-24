import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleTab, setToggleTab] = useState(1);

    const toggleTabFn = index => {
        setToggleTab(index);
    }

  return (
    <section className="section qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleTab === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTabFn(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleTab === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTabFn(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon" ></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                
                <div className={toggleTab === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information Technology</h3>
                            <span className="qualification__subtitle">Sta. Mesa, Manila - PUP</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2014 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">FullStack Web Development</h3>
                            <span className="qualification__subtitle">KodeGo Bootcamp</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Nov. 2022 - Mar 2023
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleTab === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Office Staff</h3>
                            <span className="qualification__subtitle">Gen. Tri, Cavite - HRD Singapore Pte. Ltd.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar. 2016 - Jul. 2022 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
