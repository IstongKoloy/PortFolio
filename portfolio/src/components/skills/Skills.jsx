import React from 'react'
import './skills.css'
import {GoArrowRight} from 'react-icons/go'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container skills__container'>
        <h5>My</h5>
        <h2>Work Experience</h2>
        
        <div className="exp__cards">
          
          <div className='exp__card'>
            <h2>Office Staff</h2>
            <h5>H.R.D. Singapore Pte. Ltd. | 2016 - 2022</h5>
            <ul>
              <li><i><GoArrowRight /></i> Finalize the quality of floor plans before sending to customer</li>
              <li><i><GoArrowRight /></i> Confirms all the confirmations/concerns from the team about the floor plan to Japanese advisers in Philippines and in Japan</li>
            </ul>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Skills
