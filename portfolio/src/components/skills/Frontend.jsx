import React from 'react'

const Frontend = () => {
    const frontSkillsData = [
        {id: 1, skillName: "HTML", skillLevel: "Advanced"},
        {id: 2, skillName: "CSS", skillLevel: "Advanced"},
        {id: 3, skillName: "JavaScript", skillLevel: "Advanced"},
        {id: 4, skillName: "Bootstrap", skillLevel: "Advanced"},
        {id: 5, skillName: "Git", skillLevel: "Basic"},
        {id: 6, skillName: "ReactJS", skillLevel: "Basic"},
    ]

  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
            {
                frontSkillsData.map(skillItem => (
                    <div className="skills__data" key={skillItem.id}>
                                <i className='bx bx-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">{skillItem.skillName}</h3>
                                    <span className="skills__level">{skillItem.skillLevel}</span>
                                </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Frontend
